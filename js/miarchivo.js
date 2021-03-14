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


// Ciclos / Iteraciones //

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