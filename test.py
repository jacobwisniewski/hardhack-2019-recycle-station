from flask import Flask
from flask_restful import Resource, Api
import cv2
import numpy as np

app = Flask(__name__)
api = Api(app)


ITEM_DATA = {
    'can': [8, 8, 8],
    'bottle': [4,  8, 10],
    'paper': [21, 55, 71],
    'pencil case': [8,  9, 10]
}


def get_avg_colour():
    img = capture_image()
    avg_colour = np.mean(img, axis=(0, 1)).astype(int)
    return avg_colour


def capture_image():
    cap = cv2.VideoCapture(0)
    if cap.isOpened():
        _, frame = cap.read()
        cap.release()
        cv2.destroyAllWindows()
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        return frame


def unique_count_app(image_array):
    return np.mean(image_array, axis=(0, 1))


def get_item(colour):
    min_obj = None
    min_dist = None
    for obj, obj_col in ITEM_DATA.items():
        dist = np.linalg.norm(colour - obj_col)
        if not min_dist or dist < min_dist:
            min_obj = obj
            min_dist = dist

    return min_obj


class CycleStation(Resource):
    def get(self):
        print('Getting color')
        colour = get_avg_colour()
        item = get_item(colour)
        print(item)

        if item in ['can', 'bottle']:
            return 'Y'
        else:
            return 'N'


api.add_resource(CycleStation, '/')

if __name__ == '__main__':
    app.run(debug=True)

