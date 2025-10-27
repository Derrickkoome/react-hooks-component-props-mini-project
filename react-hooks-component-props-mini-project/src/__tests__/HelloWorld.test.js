const { render, screen } = require('@testing-library/react');
const HelloWorld = require('../components/HelloWorld');

test('renders Hello World!', () => {
    render(<HelloWorld />);
    const helloElement = screen.getByText(/Hello World!/i);
    expect(helloElement).toBeInTheDocument();
});