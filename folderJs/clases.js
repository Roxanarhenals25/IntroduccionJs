const asignatures =[ "Javascript", "HTML", "CSS"]
class Estudiante {
  constructor(nombre, asignaturas){
    this.nombre = nombre;
    this.asignaturas = asignaturas;
  }
  get ObtenDatos() {
    return {
      nombre: this.nombre,
      asignaturas: this.asignaturas,
    } 
  }
}
const estudiante = new Estudiante("Roxi", asignatures);
const datos = estudiante.ObtenDatos;
console.log(datos);