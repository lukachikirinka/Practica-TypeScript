// main.ts
import Persona from "./Persona";
import Direccion from "./Direccion";
import Telefono from "./Telefono";
import Mail from "./Mail";

// Crear registros de personas
const direccion1 = new Direccion(
  "Calle Principal",
  123,
  1,
  "A",
  "12345",
  "Ciudad",
  "Provincia"
);

const direccion2 = new Direccion(
  "Calle Secundaria",
  456,
  2,
  "B",
  "54321",
  "Pueblo",
  "Provincia"
);

const mail1 = new Mail("Personal", "persona1@example.com");
const mail2 = new Mail("Trabajo", "persona1@work.com");

const telefono1 = new Telefono("Móvil", "123456789");
const telefono2 = new Telefono("Casa", "987654321");

const persona1 = new Persona(
  "Nombre1",
  "Apellido1",
  25,
  "11111111A",
  "01/01/1998",
  "Azul",
  "Masculino",
  [direccion1],
  [mail1],
  [telefono1],
  "Notas de la persona 1"
);

const persona2 = new Persona(
  "Nombre2",
  "Apellido2",
  30,
  "22222222B",
  "02/02/1993",
  "Rojo",
  "Femenino",
  [direccion2],
  [mail2],
  [telefono2],
  "Notas de la persona 2"
);

const persona3 = new Persona(
  "Nombre3",
  "Apellido3",
  35,
  "33333333C",
  "03/03/1988",
  "Verde",
  "No binario",
  [],
  [],
  [],
  "Notas de la persona 3"
);

// Mostrar registros de personas en el terminal
console.log("Personas registradas:");
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());

// Modificar uno de los registros de persona
if (persona2.getDNI() === "22222222B") {
  const nuevaDireccion = new Direccion(
    "Nueva Calle",
    789,
    3,
    "C",
    "98765",
    "Nueva Ciudad",
    "Nueva Provincia"
  );

  const nuevoMail = new Mail("Personal", "persona2@example.com");
  const nuevoTelefono = new Telefono("Móvil", "987654321");

  persona2.addDireccion(nuevaDireccion);
  persona2.addMail(nuevoMail);
  persona2.addTelefono(nuevoTelefono);
}

// Mostrar registros de personas con los cambios realizados
console.log("\nPersonas registradas después de la modificación:");
console.log(persona1.toString());
console.log(persona2.toString());
console.log(persona3.toString());
