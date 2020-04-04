const opt = {
  base: {
    demand: true, // hacerlo obligatirio
    alias: "b",
  },
  limite: {
    alias: "l",
    default: 10,
  },
};

const argv = require("yargs")
  .command("listar", "Imprime en consola la tabla de multiplicar", opt)
  .command("crear", "Crea un archivo con la tabla de multiplicar", opt)
  .help().argv; // node app listar --help

module.exports = {
  argv,
};
