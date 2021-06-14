const express = require("express")
const servidor = express()
const path = require("path")

//Configuraciones (settings)
servidor.set("puerto",3000)
servidor.use(express.static("public"))
//Herramientas intermedias (middleware)


//rutas(routes)
servidor.use(require("./rutas/solicitudes.js"))


//Servidor escuchando
servidor.listen(servidor.get("puerto"), () =>
{
    console.log("Servidor escuchando en el puerto: ", servidor.get("puerto"))
});