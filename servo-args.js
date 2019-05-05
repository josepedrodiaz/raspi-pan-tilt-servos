const Gpio = require('pigpio').Gpio;

//read command line paramaters
var h_v = process.argv.slice(2);
var hPos = h_v[0];
var vPos = h_v[1];
 
const servoH = new Gpio(17, {mode: Gpio.OUTPUT});
const servoV = new Gpio(27, {mode: Gpio.OUTPUT});

servoH.servoWrite(hPos);
servoV.servoWrite(vPos);

