import { render, screen } from '@testing-library/react';

import LogoTitle from "./LogoTitle";
import Logo from '../../assets/images/logo.png';

describe('LogoTitle', () => {

    it('renders properly', () => {
        const title = "Testing"
        render(<LogoTitle title={title}/>);
        const logoText = screen.getByText(title);
        expect(logoText).toBeInTheDocument;
    })

    it('icon renders only when prop is given', ()=>{
        render(<LogoTitle title="Testing"/>);
        let iconElement = screen.queryByRole('img');
        expect(iconElement).toBeNull;
        render(<LogoTitle title="Testing" icon={Logo}/>);
        iconElement = screen.getByRole('img');
        expect(iconElement).toBeInTheDocument;
    })
})
