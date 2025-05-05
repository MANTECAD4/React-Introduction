
// Desestructuración
// Asignación Desestructurante

type Persona = {

    clave:string
    edad:number,
    nombre:string,
    rango?:string,
}
const persona:Persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { edad, clave, nombre, } = persona;
 
// console.log( nombre );
// console.log( edad );
// console.log( clave );

type Profile = {
    
    nombreClave: string,
    anios: number,
    latlng: {
        lat: number,
        lng: number
    }

}

const useContext = ({ clave, nombre, edad, rango = 'Capitán' }:Persona):Profile => {


    // console.log( nombre, edad, rango );
    
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );


