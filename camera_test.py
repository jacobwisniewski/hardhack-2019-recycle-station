from picamera.array import PiRGBArray
from picamera import PiCamera
import cv2
import time
import numpy as np
from sklearn.cluster import KMeans
from PIL import Image


def get_avg_colour():
    img = capture_image()
    img = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)

    img = img.reshape((img.shape[0] * img.shape[1],3)) #represent as row*column,channel number
    clt = KMeans(n_clusters=3) #cluster number
    clt.fit(img)
    return clt.cluster_centers_


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


def display_avg():
    colours = get_avg_colour()
    w, h = 600, 200
    data = np.zeros((h, w, 3), dtype=np.uint8)
    for x in range(w):
        for y in range(h):
            if x <= 200:
                data[y, x] = colours[0]
            elif x <= 400:
                data[y, x] = colours[1]
            else:
                data[y, x] = colours[2]
    image = Image.fromarray(data, 'RGB')
    image.show()