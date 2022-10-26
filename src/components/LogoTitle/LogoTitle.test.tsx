import {render, screen} from '@testing-library/react';

import LogoTitle from "./LogoTitle";

describe('LogoTitle', () => { 

    it('renders properly', ()=>{
        render(<LogoTitle />);
        const logoText = screen.getByText('Eden');
        expect(logoText).toBeInTheDocument;
    })
})
