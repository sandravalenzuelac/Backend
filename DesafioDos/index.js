const Contenedor = require('./contenedor')

async function contenedor(){
    const products = new Contenedor('products.txt')
    
    console.log('Mostramos todos los productos')
    let allProducts = await products.getAll()
    console.log(allProducts)
  
    let newProductUno = {"id":1, "name":"Producto 1", "price": 1} 
    await products.save(newProductUno)
    let newProductDos = {"name":"Producto 2", "price": 2}
    await products.save(newProductDos)
    
    console.log('Prueba de eliminacion')
    let productIdDelete = 1
    await products.deleteById(productIdDelete)
    // allProducts = await products.getAll() 
    // console.log(allProducts)
   
    await products.deleteAll()
}
contenedor()