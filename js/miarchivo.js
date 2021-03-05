let nombre = prompt("¡Buenas! Cuál es tu nombre?");

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