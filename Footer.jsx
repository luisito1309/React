import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 CoffeeApp Mafia Edition. Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="#terminos">Términos</a>
        <a href="#privacidad">Privacidad</a>
        <a href="#contacto">Contacto</a>
      </div>
    </footer>
  );
};

export default Footer;
