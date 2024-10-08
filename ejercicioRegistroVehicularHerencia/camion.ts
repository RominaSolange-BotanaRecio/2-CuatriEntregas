// clase especifica camion usando herencia, representa tipos especificos de vehiculos
import { Vehiculo } from "./vehiculo";
//cada clase camion hereda de vehiculo usando extends
//llama al constructor de la clase vehiculo usando super
export class Camion extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio);
    }
//escribe el metodo de la clase para imprimir detalles especificos de tipo vehiculo
    public mostrarDetalles(): void {
        console.log(`Camión: ${this.getMarca()} ${this.getModelo()} (${this.getAnio()})`);
    }
}