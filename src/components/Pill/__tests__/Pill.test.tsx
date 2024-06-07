import React from 'react';
import Pill from '../Pill';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';

afterEach(() => {
  cleanup();
});

// Mock useNavigate from react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Tests for Pill Component', () => {
	test('ID: F.Pill.1 - The Pill component renders correctly', () => {
		const pillText = 'sample text';
		const pillColor = 'green';

		render(
			<Pill text={pillText} color={pillColor} id=""/>
		);
		expect(screen.getByTestId('pill-wrapper')).toBeTruthy();
		expect(screen.getByTestId('pill-wrapper__span-txt')).toHaveTextContent(pillText);
		expect(screen.getByTestId('pill-wrapper')).toHaveClass('bg-aci-' + pillColor);
	});

	test('ID: F.Pill.2 - The Pill component navigates to the correct URL when clicked', () => {
		const mockNavigate = jest.fn();
    const useNavigate = require('react-router-dom').useNavigate;
    useNavigate.mockReturnValue(mockNavigate);

		const pillText = 'sample text';
		const pillColor = 'green';
		const pillId = '1234';

		render(
			<MemoryRouter>
				<Pill text={pillText} color={pillColor} id={pillId}/>
			</MemoryRouter>
		);

		const pillWrapper = screen.getByTestId('pill-wrapper');
		fireEvent.click(pillWrapper);
    expect(mockNavigate).toHaveBeenCalledWith(`/queues/${pillId}`);
	});
});
