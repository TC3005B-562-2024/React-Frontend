import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import HistoryAgent from '../HistoryAgent';
import { Icon } from '../../Icon';
import { IIconNoColorNoSize, IconNames } from "../../Icon/types";

// Mock del componente Icon
jest.mock('../../Icon', () => ({
  Icon: ({ iconName }: IIconNoColorNoSize) => <div data-testid="icon">{iconName}</div>,
}));

afterEach(() => {
  cleanup();
});

describe("Tests for HistoryAgent Component", () => {
  test("ID: HA.1 - Should display the log and description correctly", () => {
    const { getByText } = render(
      <HistoryAgent
        log="Test Log"
        date={new Date('2024-05-28T12:00:00')}
        icon={{ iconName: IconNames.CheckCircle }}
        description="Test Description"
        color="green"
      />
    );

    expect(getByText('Test Log')).toBeInTheDocument();
  });

  test("ID: HA.2 - Should expand and show the description on click", () => {
    const { getByText, getByTestId } = render(
      <HistoryAgent
        log="Test Log"
        date={new Date('2024-05-28T12:00:00')}
        icon={{ iconName: IconNames.Cancel }}
        description="Test Description"
        color="green"
      />
    );

    const container = getByText('Test Log').closest('.history-agent__container');
    fireEvent.click(container!);

    expect(getByText('Test Description')).toBeVisible();
  });

  test("ID: HA.3 - Should display the correct date format", () => {
    const date = new Date('2024-05-28T12:00:00');
    const { getByText } = render(
      <HistoryAgent
        log="Test Log"
        date={date}
        icon={{ iconName: IconNames.CheckCircle }}
        description="Test Description"
        color="green"
      />
    );

    const formattedDate = date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    });

    expect(getByText(formattedDate)).toBeInTheDocument();
  });

  test("ID: HA.4 - Should apply the correct styles based on color prop", () => {
    const { getByTestId, rerender } = render(
      <HistoryAgent
        log="Test Log"
        date={new Date('2024-05-28T12:00:00')}
        icon={{ iconName: IconNames.CheckCircle }}
        description="Test Description"
        color="green"
      />
    );

    let iconContainer = getByTestId('icon').closest('.history-agent__icon-container');
    expect(iconContainer).toHaveClass('history-agent__icon-container--green');

    rerender(
      <HistoryAgent
        log="Test Log"
        date={new Date('2024-05-28T12:00:00')}
        icon={{ iconName: IconNames.Cancel }}
        description="Test Description"
        color="red"
      />
    );

    iconContainer = getByTestId('icon').closest('.history-agent__icon-container');
    expect(iconContainer).toHaveClass('history-agent__icon-container--red');
  });

  test("ID: HA.5 - Should expand and show the description on click", () => {
    const { getByText } = render(
      <HistoryAgent
        log="Test Log"
        date={new Date('2024-05-28T12:00:00')}
        icon={{ iconName: IconNames.CheckCircle }}
        description="Test Description"
        color="green"
      />
    );
  
    const logElement = getByText('Test Log');
    fireEvent.click(logElement);
  
    expect(getByText('Test Description')).toBeInTheDocument();
  });
  
  test("ID: HA.6 - Should apply the correct styles based on color prop", () => {
    const { getByTestId, rerender } = render(
      <HistoryAgent
        log="Test Log"
        date={new Date('2024-05-28T12:00:00')}
        icon={{ iconName: IconNames.CheckCircle }}
        description="Test Description"
        color="green"
      />
    );
  
    let iconContainer = getByTestId('icon').closest('.history-agent__icon-container');
    expect(iconContainer).toHaveClass('history-agent__icon-container--green');
  
    rerender(
      <HistoryAgent
        log="Test Log"
        date={new Date('2024-05-28T12:00:00')}
        icon={{ iconName: IconNames.Cancel }}
        description="Test Description"
        color="red"
      />
    );
  
    iconContainer = getByTestId('icon').closest('.history-agent__icon-container');
    expect(iconContainer).toHaveClass('history-agent__icon-container--red');
  });
});