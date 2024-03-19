import { useState } from 'react';
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import './App.css';
import Product from './Product';

export default function App() {
  // let clicks = 0;
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    // clicks = clicks + 1;
    setClicks(clicks + 1);
  };
  return (
    <div>
      <button onClick={handleClick}>Current: {clicks}</button>
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
    </div>
  );
}
