from picamera.array import PiRGBArray
from picamera import PiCamera

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


print(capture_image())