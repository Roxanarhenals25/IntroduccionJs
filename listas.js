//  Una variable que contenga la lista de la compra (mínimo 5 elementos)
const compra = ["tomate", "cebolla", "arroz", "papas", "azucar"];

//  Modifica la lista de la compra y añádele "Aceite de Girasol"
const nuevaCompra = compra.splice("tomate", 0, "Aceite de Girasol")
console.log(nuevaCompra); 

//  Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
const eliminarCompra = nuevaCompra.splice("tomate", "Aceite de Girasol")
console.log(eliminarCompra); 

//  Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculasFavoritas = [ 
    {titulo: "Mi vecino Totoro", director: "Hayao Miyazaki", fecha: "16 de abril de 1988"},
    {titulo: "El castillo Vagabundo", director: "Hayao Miyazaki", fecha: "20 de noviembre de 2011"},
    {titulo: "Ponyo", director: "Hayao Miyazaki", fecha: "30 de octubre de 2013"}
];

//  Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)
const peliculasRecientes = peliculasFavoritas.filter( obj => {
    if (obj.fecha > 2010) {
        return true
    } else { 
        return false
    }
})
console.log(peliculasRecientes)

//  Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const listaDirectores = peliculasFavoritas.map((pelicula) => pelicula.director);

//  Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const listaTitulos = peliculasFavoritas.map((pelicula) => pelicula.titulo);

//  Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat) 
const listaDirectoresTitulos = (listaTitulos.concat(listaDirectores));
console.log(listaDirectoresTitulos);

//  Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const listaDirectoresTitulos2 = [...listaTitulos,...listaDirectores];
console.log(listaDirectoresTitulos2)


