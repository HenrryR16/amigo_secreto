
# Challenge Amigo Secreto

¡Hola! Muestro el resultado de mi proyecto amigo Secreto y la explicación de lo que hice.  
Espero que pueda ser de su agrado y muchas gracias



## Preview

![Preview](https://prnt.sc/usvLQoydfSjA)


## Code explanation

El Objetivo de este Challenge es hacer un mini juego que permita que al ingresar nombres de tus amigos se sorteen y te de un nombre sorteado.  
Un Amigo Secreto  

Primero ubicar los elementos del DOM que se utiliza:

Se va a hacer del input:

```html
<input type="text" id="amigo" class="input-name" placeholder="Escribe un nombre">

```
El botón Añadir

```HTML
<button class="button-add" onclick="agregarAmigo()">Añadir</button>
```

El botón sortear amigo 

```HTML
<button class="button-draw" onclick="sortearAmigo()" aria-label="Sortear amigo secreto">
```
El Botón limpiar y reiniciar

```HTML
<button class="clear" onclick="reiniciar()" aria-label="Limpiar y reiniciar"> Limpiar y Reiniciar </button>
```

Para que se añadan los amigos ingresados se requiere de una lista y esta lista pueda ser reflejada al Añadir los nombres y cuando se de el resultado del nombre sorteado

```javascript
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];

//HACE REFERENCIAS A LAS LISTAS 
const ulListaAmigos = document.getElementById("listaAmigos"); 
const ulResultado = document.getElementById("resultado");
```

Se utiliza `document.getElementById` para obtener un elemento del DOM que tenga un ID específico. Una vez obtenido el elemento, se puede modificar su contenido utilizando la propiedad `innerHTML`, la cual permite indicar el nuevo contenido HTML que tendrá ese elemento.

Dentro del codigo que permite agregar los nombres se encuentra esta parte de una función que es la que permite agregarlos a una lista 

```javascript
// SI ESTÁ BIEN EL NOMBRE INGRESADO, LO AGREGA A LA LISTA
     listaAmigos.push(inputAmigo.value);
     ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`

     inputAmigo.value = "";
```
con `.push`permite agregar un elemento a la lista y lo agrega al valor del input `inputAmigo.value`

Ya lo establecemos como una lista para pueda visualizarse al momento de añadirla
```javascript
ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`
```    
Hay otras validaciones para que al ingresar tenga otras limitantes, por ejemplo:

```javascript
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
```

Asi como se aprende a sortear el número aleatorio con Math Random lo aprendido en Alura Latam  
Asi se puede tomar de referencia pero ahora no con números si no haciendo referencia a la lista y la cantidad de nombres tomados.

```javascript
function sortearAmigo(){
    const sorteo = Math.floor(Math.random()* listaAmigos.length)
    const amigoSecreto = listaAmigos[sorteo];
    ulResultado.innerHTML = `<li> El amigo secreto es ${amigoSecreto}</li>`;
}
```

Esta función de reiniciar y limpiar hacemos que todos los datos los limpie:

```javascript
// HACE REFERENCIA AL BOTON REINICIAR Y LIMPIAR
function reiniciar(){
    listaAmigos.length = 0; //Permite vaciar el Array
    inputAmigo.value = ""; //Permite limpiar el input
    ulListaAmigos.innerHTML = ""; //Limpia la lista de amigos que se ingresaron 
    ulResultado.innerHTML = ""; // Limpia el resultado de la función sortearAmigo
}
``` 

El codigo es intuitivo y se entiende, le modifique algunas cosas a la plantilla original como por ejemplo el `color` las `imagenes`

Iré actualizando el código como practica para ir checando que me falta.  
Si eres estudiante y estas practicando, espero te sirva mucho este codigo  
¡Muchas Gracias!
