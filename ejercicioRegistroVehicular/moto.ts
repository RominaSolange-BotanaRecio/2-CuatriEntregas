// Moto.ts
export class Moto {
    private patente: string;
    private marca: string;
    private modelo: string;

    // Constructor de la clase Moto
    constructor(patente: string, marca: string, modelo: string) {
        this.patente = patente; // Asignación de la patente
        this.marca = marca;     // Asignación de la marca
        this.modelo = modelo;   // Asignación del modelo
    }

    // Método para obtener la patente de la moto
    public getPatente(): string {
        return this.patente;
    }

    // Método para establecer la marca de la moto
    public setMarca(marca: string): void {
        this.marca = marca;
    }

    // Método para establecer el modelo de la moto
    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }
}