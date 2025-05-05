import { render } from "@testing-library/react";
import { FirstApp } from '../src/FirstApp.tsx';
import React from 'react';

describe(`Tests on "FirstApp" component`, () => { 
    
    
    test('FirstApp component should have an h1 element for the title', () => { 
        
        const title:string = "First App component"; 
        const subTitle:string = "Basic Component";
        const name:string = 'Daniel';
        const { container, getByText, getByTestId } = render(
            <FirstApp 
                title={ title } 
                subTitle={ subTitle } 
                name={ name }
            />);
        
        expect(getByTestId('test-title').innerHTML).toContain(title);
        
        // const h1 = container.querySelector('h1');
        // expect(h1?.innerHTML).toBe(title);
        // expect(h1?.innerHTML).toContain(title);
        
    });
    
    test('FirstApp component should have two h2 element for the subTitle', () => { 
        
        const title:string = "First App component"; 
        const subTitle:string = "Basic Component";
        const name:string = 'Daniel';
        const { getAllByText } = render(
            <FirstApp 
                title={ title } 
                subTitle={ subTitle } 
                name={ name }
            />);
        
        expect(getAllByText(subTitle).length).toBe(2);
        
        // const h1 = container.querySelector('h1');
        // expect(h1?.innerHTML).toBe(title);
        // expect(h1?.innerHTML).toContain(title);
        
    });
    
    
    // test('FirstApp component should match a snapshot', () => { 
        
    //     const title:string = "First App component"; 
    //     const subTitle:string = "Basic Component";
    //     const name:string = 'Daniel';
    //     const { container } = render(<FirstApp title={ title } subTitle={ subTitle } name={ name }/>);

    //     expect(container).toMatchSnapshot();

    //  });

 });