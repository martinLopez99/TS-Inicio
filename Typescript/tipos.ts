(function(){
   let mensaje:string = 'Hola';
   let numero:number = 123;

   // let cualquiercosa; Lo puedo especificar aun mejor al indicarle los posibles tipos de datos que quiero que maneje
   let booleano:boolean = true;
   let hoy:Date = new Date();

   let cualquiercosa: string | number | Date;

   cualquiercosa = mensaje;
   cualquiercosa = numero; 
   //cualquiercosa = booleano; //Aca tira error porque no es un tipo de dato yo que permito, no esta definido arriba
   cualquiercosa = hoy;

   //Objeto 
   let spiderman = {
      nombre: 'Peter',
      edad: 34
   };


   console.log(mensaje);
})(); //Función autoinvocada - (function(){})();




