class Animal {
    nombre;
    edad;
    sonido;
    constructor(nombre, edad, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }
    set setNombre(nombre){
        this.nombre = nombre;
    }
    get getNombre(){
        return this.nombre;
    }
    set setEdad(edad){
        this.edad = edad;
    }
    get getEdad(){
        return this.edad;
    }
    set setSonido(sonido){
        this.sonido = sonido;
    }
    get getSonido(){
        return this.sonido;
    }
    hacerSonido(){
        return `El sonido del animal es ${this.sonido}`;
    }
}

let animal1 = new Animal("Perro", 5, "Guau");

document.querySelector("#resultado").innerHTML = /*html*/`
    <h1>Info Animal: <span>${animal1.hacerSonido()}</span></h1>`

class Perro extends Animal {
    raza;
    constructor(nombre, edad, sonido, raza) {
        super(nombre, edad, sonido);
        this.raza = raza;
    }
    set setraza(raza){
        this.raza = raza;
    }
    get getraza(){
        return this.raza;
    }
    moverCola(){
        return `${this.hacerSonido()} y está moviendo la cola`;
    }
}

let perro1 = new Perro("Perro", 5, "Guau", "Raza");

document.querySelector("#estudiante").innerHTML = /*html*/`
    <h1>Info Animal: <span>${perro1.moverCola()}</span></h1>
`
