/// Una función sin parámetros que devuelva siempre "true"

function retornaTrue() {
    return true;
  }
  let resultado = retornaTrue();
  console.log(resultado)

  // Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

async function imprimirMensaje() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
  }
  imprimirMensaje();

  // Una función generadora de índices pares automáticos

function* generadorIndiceAutomatico(){
    let i = 0;
    while (true) {
      yield i;
      i +=2;
    }
  }
  const generador = generadorIndiceAutomatico();
  console.log(generador.next().value)
  console.log(generador.next().value)
  console.log(generador.next().value)
  console.log(generador.next().value)
