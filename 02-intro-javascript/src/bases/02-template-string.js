// Template String

const nombre = 'Luis';
const apellido = 'Molina';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${ nombre } ${ apellido } `; // lo que esta dentro es javascript ` ${ } `

// const saludo = ' Hola Mundo '; // este es exactamenmte igual al backtick / Back Quote
console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)} `);