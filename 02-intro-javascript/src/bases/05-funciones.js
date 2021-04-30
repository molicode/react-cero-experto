//funciones en JS
/*function saludar(nombre) {
    return `Hola, ${nombre}`;
}

saludar = 30;

console.log(saludar);
*/

/*
const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

console.log(saludar);
*/

// arrow function
const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

console.log(saludar2('Vegeta'));


const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola, Mundo`;

console.log(saludar3('Gohan'));
console.log(saludar4());



const getUser = () => ({
    uid: 'ABC1223',
    username: 'El_papi1502'
});


const user = getUser();
console.log(user);



// tarea:
// 1 - tranmsformar en arrow function
// 2 - tiene que retornar un objeto implicito
// 3 - Pruebas
function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
     }
};

const usuarioActivo = getUsuarioActivo('Luis');
console.log(usuarioActivo);

// solucion :
const getUsuarioActivo2 = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo2 = getUsuarioActivo2('Luis');
console.log(usuarioActivo2);