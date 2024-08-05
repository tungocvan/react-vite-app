import { useState, useEffect } from 'react';

export default function useLS(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error(`Error parsing localStorage value for key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value !== undefined) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting localStorage value for key "${key}":`, error);
      }
    }
  }, [value, key]);


  const deleteItem = () => {
    try {
      localStorage.removeItem(key);
      setValue(undefined); // Clear the value in the state as well
    } catch (error) {
      console.error(`Error removing localStorage value for key "${key}":`, error);
    }
  };

  return [value, setValue,deleteItem];
}
