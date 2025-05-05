import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';

type AcceptedTuple = [string , number];

describe('Tests on deses-arr Module', () => { 
    
    test('"Retornar arreglo" returns a tuple:[string , number]', () => { 

        const [letters, numbers] : AcceptedTuple = retornaArreglo();
        
        console.log({letters,numbers});

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');

        expect( letters ).toEqual( expect.any(String) );

    })
 
 });