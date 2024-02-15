const postgres = require("postgres");

function conectar(){

    return postgres({
        host : "localhost",
        port : 5432,
        database : "tareas",
        user : "postgres",
        password : "root"
    });

}

module.exports = {getTareas,crearTareas, actualizarTareas,borrarTareas};