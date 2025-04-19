import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contacto" id="contacto">
      <h2 className="titulo-contacto">Contáctanos</h2>
      <p className="subtexto">¿Tienes una oferta que no podamos rechazar? Escríbenos.</p>

      <form className="formulario-contacto">
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea placeholder="Tu mensaje..." required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
};

export default Contacto;
