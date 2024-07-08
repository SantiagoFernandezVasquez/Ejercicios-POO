class Persona {
    nombre;
    edad;
    sexo;
    constructor(nombre, edad, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
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
    set setSexo(sexo){
        this.sexo = sexo;
    }
    get getSexo(){
        return this.sexo;
    }
    saludar(){
        return `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años por lo tanto ${Persona.esMayorDeEdad(this.getEdad)} y soy de sexo ${this.sexo}`;
    }

    static esMayorDeEdad(edad) {
        if(edad <= 18) {
            return "no soy mayor de edad";
        }
        else {
            return "soy mayor de edad";
        }
    }
}

let persona1 = new Persona("Juan", 25, "Masculino");

document.querySelector("#resultado").innerHTML = /*html*/`
    <h1>Saludo: <span>${persona1.saludar()}</span></h1>
    <h1>Nombre: <span>${persona1.getNombre}</span></h1>
    <h1>Edad: <span>${persona1.getEdad}</span></h1>
    <h1>Sexo: <span>${persona1.getSexo}</span></h1>
    <h1>Es mayor de edad: <span>${Persona.esMayorDeEdad(persona1.getEdad)}</span></h1>
`

class Estudiante extends Persona {
    carrera;
    constructor(nombre, edad, sexo, carrera) {
        super(nombre, edad, sexo);
        this.carrera = carrera;
    }
    set setCarrera(carrera){
        this.carrera = carrera;
    }
    get getCarrera(){
        return this.carrera;
    }
    estudiar(){
        return `${this.saludar()}, estoy estudiando ${this.carrera}`;
    }
}

let estudiante1 = new Estudiante("Juan", 25, "Masculino", "Ingeniería en Sistemas");

document.querySelector("#estudiante").innerHTML = /*html*/`
    <h1>Estudio: <span>${estudiante1.estudiar()}</span></h1>
    <h1>Carrera: <span>${estudiante1.getCarrera}</span></h1>
`
