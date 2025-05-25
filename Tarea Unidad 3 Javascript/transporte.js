function medioDeTransporte(distancia) {
  if (distancia <= 1000) {
    return "Son " + distancia + " metros, anda a pie, larva";
  } else if (distancia > 1000 && distancia <= 10000) {
    return "Son " + distancia + " metros, andá en bicicleta";
  } else if (distancia > 10000 && distancia <= 30000) {
    return (
      "Son " + distancia + " metros, mejor tomate un colectivo, que es lejos"
    );
  } else if (distancia > 30000 && distancia <= 100000) {
    return "Son " + distancia + " metros, mejor andá sacando el auto";
  } else {
    return "Son " + distancia + " metros, mejor prepará el avión";
  }
}

console.log(medioDeTransporte(500));
console.log(medioDeTransporte(1500));
console.log(medioDeTransporte(11500));
console.log(medioDeTransporte(34500));
console.log(medioDeTransporte(199999));

let numeros = [1, 2, 9, 6, 99, 4, 5, 6];

function mayorQue(numeros) {
  let maximo = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
      maximo = numeros[i];
    }
  }
  return "El número mas alto es " + maximo;
}

console.log(mayorQue(numeros))

