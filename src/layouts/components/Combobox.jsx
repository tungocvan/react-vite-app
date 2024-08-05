import React, { useState } from 'react';

const Combobox = () => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const countries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Mexico',
    'Japan'
  ];

  const handleSelectCountry = (country) => {
    setInputValue(country);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <label
        htmlFor="combobox-input"
        className="block text-gray-700 text-sm font-medium mb-1"
      >
        Assigned to
      </label>
      <div className="flex items-center">
        <input
          id="combobox-input"
          role="combobox"
          type="text"
          aria-expanded={isOpen}
          aria-autocomplete="list"
          aria-labelledby="combobox-label combobox-button"
          className="border rounded-lg px-4 py-2 w-full"
          value={inputValue}
          readOnly
          onClick={() => setIsOpen(true)}
        />
        <button
          id="combobox-button"
          type="button"
          tabIndex="-1"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          className="ml-2 p-2 rounded-lg border border-gray-300"
          onClick={() => setIsOpen(!isOpen)}
          aria-labelledby="combobox-label combobox-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      {isOpen && (
        <ul
          role="listbox"
          className="absolute mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-60 overflow-auto"
        >
          {countries.map((country, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 py-2 flex items-center ${
                inputValue === country ? 'bg-gray-100' : ''
              }`}
              onClick={() => handleSelectCountry(country)}
            >
              {inputValue === country && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-500 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Combobox;
