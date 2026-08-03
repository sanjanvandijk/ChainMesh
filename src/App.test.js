// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainMesh title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainMesh/i);
    expect(titleElement).toBeInTheDocument();
});
