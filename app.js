// require

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const argv = require("./config/yargs").argv;
// var colors = require('colors');
const colors = require("colors/safe");

/*--------------------------------------------------------------------------/
 code 
/--------------------------------------------------------------------------*/
let base = "2";

let comando = argv._[0];

switch (comando) {
  case "listar":
    listarTabla(argv.base, argv.limite);

    break;
  case "crear":
    crearArchivo(argv.base, argv.limite)
      .then((archivo) => console.log(`Archvio creado: `, colors.green(archivo)))
      .catch((err) => {
        console.log(err);
      });

    break;

  default:
    console.log("no reconocido");

    break;
}

// node app crear --base 10
// node app listar -b 5 -l 20
