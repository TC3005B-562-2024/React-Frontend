import React from 'react';
import SideBarElement from '../SideBarElement';
import { screen, render, cleanup, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { IIconNoColorNoSize } from '../../Icon/types';

afterEach(() => {
  cleanup();
});

const mockOnClick = jest.fn();

const renderComponent = (isExpanded: boolean, isSection: boolean,  hasPath: boolean, ignoreIsSelected: boolean) => {
  const path = hasPath ? '/path' : '';
  render(
    <MemoryRouter>
      <SideBarElement label='sample text' isSection={isSection} icon={{ iconName: 'alarm' } as IIconNoColorNoSize} path={path} onClick={mockOnClick} isExpanded={isExpanded} ignoreIsSelected={ignoreIsSelected} />
    </MemoryRouter>
  );
}

describe('Tests for SideBarElement Component', () => {
  test('ID: F.SideBarElement.1 - The SideBarElement component renders correctly', () => {
    renderComponent(false, true, true, false);
    expect(screen.getByTestId('side-bar-element__container__content')).toBeInTheDocument();
  });

  test('ID: F.SideBarElement.2 - The SideBarElement component renders correctly when expanded', () => {
    renderComponent(true, true, false, false);
    expect(screen.getByTestId('side-bar-element__container__content')).toBeInTheDocument();
    expect(screen.getByTestId('side-bar-element__container__label')).toBeInTheDocument();
  });

  test('ID: F.SideBarElement.3 - The SideBarElement component navigates to the correct URL when clicked', () => {
    renderComponent(false, false, true, false);
    const sideBarElement = screen.getByTestId('side-bar-element-sample text');
    expect(sideBarElement).toBeInTheDocument();
    expect(sideBarElement).toHaveAttribute('href', '/path');
  });

  test('ID: F.SideBarElement.4 - The SideBarElement component calls the onClick function when clicked', () => {
    renderComponent(false, false, false, false);
    const sideBarElement = screen.getByTestId('side-bar-element__no-link');
    fireEvent.click(sideBarElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('ID: F.SideBarElement.5 - The SideBarElement component has the correct color when in its path', async () => {
    renderComponent(true, true, true, true);
    const coloredElement = screen.getByTestId('side-bar-element-sample text');
    expect(coloredElement).toBeInTheDocument();
    fireEvent.click(coloredElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  test('ID: F.SideBarElement.6 - The SideBarElement component has the correct color when not in its path', async () => {
    renderComponent(true, true, true, false);
    const coloredElement = screen.getByTestId('side-bar-element-sample text');
    expect(coloredElement).toBeInTheDocument();
    fireEvent.click(coloredElement);
    expect(mockOnClick).toHaveBeenCalled();

    expect(screen.getByTestId('alarm')).toBeInTheDocument();
  });
});