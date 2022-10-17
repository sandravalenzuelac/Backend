class Usuario {
   constructor(nombre, apellido){
      this.nombre = nombre;
      this.apellido = apellido;
      this.mascotas = ["perro","gato"];
      this.libros = []
   } 

    getFullName = () => {
       console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }

   addMascota = () =>{
      this.mascotas.push("hamster");
      console.log(this.mascotas)
    }

   countMascotas = () => {
      console.log( `Tengo ${this.mascotas.length} mascotas`);
    }

    addBook(nombre, autor) {
      this.libros.push({
         nombre: nombre,
         autor: autor
      })
    }

   getBookNames() {
        return this.libros.map(libro => libro.nombre);   
   }
   
  
 }

const usuario1 = new Usuario("Sandra", "Valenzuela")


usuario1.getFullName();
usuario1.addMascota();
usuario1.countMascotas();
usuario1.addBook("nombre: Habitos atomicos", "autor: James Clear");
usuario1.addBook("nombre: El Alquimista", "autor: Paulo Coelho");

console.log(`Los libros de ${usuario1.nombre} son: ${usuario1.getBookNames()}`)
