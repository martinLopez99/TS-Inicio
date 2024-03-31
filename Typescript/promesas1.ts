(()=> {

   console.log('Inicio');
   const prom1 = new Promise((resolve, reject) => {
      setTimeout(() => {
         reject('Se termino el time out');
      }, 1000);
   });

   prom1
         .then( mensaje => console.log(mensaje))
         .catch(err => console.warn(err));
   console.log('Fin');
})(); //Función autoinvocada - (function(){})();




