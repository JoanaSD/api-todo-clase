require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");

const servidor = express();

servidor.use(bodyParser.json());

servidor.use("/pruebas", express.static("./pruebas_api"));

servidor.get("/api-todo", (peticion,respuesta) => {

    respuesta.send("metodo GET");

});

servidor.post("/api-todo", (peticion,respuesta) => {

    respuesta.send("metodo POST");

})

servidor.put("/api-todo", (peticion,respuesta) => {

    respuesta.send("metodo PUT");
})

servidor.delete("/api-todo", (peticion,respuesta) => {
    
    respuesta.send("metodo DELETE");

});

servidor.use((peticion,respuesta) => {
    respuesta.json({ error : "not found" });
});


servidor.listen(process.env.PORT);