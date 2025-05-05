import { render, screen } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp.tsx';
import React from 'react';

describe(`Tests on "FirstApp" component`, () => { 
    
    const title:string = "First App component"; 
    const subTitle:string = "Basic Component";
    const name:string = 'Daniel';
    
    test('FirstApp component should match a snapshot', () => { 

        const { container } = render(
            <FirstApp title={ title } subTitle={ subTitle } name={ name }
        />);
        expect(container).toMatchSnapshot();

     });
    
     test('FirstApp component should have the title "First App component"', () => { 
        
        render(
            <FirstApp 
                title={ title } 
                subTitle={ subTitle } 
                name={ name }
            />);
        // screen.debug();
        expect(screen.getByText(title)).toBeTruthy();
        
    });
    
     test('FirstApp component should have the title inside an h1 element', () => { 
        
        render(
            <FirstApp 
                title={ title } 
                subTitle={ subTitle } 
                name={ name }
            />);
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title);
        
    });
    
    
    test('FirstApp component should have two h2 element for the subTitle', () => { 
        
        render(
            <FirstApp 
                title={ title } 
                subTitle={ subTitle } 
                name={ name }
            />);
        
        expect(screen.getAllByText(subTitle).length).toBe(2);
  
    });    

 });