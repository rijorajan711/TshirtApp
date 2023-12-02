import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CartContext from './Context/CartContext';
import WishlistContext from './Context/WishlistContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  
  <CartContext>

  <WishlistContext>
  <BrowserRouter>
     <App />
  </BrowserRouter>

  </WishlistContext>

  </CartContext>

  


 

);

