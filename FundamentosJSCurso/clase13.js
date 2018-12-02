var fran = {
  nombre: 'Fran',
  apellido: 'Isla Massa',
  edad: 24,
  peso: 64
}

console.log(`Al inicio del año ${fran.nombre} pesa ${fran.peso}kg`)

const INCREMENTO_PESO = 0.3
const DIAS_DEL_ANO = 365

const  aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4

const META = fran.peso - 3
var dias = 0

while (fran.peso > META) {
  
  if(comeMucho()) {
    aumentarDePeso(fran)
  }
  if(realizaDeporte()) {
    adelgazar(fran)
  }
  dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${fran.nombre} adelgazó 3 kg`)
