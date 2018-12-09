class Persona {
  constructor(nombre, apellido, altura) {
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
  }
  saludar(fn){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    if (fn) {
      fn(this.nombre, this.apellido)
    }
  }
  soyAlto(){
    return this.altura > 1.8
  }
}

class Desarrollador extends Persona {
  constructor(nombre, apellido,altura) {
    super(nombre,apellido,altura)
    }

    saludar(fn){
      console.log(`Hola me llamo ${this.nombre} ${this.apellido} y soy desarrolladore`)
      if (fn) {
        fn(this.nombre, this.apellido, true)
      }
    }
}

function responderSaludo(nombre, apellido, esDev) {
  console.log(`Buen dia ${nombre} ${apellido}`)
  if (esDev) {
    console.log(`Ah mirá, no sabía que eras desarrolladore`)
  }
}

 var fran = new Persona('Fran', 'Isla', 1.74)
 var frandev = new Desarrollador('Fran', 'Isla', 1.74)
 var erika = new Persona('Erika', 'Luna', 1.87)

 fran.saludar(responderSaludo)
 erika.saludar()
 frandev.saludar(responderSaludo)
