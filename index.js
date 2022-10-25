const Contenedor = require("./contenedor")
const contenedor = new Contenedor();

let producto = {
    name:"Producto 1",
    price: 1,
};

// contenedor.createproducto(producto).then((response) =>{
//     console.log(response);
// });

// contenedor.readProductos().then((response)=>{
//     console.log(response)
// })

// contenedor.getById(2).then((response)=>{
//     console.log(response)
// })

// contenedor.deleteById(2).then((response)=>{
//     console.log(response)
// })

contenedor.deleteAll().then((response)=>{
    console.log(response)
})