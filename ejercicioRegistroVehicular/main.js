"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
// Creamos una instancia del registro automotor
var registro = new registroAutomotor_1.RegistroAutomotor();
// Agrega autos
var auto1 = new auto_1.Auto("MRS423", "Toyota", "Corolla");
var auto2 = new auto_1.Auto("XYZ456", "Ford", "Focus");
registro.agregarAuto(auto1);
registro.agregarAuto(auto2);
// Agrega motos
var moto1 = new moto_1.Moto("NPR345", "Honda", "CBR");
var moto2 = new moto_1.Moto("WRT654", "Yamaha", "XZ");
registro.agregarMoto(moto1);
registro.agregarMoto(moto2);
// Agrega camiones
var camion1 = new camion_1.Camion("AA234PO", "Mercedes", "Actros");
var camion2 = new camion_1.Camion("AB134AZ", "Volvo", "Cavallino");
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
