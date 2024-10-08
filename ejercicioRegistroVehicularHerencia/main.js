"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// implementacion de las clases en main
// crea instancias de auto, moto, camion
// crea instancia registroAutomotor y agrega vehiculos
var registroAutomotor_1 = require("./registroAutomotor");
var auto_1 = require("./auto");
var moto_1 = require("./moto");
var camion_1 = require("./camion");
var registro = new registroAutomotor_1.RegistroAutomotor();
var auto = new auto_1.Auto("Toyota", "Corolla", 2020);
var moto = new moto_1.Moto("Yamaha", "MT-07", 2019);
var camion = new camion_1.Camion("Mercedes", "Actros", 2018);
registro.agregarVehiculo(auto);
registro.agregarVehiculo(moto);
registro.agregarVehiculo(camion);
// llama al metodo e imprime detalles de los vehiculos registrados
registro.mostrarTodos();
