// Persona.ts
import { Direccion  } from "./Direccion";
import Telefono from "./Telefono";
import Mail from "./Mail";

class Persona {
  private nombre: string;
  private apellido: string;
  private edad: number;
  private dni: string;
  private cumpleanos: string;
  private colorFavorito: string;
  private sexo: string;
  private direcciones: Direccion[];
  private mails: Mail[];
  private telefonos: Telefono[];
  private notas: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    dni: string,
    cumpleanos: string,
    colorFavorito: string,
    sexo: string,
    direcciones: Direccion[],
    mails: Mail[],
    telefonos: Telefono[],
    notas: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.dni = dni;
    this.cumpleanos = cumpleanos;
    this.colorFavorito = colorFavorito;
    this.sexo = sexo;
    this.direcciones = direcciones;
    this.mails = mails;
    this.telefonos = telefonos;
    this.notas = notas;
  }

  // Métodos para acceder a los atributos

  public getNombre(): string {
    return this.nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public getEdad(): number {
    return this.edad;
  }

  public getDNI(): string {
    return this.dni;
  }

  public getCumpleanos(): string {
    return this.cumpleanos;
  }

  public getColorFavorito(): string {
    return this.colorFavorito;
  }

  public getSexo(): string {
    return this.sexo;
  }

  public getDirecciones(): Direccion[] {
    return this.direcciones;
  }

  public getMails(): Mail[] {
    return this.mails;
  }

  public getTelefonos(): Telefono[] {
    return this.telefonos;
  }

  public getNotas(): string {
    return this.notas;
  }

  // Otros métodos

  public addDireccion(direccion: Direccion): void {
    this.direcciones.push(direccion);
  }

  public addMail(mail: Mail): void {
    this.mails.push(mail);
  }

  public addTelefono(telefono: Telefono): void {
    this.telefonos.push(telefono);
  }

  public toString(): string {
    return `${this.nombre} ${this.apellido}`;
  }
}

export default Persona;
