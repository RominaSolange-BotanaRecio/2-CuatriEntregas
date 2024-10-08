// implementacion de las clases en main
// crea instancias de auto, moto, camion
// crea instancia registroAutomotor y agrega vehiculos
import { RegistroAutomotor } from "./registroAutomotor";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

const registro = new RegistroAutomotor();

const auto = new Auto("Toyota", "Corolla", 2020);
const moto = new Moto("Yamaha", "MT-07", 2019);
const camion = new Camion("Mercedes", "Actros", 2018);

registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);
// llama al metodo e imprime detalles de los vehiculos registrados
registro.mostrarTodos();