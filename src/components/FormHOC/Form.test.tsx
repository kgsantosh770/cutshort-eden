import { render, screen } from '@testing-library/react';

import Form from './Form';

describe('Form', () => {

    const dummyHandleSubmit = () => { }

    it('renders properly', () => {
        const formTitle = "Tesing form";
        render(<Form title={formTitle} handleSubmit={dummyHandleSubmit} />);
        const formElement = screen.getByText(formTitle);
        expect(formElement).toBeInTheDocument;
    })

    it('title renders properly', () => {
        const formTitle = "Tesing form";
        render(<Form title={formTitle} handleSubmit={dummyHandleSubmit} />);
        const formElement = screen.getByText(formTitle);
        expect(formElement).toBeInTheDocument;
    })

    it('subtitle renders only when prop is provided', () => {
        const subtitle = "Tesing form";
        render(<Form title="Testing" handleSubmit={dummyHandleSubmit} />);
        let subtitleElement = screen.queryByText(subtitle);
        expect(subtitleElement).toBeNull;
        render(<Form title="Testing" subtitle={subtitle} handleSubmit={dummyHandleSubmit} />);
        subtitleElement = screen.getByText(subtitle);
        expect(subtitleElement).toBeInTheDocument;
    })

    it('button renders only when buttonText prop is provided', () => {
        const buttonText = "tesing button";
        render(<Form title="Testing" handleSubmit={dummyHandleSubmit} />);
        let buttonElement = screen.queryByTestId('formButton');
        expect(buttonElement).toBeNull;
        render(<Form title="Testing" buttonText={buttonText} handleSubmit={dummyHandleSubmit} />);
        buttonElement = screen.getByTestId('formButton');
        expect(buttonElement).toBeInTheDocument;
    })

    it('children renders properly', () => {
        const testId = 'testingChild';
        const children = <p data-testid={testId}>Testing Children</p>;
        render(<Form title="Testing" handleSubmit={dummyHandleSubmit}> {children} </Form>);
        const formChildren = screen.getByTestId(testId);
        expect(formChildren).toBeInTheDocument;
    })
})