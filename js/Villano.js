export class Villano extends Persona{
    constructor (id, nombre, apellido, edad, enemigo, robos, asesinatos){
        super(id, nombre, apellido, edad);
        this.enemigo = enemigo || "";
        if(robos > 0){
            this.robos = robos;
        }
        if(asesinatos > 0){
            this.asesinatos = asesinatos;
        }
    }
}