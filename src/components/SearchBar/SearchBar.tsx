import React, { useState } from 'react';
import { SearchBarProps } from './types';
import { Icon } from '../Icon';

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
        <div className="p-4 relative">
            <div className='flex items-center border border-gray-300 rounded-lg focus-within:border-blue-500'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    className="w-full p-2 focus:outline-none rounded-lg"
                />
                <div className="flex justify-center items-center h-4 w-4 absolute right-6" style={{ width: '20px', height: '20px' }}>
                    <Icon iconName={'search'} color='black'/>
                </div>
             </div>
        </div>
    );
};

export default SearchBar;