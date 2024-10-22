var Personaje = /** @class */ (function () {
    function Personaje(nombre, nivel, puntosDeVida) {
        if (nivel === void 0) { nivel = 1; }
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.habilidades = []; // Array para almacenar las habilidades del personaje
        this.experiencia = 0; // Nueva propiedad para almacenar la experiencia del personaje
    }
    // Getter y setter para el nombre
    Personaje.prototype.getNombre = function () {
        return this.nombre;
    };
    Personaje.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    // Getter y setter para el nivel
    Personaje.prototype.getNivel = function () {
        return this.nivel;
    };
    Personaje.prototype.setNivel = function (nivel) {
        this.nivel = nivel;
    };
    // Getter y setter para los puntos de vida
    Personaje.prototype.getPuntosDeVida = function () {
        return this.puntosDeVida;
    };
    Personaje.prototype.setPuntosDeVida = function (puntosDeVida) {
        this.puntosDeVida = puntosDeVida;
    };
    // Getter y setter para la experiencia
    Personaje.prototype.getExperiencia = function () {
        return this.experiencia;
    };
    Personaje.prototype.setExperiencia = function (experiencia) {
        this.experiencia = experiencia;
    };
    // Método para atacar
    Personaje.prototype.atacar = function () {
        console.log("".concat(this.nombre, " est\u00E1 atacando."));
        this.experiencia += 10; // Aumenta la experiencia al atacar
        this.verificarEvolucion();
    };
    // Método para defenderse
    Personaje.prototype.defender = function () {
        console.log("".concat(this.nombre, " est\u00E1 defendiendo."));
    };
    // Método para que el personaje aprenda una nueva habilidad
    Personaje.prototype.aprenderHabilidad = function (nuevaHabilidad) {
        this.habilidades.push(nuevaHabilidad);
        console.log("".concat(this.nombre, " ha aprendido una nueva habilidad: ").concat(nuevaHabilidad));
    };
    // Método para verificar si el personaje puede evolucionar
    Personaje.prototype.verificarEvolucion = function () {
        if (this.experiencia >= 100) { // Evoluciona al alcanzar 100 puntos de experiencia
            this.evolucionar();
        }
    };
    return Personaje;
}());
