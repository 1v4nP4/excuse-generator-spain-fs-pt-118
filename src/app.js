




window.onload = function() {
  //write your code here
  //Generador de excusas:Iván Padrón(A.K.A Spidy)
  //Empezaré haciendo los arrays de excusas
 

  //funcion de excuse generator
  const generadorExcusas =(excusa) =>{
    //array con los componentes de la excusa 
    const who = ["La abuela" , "El perro" , "Mi novia" , "El gato"];
    const action = ["se comió" , "rompió" , "mojó"  , "bugeó"];
    const what  = ["la tarea" , "el portatil" , "el codespace" , "el cable"];
    const where = ["en mi casa" , "en la calle" , "en el suelo" , "en github"];
    const when = ["ayer." , "el otro día." , "en verano." , "la semana pasada."];
    //función que escoje un componente de cada array aleatoriamente
    const randomizadorDeExcusa = array => array[Math.floor(Math.random()*array.length)]

   
    const excusaAleatoria = `${randomizadorDeExcusa(who)} ${randomizadorDeExcusa(action)} ${randomizadorDeExcusa(what)} ${randomizadorDeExcusa(where)} ${randomizadorDeExcusa(when)}..`;
    return excusaAleatoria;
   
  }
 console.log(generadorExcusas());
 const parrafo = document.getElementById("Excusa");
 parrafo.innerHTML = generadorExcusas();




  
}
