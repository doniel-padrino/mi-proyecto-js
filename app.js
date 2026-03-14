//Creación de un middleware
//Envío de archivo en una petición GET
//Probando el resultado
require('dotenv').config(); //para trabajar con variables de entorno
const express = require('express');

const port = process.env.PORT
const app = express();

//creamos un middleware que diga cual es el directorio principal de la página estática
//los middleware se ejecutan antes del resto del contenido

app.use(express.static('public'));

//sendFile para enviar un archivo
app.get('/contacta',(req,res)=>{
    res.sendFile(`${__dirname}/public/contacta.html`);
});

app.get('/localizacion',(req,res)=>{
    res.sendFile(`${__dirname}/public/localizacion.html`);
});

/*app.get('*',(req,res)=>{
    res.sendFile(`${__dirname}/public/404.html`);
});*/

//Solución de chatGPT
app.use((req,res)=>{
    res.sendFile(`${__dirname}/public/404.html`);
});

app.listen(port,()=>{console.log('http://localhost:8080')})
