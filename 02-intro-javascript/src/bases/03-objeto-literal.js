const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New  York',
        zip: 654564,
        lat: 65.4564,
        lng: 545644
    }
}

// console.log({ persona });
// console.table(persona);
//console.log(persona);

// const persona2 = persona; // aquí se está compiando es la referencia en memoria
// console.log(persona2);

// la forma correcta sería

const persona2 = { ...persona }
persona2.nombre = 'Peter';
persona2.apellido = 'Parker';


console.log(persona);
console.log(persona2);