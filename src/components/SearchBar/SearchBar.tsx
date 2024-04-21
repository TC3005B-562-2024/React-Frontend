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
        <div className="p-4 relative mx-auto" style={{ width: '750px' }}>
            <div className='flex items-center border border-gray-300 rounded-lg focus-within:border-blue-500'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder={placeholder}
                    className="w-full p-2 focus:outline-none rounded-l-lg pr-10"
                />
                <div className="relative flex justify-center items-center h-5 w-5 bg-yellow-500 rounded" style={{ marginLeft: '-2rem' }}>
                    <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
                        <Icon iconName={'search'} color='white'/>
                </div>
             </div>
        </div>
    </div>
    );
};

export default SearchBar;