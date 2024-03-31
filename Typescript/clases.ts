(()=> {

      class Avenger {

         /*nombre:string;
         equipo:string;
         nombreReal:string;
         puedePelear:boolean;
         peleasGanadas:number;*/
         
         //Con Typescript puedo inicializar y definir todo desde aca
         constructor(   public nombre:string,
                        public equipo:string,
                        public nombreReal?:string,       // Despues de un atributo opcional NO puede seguir uno no opcional.. los opcionales van al final
                        public puedePelear?:boolean,
                        public peleasGanadas?:number){}

      }

      const antman: Avenger = new Avenger('Antman','IronMan','Gaston',true,3);
      console.log(antman);

})(); //Función autoinvocada - (function(){})();




