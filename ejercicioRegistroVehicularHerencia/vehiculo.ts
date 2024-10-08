// defini la clase vehiculo, representa un vehiculo
export class Vehiculo {
    constructor( //constructor inicializa las propiedades/atributos
        private marca: string,
        private modelo: string,
        private anio: number
    ) {}
//permite acceder y modificar las propiedades/atributos privados de la clase
    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    public getAnio(): number {
        return this.anio;
    }

    public setAnio(anio: number): void {
        this.anio = anio;
    }
//imprime detalles de vehiculos en la consola
    public mostrarDetalles(): void {
        console.log(`Vehículo: ${this.marca} ${this.modelo} (${this.anio})`);
    }
}