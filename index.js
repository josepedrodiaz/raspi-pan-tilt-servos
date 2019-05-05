const Gpio = require('pigpio').Gpio;
 
const led = new Gpio(17, {mode: Gpio.OUTPUT});
 
let dutyCycle = 0;

let ascDecFlag = "ASC";// ASC pwm up DESC pwm down

let stepSize;// tamanio del salto entre un pulso y otro
 
setInterval(() => {
  led.pwmWrite(dutyCycle);
 
  if(ascDecFlag == "ASC"){
    dutyCycle += stepSize;
  }else{
    dutyCycle -= stepSize;
  }
  
  if (dutyCycle > 255) {
    ascDecFlag == "DESC";
  }else if (dutyCycle < 0){
    ascDecFlag == "ASC";
  }
}, 20);