const Gpio = require('pigpio').Gpio;
 
const servoH = new Gpio(17, {mode: Gpio.OUTPUT});
const servoV = new Gpio(27, {mode: Gpio.OUTPUT});
 
let pulseWidth = 1000;
let increment = 100;
 
setInterval(() => {
    servoH.servoWrite(pulseWidth);
    servoV.servoWrite(pulseWidth);
 
  pulseWidth += increment;
  if (pulseWidth >= 2000) {
    increment = -100;
  } else if (pulseWidth <= 1000) {
    increment = 100;
  }
}, 100);