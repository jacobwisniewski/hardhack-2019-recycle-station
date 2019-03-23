from flask import Flask
from flask_restful import Resource, Api
from picamera.array import PiRGBArray
from picamera import PiCamera
import numpy as np
import time

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
    # Initialize rasp pi camera and grab reference to raw camera
    camera = PiCamera()
    rawCapture = PiRGBArray(camera)

    # Allow the camera to warmup
    time.sleep(0.1)

    # Grab image form the camera
    camera.capture(rawCapture, format='bgr')
    image = rawCapture.array

    return image


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

