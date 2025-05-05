
import { heroes, Hero } from '../data/heroes.ts';

export const getHeroeById = (id:number):(Hero | undefined) => 
    heroes.find( (heroe) => heroe.id === id );

export const getHeroesByOwner = ( owner:string ):Hero[] => 
    heroes.filter( (heroe) => heroe.owner === owner );



