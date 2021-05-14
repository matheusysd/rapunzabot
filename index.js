const { Discovery } = require('magic-home');
const { Control } = require('magic-home');

 
let discovery = new Discovery();
discovery.scan(500).then(devices => {
    console.log(devices)
});

let light = new Control("192.168.100.15");
// light.setPower(true).then(success => {
// console.log('foi')});
light.setColor(0,0,255).then(success =>{ console.log('eae')})