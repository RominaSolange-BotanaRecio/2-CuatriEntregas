// registroAutomotor.ts
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

export class RegistroAutomotor {
    private autos: Auto[] = [];
    private motos: Moto[] = [];
    private camiones: Camion[] = [];

    // método para agregar un auto al registro
    public agregarAuto(auto: Auto): void {
        this.autos.push(auto);
    }

    // método para agregar una moto al registro
    public agregarMoto(moto: Moto): void {
        this.motos.push(moto);
    }

    // método para agregar un camión al registro
    public agregarCamion(camion: Camion): void {
        this.camiones.push(camion);
    }

    // método para modificar un auto por patente
    public modificarAuto(patente: string, marca: string, modelo: string): void {
        let autoEncontrado = false; // Uso de variable para verificar si se encuentra el auto
        this.autos.forEach(function(auto) {
            if (auto.getPatente() == patente) { // Verificamos si la patente coincide
                auto.setMarca(marca); // Modificamos la marca
                auto.setModelo(modelo); // Modificamos el modelo
                autoEncontrado = true; // Encontramos el auto
            }
        });
        if (autoEncontrado) { // Si el auto fue encontrado
            console.log("Auto modificado con éxito");
        } else { // Si no se encontró el auto
            console.log("Auto no encontrado");
        }
    }

    // método para modificar una moto por patente
    public modificarMoto(patente: string, marca: string, modelo: string): void {
        let motoEncontrada = false; // Variable para verificar si se encuentra la moto
        this.motos.forEach(function(moto) {
            if (moto.getPatente() == patente) { // Verificamos si la patente coincide
                moto.setMarca(marca); // Modificamos la marca
                moto.setModelo(modelo); // Modificamos el modelo
                motoEncontrada = true; // encontramos la moto
            }
        });
        if (motoEncontrada) { // Si la moto fue encontrada
            console.log("Moto modificada con éxito");
        } else { // Si no se encontró la moto
            console.log("Moto no encontrada");
        }
    }

    // método para modificar un camión por patente
    public modificarCamion(patente: string, marca: string, modelo: string): void {
        let camionEncontrado = false; // Variable para verificar si se encuentra el camión
        this.camiones.forEach(function(camion) {
            if (camion.getPatente() == patente) { // Verificamos si la patente coincide
                camion.setMarca(marca); // Modificamos la marca
                camion.setModelo(modelo); // Modificamos el modelo
                camionEncontrado = true; // encontramos el camión
            }
        });
        if (camionEncontrado) { // Si el camión fue encontrado
            console.log("Camión modificado con éxito");
        } else { // Si no se encontró el camión
            console.log("Camión no encontrado");
        }
    }

    // método para dar de baja un auto por patente
    public darDeBajaAuto(patente: string): void {
        const autosFiltrados: Auto[] = []; // Usamos Array para guardar los autos restantes
        let autoEncontrado = false; // Variable para verificar si encontramos el auto
        this.autos.forEach(function(auto) {
            if (auto.getPatente() != patente) { // Verificamos si la patente no coincide
                autosFiltrados.push(auto); // Agregamos el auto al array de autos restantes
            } else {
                autoEncontrado = true; // encontramos el auto
            }
        });
        this.autos = autosFiltrados; // Actualizamos el array de autos
        if (autoEncontrado) { // Si el auto fue encontrado
            console.log("Auto dado de baja con éxito");
        } else { // Si no se encontró el auto
            console.log("Auto no encontrado para dar de baja");
        }
    }

    // método para dar de baja una moto por patente
    public darDeBajaMoto(patente: string): void {
        const motosFiltradas: Moto[] = []; // Usaamos Array para almacenar las motos restantes
        let motoEncontrada = false; // Variable para verificar si encontramos la moto
        this.motos.forEach(function(moto) {
            if (moto.getPatente() != patente) { // Verificamos si la patente no coincide
                motosFiltradas.push(moto); // Agregamos la moto al array de motos restantes
            } else {
                motoEncontrada = true; // encontramos la moto
            }
        });
        this.motos = motosFiltradas; // Actualizamos el array de motos
        if (motoEncontrada) { // Si la moto fue encontrada
            console.log("Moto dada de baja con éxito");
        } else { // Si no se encontró la moto
            console.log("Moto no encontrada para dar de baja");
        }
    }

    // método para dar de baja un camión por patente
    public darDeBajaCamion(patente: string): void {
        const camionesFiltrados: Camion[] = []; // Usamos Array para almacenar los camiones restantes
        let camionEncontrado = false; // Variable para verificar si se encontramos el camión
        this.camiones.forEach(function(camion) {
            if (camion.getPatente() != patente) { // Verificamos si la patente no coincide
                camionesFiltrados.push(camion); // Agregamos el camión al array de camiones restantes
            } else {
                camionEncontrado = true; // encontramos el camión
            }
        });
        this.camiones = camionesFiltrados; // Actualizamos el array de camiones
        if (camionEncontrado) { // Si el camión fue encontrado
            console.log("Camión dado de baja con éxito");
        } else { // Si no se encontró el camión
            console.log("Camión no encontrado para dar de baja");
        }
    }
}