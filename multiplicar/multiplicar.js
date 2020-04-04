//-----------------------------------------------------//
const fs = require("fs"); // ya existe en node
var colors = require("colors");

//-----------------------------------------------------//
// module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject("no es un numero: " + base);
      return;
    }

    let data = "";

    for (let i = 0; i <= limite; i++) {
      data += `${base} * ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`file-${base}-al-${limite}`);
    });
  });
};
//-----------------------------------------------------//
let listarTabla = (base, limite = 10) => {
  console.log("==============".green);
  console.log(`==Tabla del ${base}==`.red);
  console.log("==============".green);
  
  for (let i = 0; i <= limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`);
  }
};
//-----------------------------------------------------//
module.exports = {
  crearArchivo,
  listarTabla,
};
