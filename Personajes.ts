abstract class Personaje {
    protected habilidades: string[] = []; // Array para almacenar las habilidades del personaje
    protected experiencia: number = 0; // Nueva propiedad para almacenar la experiencia del personaje

    constructor(
        protected nombre: string,
        protected nivel: number = 1,
        protected puntosDeVida: number
    ) {}

    // Getter y setter para el nombre
    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    // Getter y setter para el nivel
    getNivel(): number {
        return this.nivel;
    }

    setNivel(nivel: number): void {
        this.nivel = nivel;
    }

    // Getter y setter para los puntos de vida
    getPuntosDeVida(): number {
        return this.puntosDeVida;
    }

    setPuntosDeVida(puntosDeVida: number): void {
        this.puntosDeVida = puntosDeVida;
    }

    // Getter y setter para la experiencia
    getExperiencia(): number {
        return this.experiencia;
    }

    setExperiencia(experiencia: number): void {
        this.experiencia = experiencia;
    }

    // Método para atacar
    atacar() {
        console.log(`${this.nombre} está atacando.`);
        this.experiencia += 10; // Aumenta la experiencia al atacar
        this.verificarEvolucion();
    }

    // Método para defenderse
    defender() {
        console.log(`${this.nombre} está defendiendo.`);
    }

    // Método para que el personaje aprenda una nueva habilidad
    aprenderHabilidad(nuevaHabilidad: string) {
        this.habilidades.push(nuevaHabilidad);
        console.log(`${this.nombre} ha aprendido una nueva habilidad: ${nuevaHabilidad}`);
    }

    // Método abstracto para evolucionar, implementado por las clases derivadas
    abstract evolucionar(): void;

    // Método para verificar si el personaje puede evolucionar
    verificarEvolucion() {
        if (this.experiencia >= 100) { // Evoluciona al alcanzar 100 puntos de experiencia
            this.evolucionar();
        }
    }
}
