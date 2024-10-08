"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
//array que almacena instancias de vehiculos
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.vehiculos = [];
    }
    //agrega un vehiculo al array vehiculo
    RegistroAutomotor.prototype.agregarVehiculo = function (vehiculo) {
        this.vehiculos.push(vehiculo);
    };
    //devuelve un vehiculo del array segun su indice
    RegistroAutomotor.prototype.obtenerVehiculo = function (index) {
        return this.vehiculos[index];
    };
    //modifica un vehiculo del array segun su indice
    RegistroAutomotor.prototype.modificarVehiculo = function (index, vehiculo) {
        if (this.vehiculos[index]) {
            this.vehiculos[index] = vehiculo;
        }
    };
    //elimina un vehiculo del array segun su indice
    RegistroAutomotor.prototype.darDeBaja = function (index) {
        if (this.vehiculos[index]) {
            this.vehiculos.splice(index, 1);
        }
    };
    //imprime detalles de todos los vehiculos registrados en el array
    RegistroAutomotor.prototype.mostrarTodos = function () {
        this.vehiculos.forEach(function (vehiculo) { return vehiculo.mostrarDetalles(); });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
