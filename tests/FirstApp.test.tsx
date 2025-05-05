import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp.tsx';
// import React from 'react';

describe(`Tests on "FirstApp" component`, () => { 
    
    test('FirstApp component should match a snapshot', () => { 
        
        render( <FirstApp 
            title="First App component"
            subTitle="Basic Component"
            name="Daniel"/> )

     });

 });