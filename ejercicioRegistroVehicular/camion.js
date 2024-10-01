"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
// Camion.ts
var Camion = /** @class */ (function () {
    // Constructor de la clase Camion
    function Camion(patente, marca, modelo) {
        this.patente = patente; // Asignación de la patente
        this.marca = marca; // Asignación de la marca
        this.modelo = modelo; // Asignación del modelo
    }
    // Método para obtener la patente del camión
    Camion.prototype.getPatente = function () {
        return this.patente;
    };
    // Método para establecer la marca del camión
    Camion.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    // Método para establecer el modelo del camión
    Camion.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Camion;
}());
exports.Camion = Camion;
