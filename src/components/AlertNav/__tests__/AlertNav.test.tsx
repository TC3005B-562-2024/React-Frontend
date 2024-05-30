import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Importa MemoryRouter
import AlertNav from '../AlertNav';

afterEach(() => {
  cleanup();
});

describe("Tests for AlertNav Component", () => {
  test("Should render with the correct instance ID", () => {
    const { getByText } = render(
      <MemoryRouter>
        <AlertNav instanceId="Instance123" alertsExists={false} />
      </MemoryRouter>
    );

    expect(getByText('INSTANCE:')).toBeInTheDocument();
    expect(getByText('Instance123')).toBeInTheDocument();
  });

  test("Should have bounce class if alerts exist", () => {
    const { container } = render(
      <MemoryRouter>
        <AlertNav instanceId="Instance123" alertsExists={true} />
      </MemoryRouter>
    );

    expect(container.querySelector('.alert-nav__container__icon-container--bounce')).toBeInTheDocument();
  });

  test("Should not have bounce class if alerts do not exist", () => {
    const { container } = render(
      <MemoryRouter>
        <AlertNav instanceId="Instance123" alertsExists={false} />
      </MemoryRouter>
    );

    expect(container.querySelector('.alert-nav__container__icon-container--bounce')).not.toBeInTheDocument();
  });

  test("Should navigate to /alerts on button click", () => {
    const history = {
      location: { pathname: '/' },
      push: jest.fn(),
    };
    const { getByRole } = render(
      <MemoryRouter>
        <AlertNav instanceId="Instance123" alertsExists={false} />
      </MemoryRouter>
    );

    const button = getByRole('button');
    fireEvent.click(button);

    // Comprueba si la función push se llama con la ruta /alerts
    expect(history.push).toHaveBeenCalledWith('/alerts');
  });
});
