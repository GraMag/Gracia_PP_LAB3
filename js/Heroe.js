import { Persona } from "./Persona";

export class Heroe extends Persona{
    constructor(id, nombre, apellido, edad, alterEgo, ciudad, publicado){
        super(id, nombre, apellido, edad);
        this.alterEgo = alterEgo || "";
        this.ciudad = ciudad || ""
        if(publicado > 1940){
            this.publicado = publicado
        } 
    }


}