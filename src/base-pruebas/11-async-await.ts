

export const getImagen = async() => {

    try {

        const apiKey = 'I1BEy7JMyEJSWoy03MU2Vq0sShZdllIo';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.log(error)
        // return 'No se encontró la imagen';
        throw new Error((error as string));
        
    }
        
}




