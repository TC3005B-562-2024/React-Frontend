import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import TrainingCardToggle from '../TrainingCardToggle';

afterEach(() => {
  cleanup();
});

describe("Tests for TrainingCardToggle Component", () => {
  test("ID: F.TCT.CompletionToggle - Changes completed state on button click", async () => {
    const { getByTestId } = render(<TrainingCardToggle label={'Test'} isComplete={false} />);
    const button = getByTestId('complete-button');

    expect(button.getAttribute('data-completed')).toBe('false');

    fireEvent.click(button);

    await waitFor(() => {
      expect(button.getAttribute('data-completed')).toBe('true');
    });
  });

  test("ID: F.TCT.LabelDisplay - Displays correct label data", async () => {
    const { getByTestId } = render(<TrainingCardToggle label={'Test'} isComplete={false} />);
    const component = getByTestId('training-card-toggle');

    expect(component.getAttribute('data-label')).toBe('Test');
  });

  test("ID: F.TCT.InitialState - Correctly sets initial state based on props", async () => {
    const { getByTestId } = render(<TrainingCardToggle label={'Test'} isComplete={true} />);
    const component = getByTestId('training-card-toggle');
    const button = getByTestId('complete-button');

    expect(component.getAttribute('data-is-complete')).toBe('true');
    expect(button.getAttribute('data-completed')).toBe('true');
  });
});