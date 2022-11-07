import fs from 'fs';

class Contenedor{
    constructor(file){
        this.file = file;
    }

    getAll = async() => {
            try{
                  let products = await fs.promises.readFile(this.file, 'utf-8')
                  return JSON.parse(products)
                 } catch (err) {
                    console.log(`error:${err}`);
                     return []
                }
                    }       
  
    save = async object => {
        const products = await this.getAll()
        object.id = products.length === 0 ? 0 : object.id = products[products.length - 1].id + 1
        products.push(object)
        try {
            await fs.promises.writeFile(this.file, JSON.stringify(products, null, 2))
            console.log('Guardado exitoso')
        } catch (err) {
            console.log(`error:${err}`);
        }
    }                    
    checkLength(arr){
        if (arr.length === 0){
            console.error('El array esta vacio')
            return false
        }
        return true
    }
    async getById(id){
                const products = await this.getAll()
                if(!this.checkLength(products)){
                    return
                }
                let product = products.find(element => element.id == id)
                return product ? product : null
            }
   
     async deleteById(id){
                const products = await this.getAll()
                 if(!this.checkLength(products)){
                         return
                 }
                 const product = products.find(element => element.id == id)
                 const newProducts = products.filter(element => element != product)
                 console.log(newProducts)
                 try {
                     await fs.promises.writeFile(this.file, JSON.stringify(newProducts, null, 2))
                    console.log(`Cambios guardados`)
                        } catch (err) {
                            console.log(`error:${err}`);
                        }
    }
    

    async deleteAll(){
        try {
            console.log('Se borran los productos ...')
            await fs.promises.writeFile(this.file, "")
            console.log('Productos eliminados exitosamente.')
        } catch (err) {
            console.log(`error:${err}`);
        }
    }

}


export default Contenedor;