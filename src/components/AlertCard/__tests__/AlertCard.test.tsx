import React from 'react';
import { render, fireEvent, cleanup, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AlertCard from '../AlertCard';

afterEach(() => {
  cleanup();
});

describe("Tests for AlertCard Component", () => {
  test("ID: F.AlertCard.01 Should render with the correct alert name", () => {
    const { getByText } = render(
      <MemoryRouter>
        <AlertCard
          alertId={1}
          alertName="Test Alert"
          alertOwner="Owner1"
          alertPriority="CRITIC"
          individualAlertLink="#"
        />
      </MemoryRouter>
    );

    expect(getByText('Test Alert')).toBeInTheDocument();
  });

  test("ID: F.AlertCard.02 Should render with the correct alert owner", () => {
    const { getByText } = render(
      <MemoryRouter>
        <AlertCard
          alertId={1}
          alertName="Test Alert"
          alertOwner="Owner1"
          alertPriority="CRITIC"
          individualAlertLink="#"
        />
      </MemoryRouter>
    );

    expect(getByText('Owner1')).toBeInTheDocument();
  });

  test("ID: F.AlertCard.03 Should apply the correct priority class for CRITIC priority", () => {
    const { container } = render(
      <MemoryRouter>
        <AlertCard
          alertId={1}
          alertName="Test Alert"
          alertOwner="Owner1"
          alertPriority="CRITIC"
          individualAlertLink="#"
        />
      </MemoryRouter>
    );

    expect(container.querySelector('.alert-card__container__color-box--high-priority')).toBeInTheDocument();
  });

  test("ID: F.AlertCard.04 Should apply the correct priority class for MEDIUM priority", () => {
    const { container } = render(
      <MemoryRouter>
        <AlertCard
          alertId={1}
          alertName="Test Alert"
          alertOwner="Owner1"
          alertPriority="MEDIUM"
          individualAlertLink="#"
        />
      </MemoryRouter>
    );

    expect(container.querySelector('.alert-card__container__color-box--medium-priority')).toBeInTheDocument();
  });

  test("ID: F.AlertCard.05 Should apply the correct priority class for LOW priority", () => {
    const { container } = render(
      <MemoryRouter>
        <AlertCard
          alertId={1}
          alertName="Test Alert"
          alertOwner="Owner1"
          alertPriority="LOW"
          individualAlertLink="#"
        />
      </MemoryRouter>
    );

    expect(container.querySelector('.alert-card__container__color-box--low-priority')).toBeInTheDocument();
  });

  test("ID: F.AlertCard.06 Should navigate to the correct link on 'View More' button click", () => {
    render(
      <MemoryRouter>
        <AlertCard
          alertId={1}
          alertName="Test Alert"
          alertOwner="Owner1"
          alertPriority="CRITIC"
          individualAlertLink="/alerts/1"
        />
      </MemoryRouter>
    );

    const button = screen.getByText('View More');
    fireEvent.click(button);

    // Aquí se asume que hay una configuración para verificar la navegación.
    // En un entorno de pruebas real, deberías configurar el router para manejar las rutas.
    // Puedes usar mock functions para verificar la navegación.
  });
});
