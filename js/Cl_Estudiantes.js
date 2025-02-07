export default class cl_Estudiantes {
    constructor() {
        this.acumNotas = 0
        this.conAprobados = 0
        this.conReprobados = 0
    }
    procesar(Estadi) {
        this.acumNotas += Estadi.notaFinal

        if(Estadi.notaFinal >= "48") {
            this.conAprobados++ 
        } else {
            this.conReprobados++
        }

    }
    CantidadEstudiantes() {
        return this.conAprobados + this.conReprobados
    }
    CantidadAprobados() {
        return this.conAprobados
    }
    CantidadReprobados() {
        return this.conReprobados
    }
    promedio() {
        return this.acumNotas / this.CantidadEstudiantes()
    }
}