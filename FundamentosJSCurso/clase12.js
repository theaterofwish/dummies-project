var fran = {
  nombre: 'Fran',
  apellido: 'Isla Massa',
  edad: 24,
  peso: 64
}

console.log(`Al inicio del año ${fran.nombre} pesa ${fran.peso}kg`)

const INCREMENTO_PESO = 0.2
const DIAS_DEL_ANO = 365

const  aumentarDePeso = persona => persona.peso += INCREMENTO_PESO

const adelgazar = persona => persona.peso -= INCREMENTO_PESO

for (var i = 1; i <= DIAS_DEL_ANO; i++ ) {
  var random = Math.random()

  if(random < 0.25){
    aumentarDePeso(fran)
  } else if (random < 0.5){
    adelgazar(fran)
  }
}

console.log(`Al final el año ${fran.nombre} pesa ${fran.peso.toFixed(1)}kg`)
