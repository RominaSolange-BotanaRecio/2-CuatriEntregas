// Auto.ts
export class Auto {
    private patente: string;
    private marca: string;
    private modelo: string;

    // Constructor de la clase Auto
    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente; // Asignación de la patente
        this.marca = marca;     // Asignación de la marca
        this.modelo = modelo;   // Asignación del modelo
    }

    // Método para obtener la patente del auto
    public getPatente(): string {
        return this.patente;
    }

    // Método para establecer la marca del auto
    public setMarca(marca: string): void {
        this.marca = marca;
    }

    // Método para establecer el modelo del auto
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
}