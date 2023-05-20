// Direccion.ts
export class Direccion {
    private calle: string;
    private numero: number;
    private piso: number;
    private letra: string;
    private codigoPostal: string;
    private poblacion: string;
    private provincia: string;
  
    constructor(
      calle: string,
      numero: number,
      piso: number,
      letra: string,
      codigoPostal: string,
      poblacion: string,
      provincia: string
    ) {
      this.calle = calle;
      this.numero = numero;
      this.piso = piso;
      this.letra = letra;
      this.codigoPostal = codigoPostal;
      this.poblacion = poblacion;
      this.provincia = provincia;
    }
  
    // Métodos para acceder a los atributos
  
    public getCalle(): string {
      return this.calle;
    }
  
    public getNumero(): number {
      return this.numero;
    }
  
    public getPiso(): number {
      return this.piso;
    }
  
    public getLetra(): string {
      return this.letra;
    }
  
    public getCodigoPostal(): string {
      return this.codigoPostal;
    }
  
    public getPoblacion(): string {
      return this.poblacion;
    }
  
    public getProvincia(): string {
      return this.provincia;
    }
  }
  
  export default Direccion;
  