(()=> {

    const sumar = (a:number, b:number): number => a + b;

    const nombe = ():string => 'Hola';

    const obtenersalario = ():Promise<string> => { //De esta manera devuelvo un Promise<string> que es un string
        return new Promise((res,rej) =>{
            //res(1); esto me tira error porque espera devolver un string, no un numero
            res('Hola');
        });
    }
    
    obtenersalario().then(a => console.log(a.toUpperCase()));

})(); //Función autoinvocada - (function(){})();




