var fran = {
  nombre: 'Fran',
  apellido: 'Isla Massa',
  edad: 24,
  ingeniero: false,
  cocinero: false,
  cantante: false,
  dj: false,
  qa: true,
  guitarrista: false
}

var ivan = {
  nombre: 'Ivan',
  apellido: 'Isla Massa',
  edad: 13
}

const MAYORIA_DE_EDAD = 18

function imprimirProfesiones (persona) {
  console.log(`${persona.nombre} es:`)
  if (persona.ingeniero) {
    console.log('Ingeniero')
  }

  if (persona.qa) {
    console.log('Qa')
  }

  if (persona.guitarrista) {
    console.log('Guitarrista')
  }
}

imprimirProfesiones(fran)

function esMayorDeEdad(persona){
  return persona.edad >= MAYORIA_DE_EDAD
}

function imprimirSiEsMayorDeEdad(persona){
  if (esMayorDeEdad(persona)) {
    console.log(`${persona.nombre} es mayor de edad`)
  } else {
    console.log(`${persona.nombre} es menor de edad`)
  }
}
