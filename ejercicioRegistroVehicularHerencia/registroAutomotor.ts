// clase registroAutomotor, gestiona lista de vehiculos
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";
import { Vehiculo } from "./vehiculo";
//array que almacena instancias de vehiculos
export class RegistroAutomotor {
    private vehiculos: Vehiculo[] = [];
//agrega un vehiculo al array vehiculo
    public agregarVehiculo(vehiculo: Vehiculo): void {
        this.vehiculos.push(vehiculo);
    }
//devuelve un vehiculo del array segun su indice
    public obtenerVehiculo(index: number): Vehiculo | undefined {
        return this.vehiculos[index];
    }
//modifica un vehiculo del array segun su indice
    public modificarVehiculo(index: number, vehiculo: Vehiculo): void {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = vehiculo;
        }
    }
//elimina un vehiculo del array segun su indice
    public darDeBaja(index: number): void {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
    }
//imprime detalles de todos los vehiculos registrados en el array
    public mostrarTodos(): void {
        this.vehiculos.forEach(vehiculo => vehiculo.mostrarDetalles());
    }
}