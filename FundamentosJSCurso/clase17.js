var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72,
    cantidadDeLibros: 111
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}

const esAlta = ({altura}) => altura > 1.8
const esBaja = ({altura}) => !esAlta({altura}) //RETO
const pasarAlturaACms = persona => ({
    ...persona,
    altura: persona.altura * 100
  })

const reducer = (acum, { cantidadDeLibros } ) => acum + cantidadDeLibros



//declarar un array
var personas = [sacha, martin, dario, vicky, paula]

//metodo para filtrar arreglos (recibe un array como parametro)
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)
var personasCms = personas.map(pasarAlturaACms)
var totalDeLibros = personas.reduce(reducer, 0)

console.log(totalDeLibros)
//console.log(personasBajas)
