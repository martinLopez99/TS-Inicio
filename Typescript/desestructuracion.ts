(()=> {

   const avenger ={
      nombre:'Steve',
      clave: 'Capitan America',
      poder:'Fuerza'
   }
   
   //Normalmente para acceder a los datos del objeto haria lo siguiente: 
   /*console.log(avanger.nombre);
   console.log(avanger.calve);
   console.log(avanger.poder);*/

   //Pero con la desestructuración de Objetos lo puedo hacer de esta forma 

   const {nombre, clave} = avenger;    //Con esto indico que atributos me interesan a mi 
   //console.log(nombre);
   //console.log(clave);
   
   //Esto tambien funciona para las funciones 
   const extraer = ({nombre, clave}:any) => { // De esta manera puedo extraer lo que sea que este mandando a la función
      console.log(nombre);
      console.log(clave);
   }

   //extraer(avenger);

   //Arreglos
   const avengers: string[] =['Thor','Ironman','Spiderman']; //Indico que es un arreglo.. que solo acepta strings 

   //console.log(avengers[0]);
   //console.log(avengers[1]);
   //console.log(avengers[2]);

   //Desestrcuturación de arreglos 
   //NOTA - Como es un arreglo la desestructuración se hace con [], en el caso de objetos (como mas arriba) es con {}

   const [a, b, c] = avengers; //Aca especifico el orden 
   //console.log(a);
   //console.log(b);
   //console.log(c);

   //Si yo solo quiero por ejemplo lo que esta en la posición 3 del arreglo lo hago de esta forma 

   const [, , d] = avengers; //Aca especifico el orden 
   //console.log(d);

   const extraerArr = ([a,b,c]:string[]) => { // De esta manera puedo extraer lo que sea que este mandando a la función
      console.log(a);
      console.log(b);
      console.log(c);
   }
   
   extraerArr(avengers);




})(); //Función autoinvocada - (function(){})();




