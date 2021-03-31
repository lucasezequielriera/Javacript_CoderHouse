/*let nombre = prompt("¡Buenas! Cuál es tu nombre?");

if (nombre) {
    ciudad = prompt("Perfecto " + nombre + ", de donde sos?");
}
else {
    alert("Es necesario escribir un nombre");
}

if (ciudad) {
    edad = prompt("Muy bien " + nombre + ", ahora dime, Cuál es tu edad?");
}
else {
    alert("Debes indicar una ciudad");
}

if (edad) {
    altura = prompt("Perfecto " + nombre + "! Ahora indicanos tu altura");
}
else {
    alert("No es una altura válida");
}

if (edad >= 18 && altura >= 180) {
    alert("AUTHORIZED ACCESS");
} 
else {
    alert("ACCESS DENIED");
}

if (nombre) {
    alert("Genial, ahora... ") 
}
else {
    alert("No escribiste un nombre, ahora te llamaremos por tu apellido");
}

let apellido = prompt("Cuál es tu apellido?");

if (apellido) {
    alert("Hola " + nombre + " " + apellido);
}

let pais = prompt("De qué pais sos?");

if (pais == "Argentina") {
    alert("Igual que yo!");
}
else {
    alert("Ah bueno, sos extranjero, genial!");
}

let ciudad = prompt("En qué ciudad vivís?");

if (ciudad == "Buenos Aires") {
    alert("Genial, entonces puedo invitarte a una fiesta VIP");
}

alert("Ahora verificaremos tus datos")

if ((nombre) && (apellido)) {
    alert("Escribiste tu nombre y apellido, perfecto!");
}
else if (nombre == false) {
    alert("Lo siento pero no escribiste tu nombre");
}

else if (apellido == false) {
    alert("Lo siento pero no escribiste tu apellido");
}

let edad = prompt("Cuántos años tenés?");

if (edad < 18) {
    alert("Uh, lo sentimos pero eres menor de edad y no puedes entrar a nuestra fiesta");
}
else if (edad >= 18 <= 40) {
    alert("Tu edad es perfecta para nuestra fiesta!");
}
else {
    alert("Eres muy viejo para nuestra fiesta, lo siento...");
}

if (edad < 18 && pais == "Argentina") {
    alert("Aunque seas menor de edad, tenemos otras propuestas para vos...");
}
else if (edad > 40) {
    alert("Creo que debes ir a un asilo por lo viejo que sos");
}

else if ((nombre && apellido) && (pais == "Argentina" && ciudad == "Buenos Aires") && (edad >= 18 <= 40)) {
    alert("Perfect! Ya validamos todos tus datos y estás seleccionado para entrar a nuestra zona VIP");
}
*/


