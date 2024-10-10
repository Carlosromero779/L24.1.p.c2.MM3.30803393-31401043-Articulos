export default class Cl_Articulo {
    constructor(nombre, cant, pBase) {
        this.nombre = nombre;
        this.cant = cant;
        this.pBase = pBase;
    }
    set nombre(nom) {
        this._nombre = nom;
    }
    get nombre() {
        return this._nombre;
    }
    set cant(cant) {
        this._cant = cant;
    }
    get cant() {
        return this._cant;
    }
    set pBase(pBase) {  
        this._pBase = pBase;
    }
    get pBase() {
        return this._pBase;
    }
    descuento(){
        return 0;
    }
    pagar(){
        return this.cant*this.pBase - this.descuento();
    }
    }
