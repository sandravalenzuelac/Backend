class usuario {
   constructor(nombre, apellido){
      this.nombre = nombre;
      this.apellido = apellido;
      this.mascotas = ["perro","gato"];
      this.libros =
      [{
         nombre:"Habitos atomicos",
         autor:"James Clear"
       },
       {
        nombre: "El Alquimista",
        autor:"Paulo Coelho"
       }];
   } 

    getFullName = () => {
       console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }

   addMascota = () =>{
      this.mascotas.push("hamster");
      console.log(this.mascotas)
    }

   countMascotas = () => {
      console.log(this.mascotas.length);
    }

//     getBooks(nombre) {
//       console.log(this.libros.nombre)
// }

   addBook(nombre, autor) {
         this.libros.push(nombre, autor);
         console.log(this.libros)
   }

 }

const usuario1 = new usuario("Sandra", "Valenzuela")


usuario1.getFullName();
usuario1.addMascota();
usuario1.countMascotas();
usuario1.getBooks();
usuario1.addBook("Cien años de soledad", "Marquez");
