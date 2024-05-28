import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react';
import IndividualTrainingExpansionPanel from '../IndividualTrainingExpansionPanel';
import { TrainingCardToggle } from '../../TrainingCardToggle';

afterEach(() => {
    cleanup();
});

describe("Tests for IndividualTrainingExpansionPanel Component", () => {
    test("Should change its completion porcentage value correctly on click to finish a task", async () => {
        const { getByTestId } = render(<IndividualTrainingExpansionPanel title={'Tests'} trainings={[
            { label: 'Test', isComplete: false },
        ]} />);

        const expansionPanel = getByTestId('expansion-panel');
        expect(expansionPanel.getAttribute('data-porcentage')).toBe('0');
    });
    test("Should change its completion porcentage value correctly on click to finish a task 2", async () => {
        const { getByTestId } = render(<IndividualTrainingExpansionPanel title={'Tests'} trainings={[
            { label: 'Test', isComplete: false },
            { label: 'Test', isComplete: true },
        ]} />);

        const expansionPanel = getByTestId('expansion-panel');
        expect(expansionPanel.getAttribute('data-porcentage')).toBe('50');
    });
    test("Should change its completion porcentage value correctly on click to finish a task 3", async () => {
        const { getByTestId } = render(<IndividualTrainingExpansionPanel title={'Tests'} trainings={[
            { label: 'Test', isComplete: true },
            { label: 'Test', isComplete: true },
        ]} />);

        const expansionPanel = getByTestId('expansion-panel');
        expect(expansionPanel.getAttribute('data-porcentage')).toBe('100');
    });
});
