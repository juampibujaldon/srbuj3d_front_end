import React from "react";
import './Home.css'; // Import the CSS file for styling
function Home() {
  return (
    <>
      <header>
        <div className="container">
          <h1 className="logo">SRBUJ 3D</h1>
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Catálogo</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Diseños 3D Personalizados</h2>
          <p>Crea, personaliza e imprime lo que imagines.</p>
          <a href="#" className="btn">Ver productos</a>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/400x400?text=Producto+3D" alt="Producto destacado" />
        </div>
      </section>

      <section className="highlights">
        <h3>Destacados de la Semana</h3>
        <div className="cards">
          <div className="card">
            <img src="https://via.placeholder.com/250x250?text=Llaveros" alt="Llaveros" />
            <h4>Llaveros</h4>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250x250?text=Lámparas" alt="Lámparas" />
            <h4>Lámparas LED</h4>
          </div>
          <div className="card">
            <img src="https://via.placeholder.com/250x250?text=Decoración" alt="Decoración" />
            <h4>Decoración</h4>
          </div>
        </div>
      </section>

      <section className="call-to-action">
        <h3>¿Querés algo único?</h3>
        <p>Mandanos tu diseño o idea y lo imprimimos por vos.</p>
        <a href="#" className="btn">Solicitar presupuesto</a>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 SRBUJ 3D | Hecho en Argentina</p>
        </div>
      </footer>
    </>
  );
}

export default Home;