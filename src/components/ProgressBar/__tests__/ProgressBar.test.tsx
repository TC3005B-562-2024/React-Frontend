import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import ProgressBar from '../ProgressBar'; 

afterEach(() => {
  cleanup();
});

describe('ProgressBar Component Tests', () => {
  test('ID: F.ProgressBar.1 - renders with correct progress, color, and label', () => {
    render(<ProgressBar progress={65} color="yellow" label="Task Progress" />);

    // Check label and value
    const label = screen.getByText('Task Progress');
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("data-testid", "progress-bar-label"); // Test ID for the label
    const value = screen.getByText('65%');
    expect(value).toBeInTheDocument();
    expect(value).toHaveAttribute("data-testid", "progress-bar-value"); // Test ID for the value

    // Check if bar width matches progress
    const progressBarFill = screen.getByTestId('progress-bar-fill'); 
    expect(progressBarFill).toHaveStyle(`width: 65%`);

    // Check if color classes are applied correctly
    expect(progressBarFill).toHaveClass('bg-aci-yellow'); 
    expect(screen.getByText('65%')).toHaveClass('text-aci-yellow');
  });

  test('ID: F.ProgressBar.2 - defaults to appropriate color based on progress', () => {
    const { rerender } = render(<ProgressBar progress={25} label="Low Progress" />);
    expect(screen.getByTestId('progress-bar-fill')).toHaveClass('bg-aci-red'); 

    rerender(<ProgressBar progress={95} label="High Progress" />); 
    expect(screen.getByTestId('progress-bar-fill')).toHaveClass('bg-aci-green'); 
  });

  test('ID: F.ProgressBar.3 - renders with shadow by default', () => {
    render(<ProgressBar progress={50} label="Default Shadow" />);
    expect(screen.getByTestId('progress-bar-container')).toHaveClass('progress-bar--shadow'); 
  });

  test('ID: F.ProgressBar.4 - renders without shadow when hasShadow is false', () => {
    render(<ProgressBar progress={50} label="No Shadow" hasShadow={false} />);
    const progressBarContainer = screen.getByTestId('progress-bar-container');
    expect(progressBarContainer).not.toHaveClass('progress-bar--shadow');
  });

  test('ID: F.ProgressBar.5 - does not render if progress is outside 0-100 range', () => {
    const { container: container1 } = render(<ProgressBar progress={-10} label="Invalid" />);
    expect(container1.firstChild).toBeNull();

    const { container: container2 } = render(<ProgressBar progress={120} label="Invalid" />);
    expect(container2.firstChild).toBeNull();
  });

  test('ID: F.ProgressBar.6 - renders correctly for edge cases (0% and 100%)', () => {
    const { rerender } = render(<ProgressBar progress={0} label="Empty" />);
    const progressBar = screen.getByTestId('progress-bar-fill');
    expect(progressBar).toHaveStyle('width: 0%');
    expect(screen.getByText('0%')).toBeInTheDocument();

    rerender(<ProgressBar progress={100} label="Full" />); 
    const fullProgressBar = screen.getByTestId('progress-bar-fill'); 
    expect(fullProgressBar).toHaveStyle('width: 100%');
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  test('ID: F.ProgressBar.7 - defaults to appropriate color if color is invalid', () => {
    render(<ProgressBar progress={50} color="purple" label="Invalid Color" />);
    expect(screen.getByTestId('progress-bar-fill')).toHaveClass('bg-aci-yellow');
  });

  test('ID: F.ProgressBar.8 - handles null or undefined label gracefully', () => {
    render(<ProgressBar progress={75} label={""} />);
    const labelElement = screen.queryByTestId('progress-bar-label');
    expect(labelElement).toBeNull(); 
  });

  test('ID: F.ProgressBar.9 - does not render if progress value is NaN', () => {
    const { container } = render(<ProgressBar progress={NaN} label="NaN Progress" />);
    expect(container).toBeEmptyDOMElement();
  });
});