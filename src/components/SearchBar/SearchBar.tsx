import React, { useState } from 'react';
import { SearchBarProps } from './types';
import { Icon } from '../Icon';

/**
 * SearchBar component for searching through data like a Google search bar.
 * Triggers onSearch function when the user presses enter.
 */
const SearchBar: React.FC<SearchBarProps> = ({ placeholder = "Search...", onSearch }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            onSearch(inputValue);
        }
    };

    return (
        <div className="w-full">
            <div className='flex items-center border border-gray-300 rounded-lg focus-within:border-blue-500'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder={placeholder}
                    className="w-full p-2 focus:outline-none rounded-l-lg pr-10"
                />
                <button 
                    className="relative flex justify-center items-center h-5 w-5 bg-aci-orange rounded mr-2 hover:bg-aci-orange-dark"
                    onClick={() => onSearch(inputValue)}
                >
                    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Icon iconName={'search'} color='white'/>
                </div>
             </button>
        </div>
    </div>
    );
};

export default SearchBar;