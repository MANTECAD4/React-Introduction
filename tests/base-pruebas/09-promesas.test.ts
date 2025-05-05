import { getHeroeByIdAsync } from '../../src/base-pruebas/09-promesas';


describe('Tests on "09-Promesas" Module',  (  ) => { 
    
    test('getHeroByIdAsync should return a Hero (if it exists)', ( done ) => { 
    
        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            });
     });

    test(`getHeroByIdAsync should throw a error message (if it doesn't exist)`, ( done ) => { 
    
        const id = -1;
        getHeroeByIdAsync( id )
            .catch(error => {
                // console.warn(error);
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            });

     });
 });