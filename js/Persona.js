export class Persona {
    constructor(id, nombre, apellido, edad){
        this.id = id;
        this.nombre = nombre || "";
        this.apellido = apellido; || "";
        this.setEdad(edad);
    }

}