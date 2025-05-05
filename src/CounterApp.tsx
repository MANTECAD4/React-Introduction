import { useState } from 'react';

type Props = {
    value:number,
};

export const CounterApp = ( { value }:Props ) => {
    
    const [ counter, setCounter ] = useState( value );
    
    const handleAddButton = (  ):void => {
        setCounter( counter + 1 );
    };
    
    const handleSubButton = (  ):void => {
        setCounter( counter - 1 );
    };
    
    const handleRstButton = (  ):void => {
        setCounter( value );
    };

    return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        <button onClick = { handleAddButton }> +1 </button>
        <button onClick = { handleSubButton }> -1 </button>
        <button onClick = { handleRstButton }> Reset </button>
    </>
  );
};