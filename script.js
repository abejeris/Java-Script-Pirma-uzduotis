"use strict"

var prekesKaina = prompt("Įveskite prekės kainą")
prekesKaina = Number(prekesKaina)

while(isNaN(prekesKaina) == true) {
var prekesKaina = prompt ("Įveskite tik skaičius")
}

var prekesKaina = Number(prekesKaina).toFixed(2)
console.log("Prekės kaina su PVM: " + prekesKaina + " €")

var pvm = (prekesKaina / 121 * 21).toFixed(2)
console.log ("PVM: " + pvm + " €")

var bepvm = (prekesKaina / 1.21).toFixed(2)
console.log ("Prekės kaina be PVM: " + bepvm + " €")

