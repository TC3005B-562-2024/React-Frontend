import React, { useState } from 'react';
import { SearchBarProps } from './types';
import { Icon } from '../Icon';
import { IconNames } from '../Icon/types';

/**
 * SearchBar component for searching through data like a Google search bar.
 * Triggers onSearch function when the user presses enter.
 */
const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
      
        try {
          // Normalize the input (remove diacritics/accents)
          const normalizedInput = event.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      
          // Create a regex that matches each character with its possible diacritics
          const regexPattern = normalizedInput.split('').map(char => {
            switch (char.toLowerCase()) {
              case 'a': return "[aáäàâ]";
              case 'e': return "[eéèêë]";
              case 'i': return "[iíìîï]";
              case 'o': return "[oóòôö]";
              case 'u': return "[uúùûü]";
              default: return char;
            }
          }).join('');
          
          const regex = new RegExp(regexPattern, 'i');
          onSearch(regex.source); // Pass the string representation of the regex
        } catch (error) {
          // Handle invalid regular expressions
          console.error('Invalid regular expression:', error);
        }
      };
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSearch(inputValue);
        }
    };
    const performSearch = () => {
        try {
          const regex = new RegExp(inputValue, 'i'); // Case-insensitive search.
          onSearch(regex.source); 
        } catch (error) {
          // Handle invalid regular expressions (e.g., notify the user)
          console.error('Invalid regular expression:', error);
          // Optionally, provide feedback in the UI or fall back to a simple text search
        }
      };

    return (
        <div className="w-full" data-testid="search-bar">
            <div className='flex items-center border border-gray-300 rounded-lg focus-within:border-aci-orange'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder={placeholder}
                    className="text-text w-full p-2 focus:outline-none rounded-l-lg pr-10"
                />
                <button
                    className="relative flex justify-center items-center h-6 w-6 shadow bg-aci-orange rounded mr-2 hover:bg-aci-orange-dark"
                    onClick={performSearch}
                >
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Icon iconName={IconNames.Search} color='white' />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
