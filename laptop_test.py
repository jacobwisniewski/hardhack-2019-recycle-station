import cv2
import numpy as np
import time


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


if __name__ == '__main__':
    objects = ['can', 'bottle', 'paper', 'pencil case']
    avg_obj_colours = {}
    for obj in objects:
        print(f'Put {obj} in front of the camera')
        time.sleep(5)
        print('Capturing image...')
        avg_obj_colours[obj] = get_avg_colour()
        print()

    print(avg_obj_colours)
    print()

    while True:
        print('Put the object in front of camera')
        time.sleep(5)
        colour = get_avg_colour()
        min_obj = None
        min_dist = None
        for obj, obj_col in avg_obj_colours.items():
            dist = np.linalg.norm(colour - obj_col)
            if not min_dist or dist < min_dist:
                min_obj = obj
                min_dist = dist
        print(f'The object is {min_obj}, distance was: {min_dist}')
        print()
