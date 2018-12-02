var signo = prompt('¿Cual es tu signo?')

switch (signo) {
  case 'acuario':
    console.log('lalalaacuario')
    break
  case 'capricornio':
  case 'capri':
    console.log('capri meeh')
    break
  default:
    console.log('No es un signo zodiacal válido')
    break 
}
