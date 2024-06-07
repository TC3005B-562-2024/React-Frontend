import { render, screen } from '@testing-library/react';
import { Icon } from "../../Icon";
import InsightDescription from "../InsightDescription";
import classNames from 'classnames';

jest.mock('../../Icon', () => ({
    Icon: jest.fn(() => null)
}));
jest.mock('classnames');

describe('InsightDescription', () => {
    it('renders without crashing', () => {
        render(<InsightDescription description="Sample description" priority="intervene" alertId={123} />);
        expect(screen.getByText(/Sample description/)).toBeInTheDocument();
    });

    it('displays the correct icon based on priority', () => {
        const priority = 'intervene';
        render(<InsightDescription description='Check priority Icon' priority={priority} alertId={124} />);
        expect(Icon).toHaveBeenCalledWith({
            iconName: 'sentiment_dissatisfied',
            color: 'red'
        }, {});
    });

    it('renders the correct icon when priority doesnt match', () => {
        const priority = 'undefinedPriority' as any;
        render(<InsightDescription description='Test default priority' priority={priority} alertId={1} />);
        expect(Icon).toHaveBeenCalledWith({
            iconName: 'warning',
            color: 'orange'
        }, {});
    });

    it('applies correct classes based on priority', () => {
        const priority = 'transfer';
        render(<InsightDescription description='Check class name' priority={priority} alertId={125} />);
        expect(classNames).toHaveBeenCalledWith({
            'insight-description__container__card--intervene': false,
            'insight-description__container__card--transfer': true,
            'insight-description__container__card--training': false,
        });
    });

    it('displays alert specific ID when provided', () => {
        render(<InsightDescription description="Check alert ID" priority="training" alertId={126} />);
        expect(screen.getByTestId("alert-id")).toHaveTextContent("Alert: 126");
    });
});
