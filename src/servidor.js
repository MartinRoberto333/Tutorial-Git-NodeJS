const express = require("express")
const servidor = express()
const path = require("path")

//Configuraciones (settings)
servidor.set("puerto",3000)
servidor.use(express.static("public"))
//Herramientas intermedias (middleware)


//rutas(routes)

servidor.get("/", (req,res) =>
{
    //res.send("Ok")
    res.sendFile(path.join(__dirname,"vistas/index.html"))
    
});


//Servidor escuchando
servidor.listen(servidor.get("puerto"), () =>
{
    console.log("Servidor escuchando en el puerto: ", servidor.get("puerto"))
});