/* // Ciclos / Iteraciones //

alert("Bienvenido! Para ganar tienes que elegir un número del 1 al 10 y que éste coincida con el número aleatorio que generará la PC, estás listo/a?");
let conteo = 0;

for(let i = 1; i <= 5; i++) {
    let numero_aleatorio = (Math.floor(Math.random() * 10 + 1));
    let numero_elegido = Number(prompt("Elegí un número:"));

    if (numero_elegido === numero_aleatorio) {
        alert(`GANASTE AL INTENTO Nº${i} !!!`);
        break;
    }
    else if (numero_elegido < numero_aleatorio && numero_elegido != 0) {
        alert(`FALLASTE`);
        console.log(i)
    }
    else if (numero_elegido === 0){
        alert("Esto no es un número, has perdido un turno");
    }
    else if (numero_elegido > numero_aleatorio && numero_elegido != 0) {
        alert(`FALLASTE`);
    }
    if (i == 4) {
        alert("Te queda un último intento!");
        }
    else if (i == 5) {
        alert("Superaste el número de intentos posibles :(");
    }
}
conteo = conteo + 1;
console.log(`El número de intentos fué de: ${conteo}`);


// Faltaría agregar la función de repetir que aún no la vimos, y por lo que busqué, se utiliza como impresión de una parte del "for"

// Funciones Relacionadas //

// Función que saca la retención del sueldo bruto //
alert("FUNCION 1: Sacar Sueldo Neto a partir del Bruto");

let sueldo_bruto = 0;
let retencion = 0.3;
let sueldo_neto = 0;
let intentos; 

function calc_sueldo_neto() {

    for(let i=1; i<4; i++) {

    sueldo_bruto = Number(prompt("Cuanto cobrás en bruto?"));
    if (sueldo_bruto == "") {
        alert("Debes escribir algo (Intentos: 3)");
    }
    else {
        break;
    }
    if (i==3) {
        intentos = "Has superado el número de intentos permitidos";
        return intentos;
    }

    }
    iva = 0.21;
    sueldo_neto = sueldo_bruto - (sueldo_bruto * retencion);
    sueldo_neto = `Tu sueldo neto es de: ${sueldo_neto}`;
    return sueldo_neto;
}

alert(calc_sueldo_neto());

// Calculadora Cíclica //
alert("FUNCION 2: Calculadora de Operaciones: + , - , * , /");

let numero1 = 0;
let numero2 = 0;
let resultado;
let operacion;
let mensaje_de_error;

function op_matematica() {
    numero1 = Number(prompt("Indica el primer número"));
    operacion = prompt("Indica que operacion quieres hacer (+ , - , * , /");
    numero2 = Number(prompt("Indica el segundo número"));
        if (operacion == "+") {
            resultado = `El resultado de la suma es: ${numero1 + numero2}`;
        }
        else if (operacion == "-") {
            resultado = `El resultado de la resta es: ${numero1 - numero2}`;
        }
        else if (operacion == "*") {
            resultado = `El resultado de la multiplicación es: ${numero1 * numero2}`;
        }
        else if (operacion == "/") {
            resultado = `El resultado de la división es: ${numero1 / numero2}`;
        }
        else {
            mensaje_de_error = "El comando no es válido, vuelve a intentarlo nuevamente...";
            return mensaje_de_error;
        }
        if (numero1 == "" || numero2 == "" || (operacion == null)) {
            falta_numero = "No has indicado algun valor, vuelve a intentarlo";
            return falta_numero;
        }
    return resultado;
}

alert(op_matematica());

// Saber si un número es múltiplo //
alert("FUNCION 3: Saber si los números son múltiplos");

let multiplo_1 = 0;
let multiplo_2 = 0;
let resultado_multiplos;

function multiplo() {
    let multiplo_1 = Number(prompt("Elige el primer número a comparar"));
    let multiplo_2 = Number(prompt("Elige el segundo número a comparar"));
    let resultado_multiplos = multiplo_1 % multiplo_2;
    if (resultado_multiplos == 0) {
        resultado_multiplos = "Los números ingresados son múltiplos!";
    }
    else if (isNaN(multiplo_1) || isNaN(multiplo_2)) {
        resultado_multiplos = "Algun dato ingresaste mal";
    }
    else {
        resultado_multiplos = "Los números ingresados no son múltiplos";
    }
    return resultado_multiplos;
}

alert(multiplo());

// Arrays // (Ordenar)

const peliculas = ["Hola", "Lucas", "Che"];
const numeros = [3, 4, 7, 3, 5, 8, 9, 0, 1, 4, 3, 5, 7, 4, 6, 3];

function ordenandoArrays() {
    console.log(`Estos son las películas desordenandas: ${peliculas}`);
    peliculasOrdenadas = peliculas.sort();
    console.log(`Estas son las peliculas ordenandas alfabéticamente: ${peliculasOrdenadas}`);
    console.log(`Estos son los números desordenados: ${numeros}`);
    numerosOrdenados = numeros.sort();
    console.log(`Estos son los números ordenados de menor a mayor: ${numerosOrdenados}`);
    numerosOrdenadosDec = numeros.reverse();
    console.log(`Estos son los números ordenados de mayor a menor: ${numerosOrdenadosDec}`);
}

ordenandoArrays();
*/

// Utilizando DOM //

document.getElementById("nombreDeActividad").innerHTML = "Utilizando DOM con getElementByID";
subtitulo = document.querySelector(".subtitulo");
subtitulo.innerHTML = "Utilizando querySelector"
subtitulo.innerHTML += " con JS"
otroTitulo = document.getElementsByClassName("otrotitulo")[0].innerHTML = "Tambien utilizando getElementsByClassName"

// Utilizar textContent (solo trae el contenido de los nodos, tipo texto) --> más conveniente que innerHTML (trae todo lo que haya asi tal cual de HTML) //

// Creando un div entero con DOM //
const divElement = document.createElement("div");
divElement.classList.add("text-center", "mt-2");

const h1 = document.createElement("h1");
h1.textContent = "Esto es un texto creado con 'createElement' dentro de un div creado en JS ";

const p = document.createElement("p");
p.textContent = "Esto es un texto creado con DOM en <p>";

// Unir todo el div //

divElement.appendChild(h1); // appendChild coloca al final del "div"
divElement.appendChild(p);

// Colocar en HTML a su elemento padre (body) //

const contenedor = document.querySelector("body");
contenedor.appendChild(divElement);

// Eliminar elementos del DOM //
   // p.remove();
   // contenedor.removeChild();