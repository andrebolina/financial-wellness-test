import { render, screen } from '@testing-library/react';

import Footer from './footer';

describe("Footer", () => {
  it('should render', () => {
    render(<Footer />);

    expect(screen.getByText('Your financial information is encrypted and secure. We\'ll never share or sell any of your personal data.')).toBeInTheDocument();
  })
})