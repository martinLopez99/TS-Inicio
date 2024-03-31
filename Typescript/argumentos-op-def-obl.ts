(function(){
   
   function activar( quien:string ,                     // Si no se especifica nada, son argumentos obligatorios
                     momento?:string,                   // Le indico que el momento puede ser opcional
                     objeto:string = 'batiseñal' ){     // Si no se especifica nada, son argumentos obligatorios

      (momento) ? console.log(`${quien} activó la ${objeto} a la ${momento}`) :
      console.log(`${quien} activó la ${objeto}`);
   }

   
   activar('Gordon','tarde');

})(); //Función autoinvocada - (function(){})();




