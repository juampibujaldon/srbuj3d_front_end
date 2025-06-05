import React, { useState, useRef } from "react";
import './Home.css';
import worldcupKeychain from '../images/worldcup keychain.jpeg';
import purplevase from '../images/purplevase.jpeg';
import organicer from '../images/organicer.jpeg';
import srbuj_logo from '../images/srbuj_logo.svg';
import lobosSTL from '../images/lobosSTL.jpeg';
import mapamundiLOWPOLY from '../images/mapamundiLOWPOLY.jpeg';
import pokemonchess from '../images/pokemonchess.jpeg';
import onimask from '../images/onimask.jpeg';
import girl from '../images/girl.jpeg';
import { CgDarkMode } from "react-icons/cg";


function Home() {
  const [search, setSearch] = useState('');
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState(["octopus", "organicer", "makeup", "vase"]);
  const inputRef = useRef(null);

  const handleFocus = () => setShowHistory(true);
  const handleBlur = () => setTimeout(() => setShowHistory(false), 150); // delay for click

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search && !history.includes(search)) {
      setHistory([search, ...history].slice(0, 5));
    }
    setShowHistory(false);
    setSearch('');
  };

  const handleHistoryClick = (item) => {
    setSearch(item);
    setShowHistory(false);
    inputRef.current.blur();
  };

  return (
    <>
      <header>
        <div className="navbar">
          <div className="navbar-logo">
            <img src={srbuj_logo} alt="Logo SRBUJ" className="logo" />
          </div>
          <form className="navbar-search" onSubmit={handleSubmit} autoComplete="off">
            <input
              ref={inputRef}
              type="text"
              placeholder="Buscar..."
              aria-label="Buscar"
              value={search}
              onChange={e => setSearch(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button type="submit">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" stroke="#555" strokeWidth="2"/>
                <line x1="16" y1="16" x2="21" y2="21" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            {showHistory && (
              <div className="search-history-dropdown">
                <div className="search-history-title">Recently Searched:</div>
                <ul>
                  {history.map((item, idx) => (
                    <li key={idx} onMouseDown={() => handleHistoryClick(item)}>
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" style={{marginRight: 6}}>
                        <circle cx="11" cy="11" r="7" stroke="#3386ff" strokeWidth="2"/>
                        <line x1="16" y1="16" x2="21" y2="21" stroke="#3386ff" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </form>
          <nav>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Catálogo</a></li>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Vender</a></li>
                          <button
              className="dark-mode-toggle"
              onClick={() => document.body.classList.toggle('dark-mode')}
              type="button"
            >
              <CgDarkMode />
            </button>
            </ul>
          </nav>
        </div>
      </header>

<section className="hero">
  <div className="hero-content">
    <h2>Diseños 3D Personalizados</h2>
    <p>Crea, personaliza e imprimí lo que imaginás.</p>
    <a href="#" className="btn">Ver productos</a>
  </div>
  <div className="hero-gallery">
    <div className="image-container">
      <img src={lobosSTL} alt="Lobos STL" />
    </div>
    <div className="image-container">
      <img src={mapamundiLOWPOLY} alt="Mapa Mundi Low Poly" />
    </div>
    <div className="image-container">
      <img src={pokemonchess} alt="Pokemon Chess" />
    </div>
    <div className="image-container">
      <img src={onimask} alt="Oni Mask" />
    </div> 
    <div className="image-container">
      <img src={girl} alt="Girl STL" />
    </div>   
  </div>
</section>

      <section className="highlights">
        <h3>Destacados de la Semana</h3>
        <div className="cards">
          <div className="card">
            <div className="image-container">
              <img src={worldcupKeychain} alt="Llaveros" />
            </div>
            <h4>Llaveros</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src={purplevase} alt="Jarrón violeta" />
            </div>
            <h4>Jarrón</h4>
          </div>
          <div className="card">
            <div className="image-container">
              <img src={organicer} alt="Organizador de escritorio" />
            </div>
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