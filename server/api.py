from flask import Flask, jsonify
from flask_cors import CORS
import RPi.GPIO as GPIO
from gpiozero import LightSensor, Buzzer
import os
import glob
import time
 
os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')
 
base_dir = '/sys/bus/w1/devices/'
device_folder = glob.glob(base_dir + '28*')[0]
device_file = device_folder + '/w1_slave'

app = Flask(__name__)
CORS(app)

def read_temp_raw():
    f = open(device_file, 'r')
    lines = f.readlines()
    f.close()
    return lines
    
def get_light_value():      
    ldr = LightSensor(21)
    return(ldr.value)

def get_temp_value():
    lines = read_temp_raw()
    while lines[0].strip()[-3:] != 'YES':
        time.sleep(0.2)
        lines = read_temp_raw()
    equals_pos = lines[1].find('t=')
    if equals_pos != -1:
        temp_string = lines[1][equals_pos+2:]
        temp_c = float(temp_string) / 1000.0
        temp_f = temp_c * 9.0 / 5.0 + 32.0
        return temp_c


@app.route('/')
def home():
    return jsonify({ 'success': "ok"})
    
@app.route('/data')
def read_sensor():
    light_value = get_light_value()
    temp_value = get_temp_value()
    return jsonify({ 'light': light_value, "temp": temp_value})

if __name__ == '__main__':
    app.run( port=4000, debug=True, threaded=False)

