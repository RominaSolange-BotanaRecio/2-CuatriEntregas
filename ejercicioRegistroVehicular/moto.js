"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
// Moto.ts
var Moto = /** @class */ (function () {
    // Constructor de la clase Moto
    function Moto(patente, marca, modelo) {
        this.patente = patente; // Asignación de la patente
        this.marca = marca; // Asignación de la marca
        this.modelo = modelo; // Asignación del modelo
    }
    // Método para obtener la patente de la moto
    Moto.prototype.getPatente = function () {
        return this.patente;
    };
    // Método para establecer la marca de la moto
    Moto.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    // Método para establecer el modelo de la moto
    Moto.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    return Moto;
}());
exports.Moto = Moto;
