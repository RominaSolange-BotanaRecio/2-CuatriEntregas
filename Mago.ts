class Mago extends Personaje {
    constructor(nombre: string, nivel: number = 1, puntosDeVida: number = 100) {
        super(nombre, nivel, puntosDeVida);
        this.habilidades.push("Hechizo básico"); // Habilidad inicial del Mago
    }

    // Método específico del Mago para lanzar un hechizo
    lanzarHechizo() {
        console.log(`${this.nombre} lanza un hechizo.`);
        this.nivel += 1; // Aumenta el nivel al usar habilidades específicas
        this.verificarEvolucion();
    }

    // Implementación del método de evolución
    evolucionar() {
        console.log(`${this.nombre} ha evolucionado a Mago Supremo.`);
        this.nivel = 1; // Reinicia el nivel tras evolucionar
        this.puntosDeVida += 50;
        this.habilidades.push("Hechizo avanzado"); // Nueva habilidad tras evolucionar
    }
}