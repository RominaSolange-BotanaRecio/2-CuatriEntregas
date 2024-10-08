"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
// defini la clase vehiculo, representa un vehiculo
var Vehiculo = /** @class */ (function () {
    function Vehiculo(//constructor inicializa las propiedades/atributos
    marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
    }
    //permite acceder y modificar las propiedades/atributos privados de la clase
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Vehiculo.prototype.getAnio = function () {
        return this.anio;
    };
    Vehiculo.prototype.setAnio = function (anio) {
        this.anio = anio;
    };
    //imprime detalles de vehiculos en la consola
    Vehiculo.prototype.mostrarDetalles = function () {
        console.log("Veh\u00EDculo: ".concat(this.marca, " ").concat(this.modelo, " (").concat(this.anio, ")"));
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;
