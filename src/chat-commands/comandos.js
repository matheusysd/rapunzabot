const light = require('../magic-home/magic-home');
const colors = require('../colors/colors');
const listaComandos = require('./listaComandos');

function comandos(msg) {
  const removeCommand = msg.replace("!", "");
  if (removeCommand.includes('cor ')) {
    const splittedString = removeCommand.split(" ");
    return listaComandos[splittedString[0]](splittedString[1]);
  } else if (listaComandos.hasOwnProperty(removeCommand)) {
    return listaComandos[removeCommand]();
  }
  else {
    return null;
  }
}

module.exports = comandos;
