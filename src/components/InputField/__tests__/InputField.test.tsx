import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from '../InputField';

describe('InputField component', () => {
  const mockOnChange = jest.fn();

  it('Should render input with the correct type and placeholder', () => {
    render(
      <InputField
        id="test"
        type="text"
        label="Test Label"
        labelPosition="left"
        helperText="Helper text"
        placeholder="Enter text"
        color="black"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('Should call onChange when the input value changes', () => {
    render(
      <InputField
        id="test"
        type="text"
        label="Test Label"
        labelPosition="left"
        helperText="Helper text"
        placeholder="Enter text"
        color="black"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter text');
    fireEvent.change(inputElement, { target: { value: 'new value' } });

    expect(mockOnChange).toHaveBeenCalledWith('test', 'new value');
  });

  it('Should toggle password visibility', () => {
    render(
      <InputField
        id="test"
        type="secret"
        label="Test Label"
        labelPosition="left"
        helperText="Helper text"
        placeholder="Enter password"
        color="black"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter password');
    expect(inputElement).toHaveAttribute('type', 'password');

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);

    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('Should render label and helper text', () => {
    render(
      <InputField
        id="test"
        type="text"
        label="Test Label"
        labelPosition="left"
        helperText="Helper text"
        placeholder="Enter text"
        color="black"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Helper text')).toBeInTheDocument();
  });

  it('Should apply the correct class based on color prop', () => {
    render(
      <InputField
        id="test"
        type="text"
        label="Test Label"
        labelPosition="left"
        helperText="Helper text"
        placeholder="Enter text"
        color="red"
        onChange={mockOnChange}
      />
    );

    const inputElement = screen.getByPlaceholderText('Enter text');
    expect(inputElement).toHaveClass('input-field__container__input-container__input--red');
  });
});