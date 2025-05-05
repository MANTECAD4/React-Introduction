import { fireEvent, render, screen } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';
import React from 'react';

describe(`Tests on "CounterApp" component`, () => { 

    const initialValue:number = 10;
    
    // test(`The component should match a snapshot`, () => { 
        
    //     const {container} = render(<CounterApp value={value}/>);
    //     expect( container ).toMatchSnapshot();

    //  });

    test('Init value should be 100', () => { 
        
        render(<CounterApp value={initialValue}/>);
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(`${initialValue}`);
        
    });
    
    test('Button +1 must increase counter value', () => { 
        
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByRole('button', {name: /sumar 1/i}));
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(`${initialValue+1}`);

    }); 
    
    test('Button -1 must decrease counter value', () => { 
        
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByRole('button', {name: /\-1/i}));
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(`${initialValue-1}`);

    }); 

    test(`Button Reset must re-inilitaze counter's value`, () => { 
        
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByRole('button', {name: /\-1/i}));
        fireEvent.click(screen.getByRole('button', {name: /\-1/i}));
        fireEvent.click(screen.getByRole('button', {name: /\-1/i}));
        fireEvent.click(screen.getByRole('button', {name: /\-1/i}));
        fireEvent.click(screen.getByRole('button',{name: /reset/i}));
        // screen.debug();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain(`${initialValue}`);
     });

 });