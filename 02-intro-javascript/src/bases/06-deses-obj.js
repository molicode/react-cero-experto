// Desestructuración
// Asignación Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

/* const { clave:heroe } = persona;
console.log(heroe); */

//const { nombre } = persona;
//console.log(nombre);


//const { nombre, edad, clave, } = persona;

/*console.log(nombre);
console.log(edad);
console.log(clave);
 */
/* 
const retornaPersona = ( usuario ) => {
    console.log(usuario);
}

retornaPersona(persona); */



/* const retornaPersona = ( usuario ) => {
    const { edad, clave, nombre, } = usuario;
    console.log(edad, clave, nombre);

}

retornaPersona(persona); */
/* 
const retornaPersona = ({ nombre, edad, rango = 'Capitan' }) => {
    console.log(nombre, edad, rango);
}

retornaPersona(persona); */



/* const retornaPersona = ({ nombre, edad, rango = 'Capitan' }) => {
    console.log(nombre, edad, rango);
}

retornaPersona(persona); */


const useContex = ({ clave, nombre, edad, rango = 'Capitan' }) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.6354,
            lng: -12.1654
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng} } = useContex(persona);
console.log(nombreClave, anios);
console.log(lat, lng);