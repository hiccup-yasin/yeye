#!/usr/bin/python
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
    GPIO.cleanup()
    if GPIO.getmode() is None:
        GPIO.setmode(GPIO.BOARD)
           
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

def get_distance_value():
    GPIO.cleanup()
    if GPIO.getmode() is None:
        GPIO.setmode(GPIO.BOARD)
        
    
    PIN_TRIGGER = 13
    PIN_ECHO = 11

    GPIO.setup(PIN_TRIGGER, GPIO.OUT)
    GPIO.setup(PIN_ECHO, GPIO.IN)

    GPIO.output(PIN_TRIGGER, GPIO.LOW)

    time.sleep(2)

    GPIO.output(PIN_TRIGGER, GPIO.HIGH)

    time.sleep(0.00001)

    GPIO.output(PIN_TRIGGER, GPIO.LOW)

    while GPIO.input(PIN_ECHO)==0:
        pulse_start_time = time.time()
    while GPIO.input(PIN_ECHO)==1:
        pulse_end_time = time.time()

    pulse_duration = pulse_end_time - pulse_start_time
    distance = round(pulse_duration * 17150, 2)
    
    GPIO.cleanup()
    
    return distance
  
@app.route('/')
def home():
    return jsonify({ 'success': "ok"})
    
@app.route('/data')
def data():
    return jsonify({ 
    "temp": get_temp_value(), 
    'light': get_light_value(),
    'distance': get_distance_value()
    })
if __name__ == '__main__':
    app.run( host='0.0.0.0',port=4000)



