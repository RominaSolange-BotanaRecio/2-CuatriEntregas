// clase especifica auto usando herencia, representa tipos especificos de vehiculos
import { Vehiculo } from "./vehiculo";
//cada clase auto hereda de vehiculo usando extends
//llama al constructor de la clase vehiculo usando super
export class Auto extends Vehiculo {
    constructor(marca: string, modelo: string, anio: number) {
        super(marca, modelo, anio);
    }
//escribe el metodo de la clase para imprimir detalles especificos de tipo vehiculo
    public mostrarDetalles(): void {
        console.log(`Auto: ${this.getMarca()} ${this.getModelo()} (${this.getAnio()})`);
    }
}


