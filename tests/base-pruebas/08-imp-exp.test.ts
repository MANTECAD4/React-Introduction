import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import { Hero, heroes } from '../../src/data/heroes';


describe('Tests on "imp-exp" Module', () => { 

    test('getHeroById should return a Hero instance given an existent ID', () => { 

        const id = 1;
        const hero = getHeroeById( id );

        expect( hero ).toEqual( {
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

     });

    test('getHeroById should return undefined given a non-existent ID', () => { 

        const id = -1;
        const hero = getHeroeById( id );

        expect( hero ).toBeFalsy(); // Null | undefined | false | 0 | ''

     });

    test('getHeroByOwner should return all the Hero instances in which the owner is DC', () => { 

        const owner:string = 'DC';
        const testHeroesDC:Hero[] = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ];
        const heroesDC:Hero[] = getHeroesByOwner( owner );
        console.log(heroesDC);

        expect( heroesDC ).toHaveLength(testHeroesDC.length);
        // expect ( heroesDC ).toEqual(testHeroesDC);
        expect( heroesDC ).toEqual(heroes.filter(hero => hero.owner === owner));
        expect( heroesDC.every( hero => hero.owner === owner)).toBe(true);

     });

    test('getHeroByOwner should return all the Hero instances in which the owner is Marvel', () => { 

        const owner:string = 'Marvel';
        const testHeroesMrvl:Hero[] = [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ];
        const heroesMrvl:Hero[] = getHeroesByOwner( owner );
        console.log(heroesMrvl);

        expect( heroesMrvl ).toHaveLength(testHeroesMrvl.length);
        // expect ( heroesMrvl ).toEqual(testHeroesMrvl);
        expect( heroesMrvl.every( hero => hero.owner === owner)).toBe(true);

     });

 });