
describe('Pruebas en <DemoComponent/>', () => {  
    
    test('Esta prueba no debe fallar', () => {
        
        // 1. Inicializacion.
        const msg1:string = 'Hola mundo';
        // 2. Estimulo.
        const msg2:string = msg1.trim();
        // 3. Observación del comportamiento.
        expect( msg1).toBe(msg2);
        
    });

});
