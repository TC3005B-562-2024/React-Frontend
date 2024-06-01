import { render, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AlertExpansionPanel from '../AlertExpansionPanel';

afterEach(() => {
    cleanup();
});

describe("Tests for AlertExpansionPanel Component", () => {
    test("Should render with the correct priority text", () => {
        const { container } = render(
            <MemoryRouter>
                <AlertExpansionPanel alerts={[
                    { alertId: 1, alertName: 'Test Alert', alertOwner: 'Owner1', alertPriority: 'CRITIC', individualAlertLink: '#' },
                ]} />
            </MemoryRouter>
        );

        const priorityText = container.querySelector('.alert-expansion-panel__container__header__contents__text');
        expect(priorityText).not.toBeNull();
        if (priorityText) {
            expect(priorityText.textContent).toMatch(/Critical/i);
        }
    });

    test("Should toggle expanded state on click", () => {
        const { container } = render(
            <MemoryRouter>
                <AlertExpansionPanel alerts={[
                    { alertId: 1, alertName: 'Test Alert', alertOwner: 'Owner1', alertPriority: 'MEDIUM', individualAlertLink: '#' },
                ]} />
            </MemoryRouter>
        );

        const header = container.querySelector('.alert-expansion-panel__container__header');
        expect(header).not.toBeNull();
        if (header) {
            fireEvent.click(header); // Primer clic para expandir
            let cardsContainer = container.querySelector('.alert-expansion-panel__container__cards-container');
            expect(cardsContainer).toBeInTheDocument();

            fireEvent.click(header); // Segundo clic para contraer
            cardsContainer = container.querySelector('.alert-expansion-panel__container__cards-container');
            expect(cardsContainer).not.toBeInTheDocument();
        }
    });

    test("Should display correct alert cards when expanded", () => {
        const alerts = [
            { alertId: 1, alertName: 'Test Alert 1', alertOwner: 'Owner1', alertPriority: 'LOW' as 'LOW', individualAlertLink: '#' },
            { alertId: 2, alertName: 'Test Alert 2', alertOwner: 'Owner2', alertPriority: 'MEDIUM' as 'MEDIUM', individualAlertLink: '#' },
        ];
    
        const { container} = render(
            <MemoryRouter>
                <AlertExpansionPanel alerts={alerts} />
            </MemoryRouter>
        );
    
        const header = container.querySelector('.alert-expansion-panel__container__header');
        expect(header).not.toBeNull();
        if (header) {
            fireEvent.click(header);
    
            const cardsContainer = container.querySelector('.alert-expansion-panel__container__cards-container');
            expect(cardsContainer).toBeInTheDocument();
    
            const alertCards = container.querySelectorAll('.alert-card__priority-contents');
            expect(alertCards.length).toBe(2);
    
            alertCards.forEach((card, index) => {
                expect(card).toHaveTextContent(alerts[index].alertName);
            });
        }
    });
    
    
    
    
    
    
});
