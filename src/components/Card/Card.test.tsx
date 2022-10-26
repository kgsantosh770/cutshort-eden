import { render, screen } from '@testing-library/react';
import { MouseEvent } from 'react';
import "@testing-library/jest-dom";

import Card from './Card';
import PersonIcon from '../../assets/images/person.png';

describe('Card', () => {
    const dummyClickEvent = (event: MouseEvent<HTMLButtonElement>) => { }

    it('renders properly', () => {
        const cardTitle = "testing";
        render(<Card title={cardTitle} onClick={dummyClickEvent} />);
        const cardElement = screen.getByText(cardTitle);
        expect(cardElement).toBeInTheDocument;
    })

    it('icon renders only when prop is available', () => {
        render(<Card title="Testing" onClick={dummyClickEvent} />);
        let iconElement = screen.queryByRole('img');
        expect(iconElement).toBeNull;
        render(<Card title="Testing" icon={PersonIcon} onClick={dummyClickEvent} />);
        iconElement = screen.getByRole('img');
        expect(iconElement).toBeInTheDocument;
    })

    it('description renders only when prop is available', () => {
        const description = "Test description";
        render(<Card title="Testing" onClick={dummyClickEvent} />);
        let descElement = screen.queryByText(description);
        expect(descElement).toBeNull;
        render(<Card title="Testing" description={description} onClick={dummyClickEvent} />);
        descElement = screen.getByText(description);
        expect(descElement).toBeInTheDocument;
    })

    it('inactive by default', () => {
        render(<Card title="Testing" onClick={dummyClickEvent} />);
        const cardElement = screen.getByTestId('cardButton');
        expect(cardElement).toHaveClass('border-gray-200');
    })

    it('active when active prop is true', () => {
        render(<Card title="Testing" active={true} onClick={dummyClickEvent} />);
        const cardElement = screen.getByTestId('cardButton');
        expect(cardElement).toHaveClass('border-primary');
    })

})