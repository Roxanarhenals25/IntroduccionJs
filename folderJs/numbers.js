// Una variable que contenga tu altura en centímetros (entero)
let altura = 64;
console.log(Number(altura));

// Una variable que contenga tu altura en metros (número de coma flotante)
let alturaM = 64.2;
console.log(parseFloat(alturaM))

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
let peso = 48.5;
console.log(parseFloat(peso));

// Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeada = alturaM.ceil(64.2);
console.log(Math.ceil(64.2));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeado = peso.floor(48.5);
console.log(Math.floor(48.5));

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let maxValor = Number.MAX_VALUE;
console.log(maxValor);