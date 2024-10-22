class Luchador extends Personaje {
    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 150) {
        super(nombre, nivel, puntosDeVida);
        this.habilidades.push("Golpe básico"); // Habilidad inicial del Luchador
    }

    // Método específico del Luchador para golpear
    golpear() {
        console.log(`${this.nombre} lanza un golpe poderoso.`);
        this.nivel += 1; // Aumenta el nivel al usar habilidades específicas
        this.verificarEvolucion();
    }

    // Implementación del método de evolución
    evolucionar() {
        console.log(`${this.nombre} ha evolucionado a Guerrero Legendario.`);
        this.nivel = 1; // Reinicia el nivel tras evolucionar
        this.puntosDeVida += 70;
        this.habilidades.push("Golpe devastador"); // Nueva habilidad tras evolucionar
    }
}