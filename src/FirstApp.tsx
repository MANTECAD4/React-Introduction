
type Props = {
    title:string,
    subTitle?:string,
    name?:string,
}

export const FirstApp = ( {title, subTitle='No subtitle', name='No name' }:Props ) => {
    return (
        // <Fragment>
        //     <h1>Ñañel's First App 🤯🤪</h1>
        //     <p>Holaa</p>
        // </Fragment>
        <>
            <h1 data-testid="test-title">{title} </h1>
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <p>{name}'s First App 🤯🤪</p>
        </>

    )
}