import { getSaludo } from "../../src/base-pruebas/02-template-string.ts";


describe('Tests on 02-template-string module ', () => { 

    test( 'Returns "Hello Daniel"', () => {
        const name = 'Daniel';
        const msg = getSaludo(name);
        expect(msg).toBe(`Hola ${name}`);
    });

});