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
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nombre, nivel, puntosDeVida) {
        if (nivel === void 0) { nivel = 1; }
        if (puntosDeVida === void 0) { puntosDeVida = 120; }
        var _this = _super.call(this, nombre, nivel, puntosDeVida) || this;
        _this.habilidades.push("Disparo básico"); // Habilidad inicial del Arquero
        return _this;
    }
    // Método específico del Arquero para disparar flechas
    Arquero.prototype.dispararFlecha = function () {
        console.log("".concat(this.nombre, " dispara una flecha."));
        this.nivel += 1; // Aumenta el nivel al usar habilidades específicas
        this.verificarEvolucion();
    };
    // Implementación del método de evolución
    Arquero.prototype.evolucionar = function () {
        console.log("".concat(this.nombre, " ha evolucionado a Maestro Arquero."));
        this.nivel = 1; // Reinicia el nivel tras evolucionar
        this.puntosDeVida += 60;
        this.habilidades.push("Disparo certero"); // Nueva habilidad tras evolucionar
    };
    return Arquero;
}(Personaje));
