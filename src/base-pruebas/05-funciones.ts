

export type User = {
    uid:string,
    username:string
}

export const getUser = ():User => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});

export const getUsuarioActivo = ( nombre:string ):User =>({
    uid: 'ABC567',
    username: nombre,
    // uwu: 123,
})





