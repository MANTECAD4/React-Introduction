import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { CounterApp } from './CounterApp';

const root = document.querySelector('#root');

if ( root ) {
    ReactDOM.createRoot( root ).render(
        <React.StrictMode>
            <CounterApp value={10}/>
        </React.StrictMode>
    );
} else {
    throw new Error( 'Root element not found.' );
}
