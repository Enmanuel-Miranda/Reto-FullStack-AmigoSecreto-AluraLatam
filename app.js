// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/*Logica
1 - La persona ingresa un nombre 
2 - Da en presionar el boton añadir
3 - La lista de todos los nombres se despliegue en el menu
4 - Se da click el boton de sortear
5 - Se selecciona un nombre al azar de la lista
//reglas
Los nombres no deben estar vacios
no se permiten numeros
*/


let nombreAmigo = "";
let almacenarNombres = []; //objeto que almacena la lista de los nombres
let limiteAlmacenamiento = 10;
let finJuego = false;

function agregarAmigo(){
    //Obtenemos el nombre
    nombreAmigo = document.getElementById('amigo').value;


    if(almacenarNombres.length ==limiteAlmacenamiento ){alert("No puedes agregar más de 10 amigos"); return; }
    else if(!nombreAmigo){alert('no se permiten valores nulos'); return;}
    else if (/\d/.test(nombreAmigo)) {alert("No se permiten números en el nombre");  return;}
    else {almacenarNombres.push(nombreAmigo.trim());} 
    
    mostrarAmigo();


    
}

// Funciones **********************************************************************

function mostrarAmigo(){
    let listarAmigo = document.getElementById("listaAmigos");
    listarAmigo.innerHTML = ""; // limpia la list
    for (let i=0; i<almacenarNombres.length; i++) {
        listarAmigo.innerHTML += `<li> ${almacenarNombres[i]}</li>`;
    }
            
}

function sortearAmigo(){
    if(almacenarNombres===0){alert("No tienes una lista de amigos"); return;}
    else {
        let numeroAleatorio = Math.floor(Math.random()*almacenarNombres.length);
        let amigoSorteado = almacenarNombres[numeroAleatorio];
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = ` ${amigoSorteado}`;
        finJuego = true;
    }

    if(finJuego){
        setTimeout(limpiarJuego,4000);
    }
}

function limpiarJuego(){
    alert("Reiniciando el juego");
    almacenarNombres= [];
    document.getElementById('amigo').value = '';
    document.querySelector(`#listaAmigos`).innerHTML = ``;
    document.querySelector(`#resultado`).innerHTML = ``;
    finJuego = false;
}
