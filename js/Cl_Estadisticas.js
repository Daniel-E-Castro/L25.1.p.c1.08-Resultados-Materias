export default class cl_Estadisticas {
    constructor(cedula, notaFinal) {
        this.cedula = cedula;
        this.notaFinal = notaFinal;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set notaFinal(notaFinal) {
        this._notaFinal = notaFinal;
    }
    get notaFinal() {
        return this._notaFinal;
    }
}