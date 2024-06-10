import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import IndividualTrainingExpansionPanel from '../IndividualTrainingExpansionPanel';
import { TrainingCardToggle } from '../../TrainingCardToggle';

afterEach(() => {
  cleanup();
});

describe("Tests for IndividualTrainingExpansionPanel Component", () => {
  test("ID: ITEP.1 - Should change its completion percentage value correctly on click to finish a task", async () => {
    const { getByTestId } = render(<IndividualTrainingExpansionPanel title={'Tests'} trainings={[
      { label: 'Test', isComplete: false },
    ]} />);

    const expansionPanel = getByTestId('expansion-panel');
    expect(expansionPanel.getAttribute('data-porcentage')).toBe('0');
  });

  test("ID: ITEP.2 - Should change its completion percentage value correctly with a mixed completion state", async () => {
    const { getByTestId } = render(<IndividualTrainingExpansionPanel title={'Tests'} trainings={[
      { label: 'Test', isComplete: false },
      { label: 'Test', isComplete: true },
    ]} />);

    const expansionPanel = getByTestId('expansion-panel');
    expect(expansionPanel.getAttribute('data-porcentage')).toBe('50');
  });

  test("ID: ITEP.3 - Should change its completion percentage value correctly when all tasks are complete", async () => {
    const { getByTestId } = render(<IndividualTrainingExpansionPanel title={'Tests'} trainings={[
      { label: 'Test', isComplete: true },
      { label: 'Test', isComplete: true },
    ]} />);

    const expansionPanel = getByTestId('expansion-panel');
    expect(expansionPanel.getAttribute('data-porcentage')).toBe('100');
  });
});