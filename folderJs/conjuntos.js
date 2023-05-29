///  Un nuevo Set con los nombres de tu familia
const miSet = new Set(["Ariela", "Felipe", "Liliana", "Ronaldo", "Totoro", "Kevin"])
console.log(miSet);

///  Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("Roxana")
console.log(miSet);

///  Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
const miSet2 = miSet.add("JavaScript")
console.log(miSet2)

///  Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const obj = { 
    nombre: "Roxana", apellido: "Rhenals", edad: 23, isDeveloper: true 
    }

///  Una variable que obtenga tu edad a partir del objeto anterior
const edad = obj.nombre

///  Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const newArray = [
    { nombre: "Roxana", apellido: "Rhenals", edad: 23, isDeveloper: true },
    { nombre: "Leonardo", apellido: "Bedoya", edad: 28, isDeveloper: true},
    { nombre: "Kevin", apellido: "Camacho", edad: 25, isDeveloper: true}
  ]
  console.log(newArray)

///  Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const newArrayEdad = newArray.sort((a,b) => a.edad - b.edad)
console.log(newArrayEdad)