import { useState } from 'react';
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import './App.css';
import Product from '../Product/Product';
import { LoginForm } from '../LoginForm/LoginForm';
import { ClickCounter } from '../ClickCounter';
import { TwoClickCounter } from '../TwoClickCounter';
import { BookList } from '../BookList/BookList';
import favoriteBooks from '../../data/favouriteBooks.json';
import { ButtonCurrentClick } from '../ButtonCurrentClick/ButtonCurrentClick';
import { SearchBar } from '../SearchBar/SearchBar';
import CheckBox from '../CheckBox/CheckBox';

export function App() {
  // let clicks = 0;
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const [twoClicks, setTwoClicks] = useState(0);
  const handleTwoClicks = () => {
    // clicks = clicks + 1;
    setTwoClicks(twoClicks + 1);
  };

  const handleLogin = userData => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = evt => {
    setHasAccepted(evt.target.checked);
  };

  return (
    <div>
      <ButtonCurrentClick />
      <button onClick={handleToggle}>{isOpen ? 'Hide' : 'Show'}</button>
      <p>{isOpen && 'Now you can see me!'}</p>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Product name="Test Tacos" price={0.99} />

      <BookList books={favoriteBooks} />

      <ClickCounter />
      <ClickCounter />

      <div>
        <TwoClickCounter value={twoClicks} onUpdate={handleTwoClicks} />
        <TwoClickCounter value={twoClicks} onUpdate={handleTwoClicks} />
      </div>

      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onLogin={handleLogin} />

      <SearchBar />
      <CheckBox hasAccepted={hasAccepted} handleChange={handleChange} />
    </div>
  );
}
