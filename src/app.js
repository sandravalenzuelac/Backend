import express from 'express';

const app = express();

const server = app.listen(8080, ()=> console.log('Escuchando a Express'))

let productos = [
{name:"productoUno",
  price: 1
},
{name:"productoDos",
  price: 2
},
{name:"productoTres",
  price: 3
}
]

app.get('/productos',(req,res)=>{
  res.send({productos:productos})
})

app.get('/productosRandom',(req, res)=>{
  
})