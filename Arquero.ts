class Arquero extends Personaje {
    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 120) {
        super(nombre, nivel, puntosDeVida);
        this.habilidades.push("Disparo básico"); // Habilidad inicial del Arquero
    }

    // Método específico del Arquero para disparar flechas
    dispararFlecha() {
        console.log(`${this.nombre} dispara una flecha.`);
        this.nivel += 1; // Aumenta el nivel al usar habilidades específicas
        this.verificarEvolucion();
    }

    // Implementación del método de evolución
    evolucionar() {
        console.log(`${this.nombre} ha evolucionado a Maestro Arquero.`);
        this.nivel = 1; // Reinicia el nivel tras evolucionar
        this.puntosDeVida += 60;
        this.habilidades.push("Disparo certero"); // Nueva habilidad tras evolucionar
    }
}