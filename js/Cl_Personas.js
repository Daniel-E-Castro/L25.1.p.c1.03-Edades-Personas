export default class Cl_Personas {
    constructor() {
        this.acumEdad = 0
        this.conPersonas = 0
    }
    procesar(Eda) {
        this.acumEdad += Eda.edad 
        this.conPersonas++

    }
    promedio() {
        return this.acumEdad / this.conPersonas
    }
}