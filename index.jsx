import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AcercaDe from './components/AcercaDe';
import Contacto from './components/Contacto';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
      <Home />
      <Contacto />
      <AcercaDe />
    <Footer />
  </React.StrictMode>
);
