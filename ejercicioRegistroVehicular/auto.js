"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
// Auto.ts
var Auto = /** @class */ (function () {
    // Constructor de la clase Auto
    function Auto(patente, marca, modelo) {
        this.patente = patente; // Asignación de la patente
        this.marca = marca; // Asignación de la marca
        this.modelo = modelo; // Asignación del modelo
    }
    // Método para obtener la patente del auto
    Auto.prototype.getPatente = function () {
        return this.patente;
    };
    // Método para establecer la marca del auto
    Auto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    // Método para establecer el modelo del auto
    Auto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Auto;
}());
exports.Auto = Auto;
