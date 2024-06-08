import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';

const mockOnSubmit = jest.fn();

describe('LoginForm', () => {
  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test('ID: LF.1 - Renders LoginForm component with all elements', () => {
    render(<LoginForm status="default" onSubmit={mockOnSubmit} />);

    expect(screen.getByText('LOGIN')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('ID: LF.2 - Updates input fields on change', () => {
    render(<LoginForm status="default" onSubmit={mockOnSubmit} />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const passwordInput = screen.getByPlaceholderText('Enter your password');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('password123');
  });

  test('ID: LF.3 - Calls onSubmit with email and password on form submit', () => {
    render(<LoginForm status="default" onSubmit={mockOnSubmit} />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    const submitButton = screen.getByText('Login');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(submitButton);
    expect(mockOnSubmit).toHaveBeenCalledWith('test@example.com', 'password123');
  });

  test('ID: LF.4 - Changes input field color to red on error status', () => {
    render(<LoginForm status="error" onSubmit={mockOnSubmit} />);

    const emailInput = screen.getByPlaceholderText('Enter your email');
    const passwordInput = screen.getByPlaceholderText('Enter your password');
    expect(emailInput).toHaveClass('input-field__container__input-container__input--red');
    expect(passwordInput).toHaveClass('input-field__container__input-container__input--red');
  });

  test('ID: LF.5 - Shows helper text on error status', () => {
    render(<LoginForm status="error" onSubmit={mockOnSubmit} />);
    expect(screen.getByText('Invalid email or password, please try again.')).toBeInTheDocument();
  });
});