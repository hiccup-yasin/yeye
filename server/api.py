from flask import Flask, jsonify
from flask_cors import CORS
import RPi.GPIO as GPIO
from gpiozero import LightSensor, Buzzer


app = Flask(__name__)
CORS(app)

def get_light_value():
    ldr = LightSensor(21)
    return(ldr.value)

@app.route('/')
def home():
    return jsonify({ 'success': "ok"})
    
@app.route('/data')
def read_sensor():
    light_value = get_light_value()
    return jsonify({ 'light': light_value})

if __name__ == '__main__':
    app.run(host='127.0.1.1', port=4000, debug=True, threaded=False)

