import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
// import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';

const root = document.querySelector('#root');

if ( root ) {
    ReactDOM.createRoot( root ).render(
        <React.StrictMode>
           <FirstApp title='First App' subTitle='Basic component' name='Ñañel'/>
        </React.StrictMode>
    );
} else {
    throw new Error( 'Root element not found.' );
}
