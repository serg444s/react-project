import { useState } from 'react';
import css from './SearchBar.module.css';

export const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = evt => {
    setInputValue(evt.target.value);
  };

  return (
    <div className={css.container}>
      <input
        type="text"
        className={css.input}
        value={inputValue}
        onChange={handleChange}
      />
      <p>{inputValue}</p>
    </div>
  );
};
