import { getUser, getUsuarioActivo, User } from '../../src/base-pruebas/05-funciones';


describe('Tests on "funciones" Module.', () => { 

    test('getUser returns an object', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };
        const user:User = getUser();
        expect(testUser).toStrictEqual((user));
     });
    
     test('getUsuarioActivo returns an object with an specified name', () => { 
        const nombre = 'Daniel';
        const testUser = {
            uid: 'ABC567',
            username: nombre
        }
    
        const user:User = getUsuarioActivo(nombre);
        expect(testUser).toStrictEqual((user));
     });
 });