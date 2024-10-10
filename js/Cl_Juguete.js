import Cl_Articulo from "./Cl_Articulo.js";

export default class Cl_Juguete extends Cl_Articulo {
    constructor(nombre, cant, pBase, edad, desc) {
        super(nombre, cant, pBase);
        this.edad = edad;
        this.desc = desc;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set desc(desc) {
        this._desc = desc;
    }
    get desc() {
        return this._desc;
    }
    descuento() {
        if (this.edad == 1) 
            return (this.pBase*this.cant) * 0.1;
         else 
            return 0;
        
    }
    pagar() {
        return this.cant * this.pBase - this.descuento();
    }
}