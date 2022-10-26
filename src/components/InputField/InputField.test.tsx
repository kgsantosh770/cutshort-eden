import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import InputField from './InputField';

describe('InputField', ()=>{
    it('renders correctly', ()=>{
        const inputTitle = "Testing";
        render(<InputField title={inputTitle} />);
        const InputFieldComponent = screen.getByText('Testing');
        expect(InputFieldComponent).toBeInTheDocument;        
    })

    it('has correct title', ()=>{
        const inputTitle = "Testing";
        render(<InputField title={inputTitle} />);
        const InputFieldComponent = screen.getByText(inputTitle);
        expect(InputFieldComponent).toBeInTheDocument;
    })

    it('has correct placeholder', ()=>{
        const placeholder = "Testing Placeholder";
        render(<InputField title={'Testing'} placeholder={placeholder} />);
        const InputFieldComponent = screen.queryByPlaceholderText(placeholder);
        expect(InputFieldComponent?.getAttribute("placeholder")).toBe(placeholder);
    })

    it('error displays only when errorText prop is given', ()=>{
        const errorText = "First name cannot be empty."
        render(<InputField title="Testing" />);
        let errorElement = screen.queryByText(errorText);
        expect(errorElement).toBeNull;
        render(<InputField title="Testing" errorText={errorText}/>);
        errorElement = screen.getByText(errorText);
        expect(errorElement).toBeInTheDocument;        
    })

    it('required attribute is false when optional prop is true', ()=>{
        render(<InputField title="Testing" optional={true}/>);
        let inputElement = screen.getByTestId('inputBox');
        expect(inputElement.getAttribute('required')).toBeNull;
    })
    
    it('optional text is displayed only when optional prop is true',()=>{
        render(<InputField title="Testing"/>);
        let optionalElement = screen.queryByText('(optional)');
        expect(optionalElement).toBeNull;
        render(<InputField title="Testing" optional={true}/>);
        optionalElement = screen.getByText('(optional)');
        expect(optionalElement).toBeInTheDocument;                
    })

    it('pretext is displayed only when pretext prop is given', ()=>{
        const preText = "www.testing.com";
        render(<InputField title="Testing"/>);
        let preTextElement = screen.queryByText(preText);
        expect(preTextElement).toBeNull;
        render(<InputField title="Testing" preText={preText}/>);
        preTextElement = screen.getByText(preText);
        expect(preTextElement).toBeInTheDocument;         
    })

    it('if pretext present input box is rounded in right side and pretext box rounded in left side', ()=>{
        const preText = "www.testing.com";
        render(<InputField title="Testing" preText={preText}/>);
        let preTextElement = screen.getByText(preText);
        expect(preTextElement).toHaveClass('rounded-l-md');  
        let inputElement = screen.getByTestId('inputBox');
        expect(inputElement).toHaveClass('rounded-r-md');
    })

})