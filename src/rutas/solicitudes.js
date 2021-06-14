const express = require("express")
const route = express.Router()

var options = {root:require("path").join(__dirname,"../vistas")}

route.get("/", (req,res) =>
{
    //res.send("Ok")
    res.sendFile("index.html",options)
});

route.get("/confInicial", (req ,res) =>
{
    res.sendFile("confInicial.html",options)
})

route.get("/areaTrabajo", (req,res) =>
{
    res.sendFile("areaTrabajo.html",options)
})

route.get("/cambios", (req,res) =>
{
    res.sendFile("cambios.html",options)
})

route.get("/historialEstado", (req,res) =>
{
    res.sendFile("/historialEstado.html",options)
})

route.get("/ramificacion", (req, res) =>
{
    res.sendFile("/ramificacion.html",options)
})

route.get("/colaboracion", (req,res) =>
{
    res.sendFile("/colaboracion.html",options)
})

module.exports = route