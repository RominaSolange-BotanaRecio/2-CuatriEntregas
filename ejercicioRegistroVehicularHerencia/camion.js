"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camion = void 0;
// clase especifica camion usando herencia, representa tipos especificos de vehiculos
var vehiculo_1 = require("./vehiculo");
//cada clase camion hereda de vehiculo usando extends
//llama al constructor de la clase vehiculo usando super
var Camion = /** @class */ (function (_super) {
    __extends(Camion, _super);
    function Camion(marca, modelo, anio) {
        return _super.call(this, marca, modelo, anio) || this;
    }
    //escribe el metodo de la clase para imprimir detalles especificos de tipo vehiculo
    Camion.prototype.mostrarDetalles = function () {
        console.log("Cami\u00F3n: ".concat(this.getMarca(), " ").concat(this.getModelo(), " (").concat(this.getAnio(), ")"));
    };
    return Camion;
}(vehiculo_1.Vehiculo));
exports.Camion = Camion;
