import  express  from "express";
import Contenedor from './contenedor.js';
import fs from "fs";

const app = express()
const PORT = 8080;

const server = app.listen(process.env.PORT || PORT,()=>{
    console.log(`Servidor HTTP escuchando en el puerto ${PORT}`);
});

server.on('error', err => console.log(`error: ${err}`));

const products = new Contenedor("products.txt");

app.get('/productos', async(req, res)=>{
    const productos = await products.getAll();
    res.send(productos);
});

app.get('/productosRandom', async(req, res)=>{
    const productos = await products.getAll();
    let numerosRandom = Math.floor(Math.random() * productos.length);
    let value = productos[numerosRandom];
    res.send(value);
});



