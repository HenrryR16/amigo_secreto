const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];

//HACE REFERENCIAS A LAS LISTAS 
const ulListaAmigos = document.getElementById("listaAmigos"); 
const ulResultado = document.getElementById("resultado");


//FUNCIONES 
function agregarAmigo(){

    //SI NO SE INGRESA NADA, PEDIR QUE INGRESE UN NOMBRE
    if(!inputAmigo.value){
        alert("Por favor ingresa un nombre");
        return; //Esto permite detener la ejecución 
     } 
    // VALIDAR SI EL NOMBRE CONTIENE NÚMEROS
    
    if(/\d/.test(inputAmigo.value)){
        alert("Por favor ingresa un nombre válido, no debe contener números");
        return; //Esto permite detener la ejecución
    }
    // VALIDA SI CONTIENE ESPACIOS
    let sinEspacios = inputAmigo.value.trim();
    if(!sinEspacios){
        alert("Por favor ingresa un nombre valido");
        return;
    }
    // VERIFICA SI ESTE NOMBRE YA ESTÁ EN LA LISTA
    if(listaAmigos.includes(inputAmigo.value.trim())){
        alert("Este nombre ya esta en la lista");
        return;
    }
    // SI ESTÁ BIEN EL NOMBRE INGRESADO, LO AGREGA A LA LISTA
     listaAmigos.push(inputAmigo.value);
     ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`

     inputAmigo.value = "";
}

   // PERMITE SORTEAR, CORRESPONDIENTE A LA CANTIDAD DE NOMBRES AGREGADOS EN EL ARRAY
function sortearAmigo(){
    const sorteo = Math.floor(Math.random()* listaAmigos.length)
    const amigoSecreto = listaAmigos[sorteo];
    ulResultado.innerHTML = `<li> El amigo secreto es ${amigoSecreto}</li>`;
}

// HACE REFERENCIA AL BOTON REINICIAR Y LIMPIAR
function reiniciar(){
    listaAmigos.length = 0; //Permite vaciar el Array
    inputAmigo.value = ""; //Permite limpiar el input
    ulListaAmigos.innerHTML = ""; //Limpia la lista de amigos que se ingresaron 
    ulResultado.innerHTML = ""; // Limpia el resultado de la función sortearAmigo
}
