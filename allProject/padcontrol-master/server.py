# coding=utf-8

from nanopad import Pad

from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash
import signal,sys

from datetime import timedelta
from flask import make_response, current_app
from functools import update_wrapper

DEBUG = True

app = Flask(__name__)
app.config.from_object(__name__)

############# Used for the crossdomain error #######################

def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, basestring):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, basestring):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator

###################################################################

def shutdown_server():
    func = request.environ.get('werkzeug.server.shutdown')
    if func is None:
        raise RuntimeError('Not running with the Werkzeug Server')
    func()


# Init the loop that aquire the data from the controller
pad = Pad()
pad.start()


def sigterm_handler(_signo, _stack_frame):
    # Raises SystemExit(0):
    pad.stop()
    shutdown_server()

signal.signal(signal.SIGINT, sigterm_handler)



@app.route("/watt")
@crossdomain("*")
def getScore():
    """
    Return the score
    """
    return str(pad.score)

app.run("0.0.0.0",port=4000)
