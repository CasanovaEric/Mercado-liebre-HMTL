const express = require('express');
const path = require('path');
const app = express(); 

const publicPath = path.resolve (__dirname, "./public/images") 
app.use(express.static(publicPath))


app.listen(3000, () =>  
console.log("Escuchando en el puerto"));  

app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname + "/views/home.html"))
})

