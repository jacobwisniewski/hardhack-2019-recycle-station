from flask import Flask, abort, request
from flask_restful import Resource, Api


app = Flask(__name__)
api = Api(app)


class CycleStation(Resource):
    def get(self):
        # Return yes or no
        pass

