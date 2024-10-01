// Camion.ts
export class Camion {
    private patente: string;
    private marca: string;
    private modelo: string;

    // Constructor de la clase Camion
    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente; // Asignación de la patente
        this.marca = marca;     // Asignación de la marca
        this.modelo = modelo;   // Asignación del modelo
    }

    // Método para obtener la patente del camión
    public getPatente(): string {
        return this.patente;
    }

    // Método para establecer la marca del camión
    public setMarca(marca: string): void {
        this.marca = marca;
    }

    // Método para establecer el modelo del camión
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
}