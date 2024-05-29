import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import AlertExpansionPanel from '../AlertExpansionPanel';

afterEach(() => {
    cleanup();
});

describe("Tests for AlertExpansionPanel Component", () => {
    test("Should render with the correct priority text", () => {
        const { getByText } = render(
            <MemoryRouter>
                <AlertExpansionPanel alerts={[
                    { alertId: 1, alertName: 'Test Alert', alertOwner: 'Owner1', alertPriority: 'CRITIC', individualAlertLink: '#' },
                ]} />
            </MemoryRouter>
        );

        expect(getByText('Critical')).toBeInTheDocument();
    });

    test("Should toggle expanded state on click", () => {
        const { getByText, container } = render(
            <MemoryRouter>
                <AlertExpansionPanel alerts={[
                    { alertId: 1, alertName: 'Test Alert', alertOwner: 'Owner1', alertPriority: 'MEDIUM', individualAlertLink: '#' },
                ]} />
            </MemoryRouter>
        );

        const header = getByText('Medium');
        fireEvent.click(header);

        expect(container.querySelector('.alert-expansion-panel__container__cards-container')).toBeInTheDocument();

        fireEvent.click(header);
        expect(container.querySelector('.alert-expansion-panel__container__cards-container')).not.toBeInTheDocument();
    });

    test("Should display correct alert cards when expanded", () => {
        const { getByText, container } = render(
            <MemoryRouter>
                <AlertExpansionPanel alerts={[
                    { alertId: 1, alertName: 'Test Alert 1', alertOwner: 'Owner1', alertPriority: 'LOW', individualAlertLink: '#' },
                    { alertId: 2, alertName: 'Test Alert 2', alertOwner: 'Owner2', alertPriority: 'MEDIUM', individualAlertLink: '#' },
                ]} />
            </MemoryRouter>
        );

        const header = getByText('Low');
        fireEvent.click(header);

        expect(getByText('Test Alert 1')).toBeInTheDocument();
        expect(getByText('Test Alert 2')).toBeInTheDocument();
    });
});
