class usuario {
   constructor(nombre, apellido){
      this.nombre = nombre;
      this.apellido = apellido;
      this.libros = [{
         nombre:"Habitos atomicos",
         autor:"James Clear"
       },
       {
        nombre: "El Alquimista",
        autor:"Paulo Coelho"
       }];
      this.mascotas = ["perro","gato"]
   } 

    getFullName = () => {
       console.log(`Hola soy ${this.nombre} ${this.apellido}`);
    }

   addMascota = () =>{
      this.mascotas.push("hamster");
      console.log(this.mascotas)
    }

   countMascotas = () => {
       this.mascotas++;
       usuario.countMascotas()
    }

   // AddBook

   // getBookNames
}

const usuario1 = new usuario("Sandra", "Valenzuela")

usuario1.getFullName();
usuario1.addMascota();
usuario1.countMascotas();