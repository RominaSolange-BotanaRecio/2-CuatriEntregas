// main.ts
import { RegistroAutomotor } from "./registroAutomotor";
import { Auto } from "./auto";
import { Moto } from "./moto";
import { Camion } from "./camion";

// Creamos una instancia del registro automotor
const registro = new RegistroAutomotor();

// Agrega autos
const auto1 = new Auto("MRS423", "Toyota", "Corolla");
const auto2 = new Auto("XYZ456", "Ford", "Focus");
registro.agregarAuto(auto1);
registro.agregarAuto(auto2);

// Agrega motos
const moto1 = new Moto("NPR345", "Honda", "CBR");
const moto2 = new Moto("WRT654", "Yamaha", "XZ");
registro.agregarMoto(moto1);
registro.agregarMoto(moto2);

// Agrega camiones
const camion1 = new Camion("AA234PO", "Mercedes", "Actros");
const camion2 = new Camion("AB134AZ", "Volvo", "Cavallino");
registro.agregarCamion(camion1);
registro.agregarCamion(camion2);

// Modifica un auto
registro.modificarAuto("AB134XS", "Toyota", "Corolla X");
// Intenta modificar un auto no encontrado, modifica datos
registro.modificarAuto("NoEncontrado", "Toyota", "Ford");

// Da de baja un auto
registro.darDeBajaAuto("AB134XS");
// Intenta dar de baja un auto no encontrado, modifica datos
registro.darDeBajaAuto("NoEncontrado");

// Modifica una moto
registro.modificarMoto("NPR345", "Honda", "CBR 1000");
// Intenta modificar una moto no encontrada, modifica datos
registro.modificarMoto("NoEncontrado", "Kawasaki", "Ninja");

// Da de baja una moto
registro.darDeBajaMoto("WRT654");
// Intenta dar de baja una moto no encontrada, modifica datos
registro.darDeBajaMoto("NoEncontrada");

// Modifica un camión
registro.modificarCamion("AA234PO", "Mercedes", "Actros 2640");
// Intenta modificar un camión no encontrada, modifica datos
registro.modificarCamion("NoEncontrado", "Scania", "R 450");

// Da de baja un camión
registro.darDeBajaCamion("AB134AZ");
// Intenta dar de baja un camión no encontrado, modifica datos
registro.darDeBajaCamion("NONEXISTENT");