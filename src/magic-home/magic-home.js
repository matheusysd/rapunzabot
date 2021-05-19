const { Control, CustomMode } = require('magic-home');

const light = new Control(process.env.LED_1_IP);
if (!light?.ack?.power) {
  light.setPower(true).then(success => {
    console.log('Luz ligada')
  }).catch(error => console.log(error));
}

// let my_effect = new CustomMode();

// my_effect
// 	.addColor(255, 0, 255)
// 	.addColor(0, 255, 0)
// 	.addColor(255, 0, 0)
// 	.addColor(0, 0, 255)
// 	.setTransitionType("jump");

//   light.setCustomPattern(my_effect, 200).then(success => {
//     console.log((success) ? "success" : "failed");
//   }).catch(err => {
//     return console.log("Error:", err.message);
//   });


// light.setPattern('red_green_cross_fade', 100, (a)=> console.log(a))
// light.setCustomPattern('rave', 100, (a)=> console.log(a))
module.exports = light;
