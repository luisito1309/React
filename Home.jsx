import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Bienvenido a CoffeeApp Mafia Edition</h1>
        <p>Donde cada taza tiene poder. Únete a nuestra familia y saborea el respeto.</p>
        <a href="#productos" className="btn-mafia">Ver Productos</a>
      </div>
    </section>
  );
};

export default Home;
