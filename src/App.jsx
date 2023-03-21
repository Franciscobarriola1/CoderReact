import React from 'react';
import NavBar from './components/Navbar';
import CartWidget from './components/CartWidget';
import itemListConteiner from './components/ItemListConteiner';

const App = () => {
  return (
    <div>
      
      <NavBar   imagen='src/assets/Pelota.jpg' />
      <CartWidget icono="src/assets/carrito.svg"/>
      
      <itemListConteiner texto = "Mensaje" />
    </div>
  )
}

export default App
