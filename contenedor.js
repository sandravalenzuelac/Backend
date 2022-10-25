const fs = require("fs");

const pathToFile = "./productos.json";

class Contenedor{
   createproducto = async (producto) => {
    if(!producto.name || !producto.price){
        return {
            status: "error",
            message:"missing required fields"
        };
      }
        try{
            if(fs.existsSync(pathToFile)){
                let data = await fs.promises.readFile(pathToFile, "utf-8");
                let productos= JSON.parse(data);
                let id = productos.length + 1;
                producto.id = id;
                productos.push(producto);
                await fs.promises.whiteFile(pathToFile, JSON.stringify(productos, null, 1));
                return {
                    status: "success",
                    message: "Producto creado"
                };
            } else {
                producto.id = 1;
                await fs.promises.whiteFile(
                    pathToFile, 
                    JSON.stringify([producto], null, 1)
                    );
                    return {
                       status: "success",
                       message: "Producto creado"
                    };
              }
          } catch (error) {
            return {
                status: "error",
                message:"missing required fields"
            };
        }
      };

      readProductos = async () => {
        try {
            if(fs.existsSync(pathToFile)){
                let data = await fs.promises.readFile(pathToFile, "utf-8");
                let productos = JSON.parse(data);
                return {
                    status: "success",
                    productos: productos,
                }
            } else{
                return{
                    status: "error",
                    message: "No products found"
                }
            }
        }catch (error){
            return {
                status: "error",
                message: error.message
            }
        }

      }

      getById = async(id) =>{
        if (!id){
            return{
                status: "error",
                message: "ID is required"
            };
        }
        if(fs.existsSync(pathToFile)){
            let data = await fs.promises.readFile(pathToFile, "utf-8");
            let productos = JSON.parse(data);
            let producto = productos.find((producto) => producto.id = id);
            if(producto){
                return{
                    status: "success",
                    user: user,
                }   
            } else{
                return{
                    status: "error",
                    message: "product not found"
                };
                }
            } else {
                return{
                    status: "error",
                    message: "No product found"
                }
            }
        }
      deleteById = async (id) =>{
            if (!id){
                return{
                    status: "error",
                    message: "ID is required"
                };
            } 
            if(fs.existsSync(pathToFile)){
                let data = await fs.promises.readFile(pathToFile, "utf-8");
                let productos = JSON.parse(data);
                let newProductos = productos.filter((producto)=> producto.id != id)
                await fs.promises.whiteFile(
                    pathToFile,
                    JSON.stringify(newProductos, null, 1)
                );
                return{
                    status: "success",
                    message: "product deleted"
                }
        } else{
            return{
                status: "error",
                message: "no product found"
            }
        }
      }
    
      deleteAll = async () => {
        try {
        if (fs.existsSync(pathToFile)) {
        fs.unlinkSync(pathToFile)
        } else {
        return {
        status: "Error",
        Message: "No product found"
        }
        }
        } catch (error) {
        return {
        status: "Error",
        message: error.message
        }
        }
        }
    }



module.exports = Contenedor;