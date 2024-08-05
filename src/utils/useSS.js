import { useState, useEffect } from 'react';

export default function useSS(key, defaultValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = sessionStorage.getItem(key);
      console.log('storedValue:',storedValue);
      return (storedValue!==null || storedValue !== '') ? JSON.parse(storedValue) : defaultValue;
    } catch (error) {
      console.error(`Error parsing sessionStorage value for key "${key}":`, error);
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value !== undefined || value !== '') {
      try {
        sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error setting sessionStorage value for key "${key}":`, error);
      }
    }
  }, [value, key]);

  const deleteItem = () => {
    try {
      sessionStorage.removeItem(key);
      setValue(undefined); // Clear the value in the state as well
    } catch (error) {
      console.error(`Error removing sessionStorage value for key "${key}":`, error);
    }
  };

  return [value, setValue, deleteItem];
}
