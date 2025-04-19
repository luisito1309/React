import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">☕ CoffeeApp</div>
      <ul className="navbar-links">
        <li><a href="#Home">Inicio</a></li>
        <li><a href="#Productos">Productos</a></li>
        <li><a href="#AcercaDe">Nosotros</a></li>
        <li><a href="#Contacto">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
