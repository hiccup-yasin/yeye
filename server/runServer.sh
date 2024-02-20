#!/bin/bash

# Load the necessary kernel modules
sudo modprobe w1-gpio
sudo modprobe w1-therm

# Run the Python script
python3 api.py
