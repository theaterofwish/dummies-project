var fran = {
  nombre: 'Fran',
  apellido: 'Isla Massa',
  edad: 28
}
var dario = {
  nombre: 'Dario',
  apellido: 'Tu vieja',
  edad: 25
}

function imprimirNombreEnMayusculas(persona) {
  //var nombre = persona.nombre
  var { nombre } = persona
  console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad({nombre, edad}) {
  console.log(`Hola, me llamo ${ nombre } y tengo ${ edad } años`)
}

imprimirNombreEnMayusculas(fran)
imprimirNombreEnMayusculas(dario)


function cumpleanos(persona){
  return{
    ...persona,
    edad: persona.edad + 1
  }
}
