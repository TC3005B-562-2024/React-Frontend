import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { SearchBarProps } from '../types';
import { IconNames } from '../../Icon/types';

const renderSearchBar = (props: Partial<SearchBarProps> = {}) => {
  const defaultProps: SearchBarProps = {
    placeholder: 'Search...',
    onSearch: jest.fn(),
  };
  return render(<SearchBar {...defaultProps} {...props} />);
};

describe('SearchBar Component', () => {
  test('ID: F.SearchBar.1 - Should render the SearchBar component', () => {
    const { getByPlaceholderText } = renderSearchBar();
    expect(getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  test('ID: F.SearchBar.2 - Should update input value on change', () => {
    const { getByPlaceholderText } = renderSearchBar();
    const input = getByPlaceholderText('Search...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('ID: F.SearchBar.3 - Should call onSearch with the input value when Enter key is pressed', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = renderSearchBar({ onSearch: onSearchMock });
    const input = getByPlaceholderText('Search...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'aeiou, AEIOU' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(onSearchMock).toHaveBeenCalled();
  });

  
  test('ID: F.SearchBar.4 - Should handle invalid regular expression gracefully', () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText } = renderSearchBar({ onSearch: onSearchMock });
    const input = getByPlaceholderText('Search...') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '[' } });

    expect(onSearchMock).not.toHaveBeenCalled();
  });

  test('ID: F.SearchBar.5 - Should handle invalid regular expression gracefully', () => {
    const { getByPlaceholderText } = renderSearchBar();
    const input = getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'aeiou, AEIOUççç[' } });
    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();

    searchButton.click(); 
  });

  test('ID: F.SearchBar.6 - Should handle valid regular expression gracefully', () => {
    const { getByPlaceholderText } = renderSearchBar();
    const input = getByPlaceholderText('Search...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'aeiou, AEIOUççç' } });
    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();

    searchButton.click(); 
  });
});
