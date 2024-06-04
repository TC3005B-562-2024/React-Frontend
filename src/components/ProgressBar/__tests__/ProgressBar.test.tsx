import { render, screen, cleanup } from '@testing-library/react';
import ProgressBar from '../ProgressBar'; 

afterEach(() => {
    cleanup();
  });

describe('ProgressBar Component Tests', () => {
  test('renders with correct progress, color, and label', () => {
    render(<ProgressBar progress={65} color="yellow" label="Task Progress" />);

    // Check label and value
    expect(screen.getByText('Task Progress')).toBeInTheDocument();
    expect(screen.getByText('65%')).toBeInTheDocument();

    // Check if bar width matches progress
    const progressBar = screen.getByTestId('progress-bar'); // Add data-testid to your bar element
    expect(progressBar).toHaveStyle(`width: 65%`);

    // Check if color classes are applied correctly (you'll need to adjust based on your actual CSS classes)
    expect(progressBar).toHaveClass('bg-aci-yellow'); // Example based on your code structure
    expect(screen.getByText('65%')).toHaveClass('text-aci-yellow'); 
  });

  test('defaults to appropriate color based on progress', () => {
    render(<ProgressBar progress={25} label="Low Progress" />);
    expect(screen.getByTestId('progress-bar')).toHaveClass('bg-aci-red'); // Should be red for < 40%

    render(<ProgressBar progress={95} label="High Progress" />);
    expect(screen.getByTestId('progress-bar')).toHaveClass('bg-aci-green'); // Should be green for >= 80%
  });

  test('renders with shadow by default', () => {
    render(<ProgressBar progress={50} label="Default Shadow" />);
    expect(screen.getByTestId('progress-bar-container')).toHaveClass('progress-bar--shadow'); 
  });

  test('renders without shadow when hasShadow is false', () => {
    render(<ProgressBar progress={50} label="No Shadow" hasShadow={false} />);
    expect(screen.getByTestId('progress-bar-container')).not.toHaveClass('progress-bar--shadow');
  });

  test('throws error if progress is outside 0-100 range', () => {
    expect(() => render(<ProgressBar progress={-10} label="Invalid" />)).toThrow(
      'Progress value must be between 0 and 100'
    );
    expect(() => render(<ProgressBar progress={120} label="Invalid" />)).toThrow(
      'Progress value must be between 0 and 100'
    );
  });

  test('renders correctly for edge cases (0% and 100%)', () => {
    render(<ProgressBar progress={0} label="Empty" />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveStyle('width: 0%');
    expect(screen.getByText('0%')).toBeInTheDocument();

    render(<ProgressBar progress={100} label="Full" />);
    const fullProgressBar = screen.getByTestId('progress-bar');
    expect(fullProgressBar).toHaveStyle('width: 100%');
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  test('throws error if color is invalid', () => {
    // Note: This assumes you have strict color validation in your component
    expect(() => render(<ProgressBar progress={50} color="red" label="Invalid Color" />)).toThrow(
      // Replace with the exact error message from your component
      'Invalid color. Allowed colors are green, yellow, and red.' 
    );
  });

  test('handles null or undefined label gracefully', () => {
    // Expect a default label or empty space if label is not provided
    render(<ProgressBar progress={75} label={''} />);
    const labelElement = screen.queryByTestId('progress-bar-label'); // Using queryByTestId to avoid errors if the element is not found
    expect(labelElement).toBeNull(); // Or expect it to have a default value
  });

  test('does not render if progress value is NaN', () => {
    // Expect the component to not render anything
    const { container } = render(<ProgressBar progress={NaN} label="NaN Progress" />);
    expect(container).toBeEmptyDOMElement();
  });
});
