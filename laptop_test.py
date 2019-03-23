from picamera.array import PiRGBArray
from picamera import PiCamera
import numpy as np
import time


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
