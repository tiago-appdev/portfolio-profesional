import { useEffect, useState } from 'react';
import './Navbar.css';
export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Cambia el estado si el scroll es mayor a 50 píxeles (puedes ajustar el valor)
      setScrolled(window.scrollY > 50);
    };

    // Escucha el evento de scroll
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const spanString = '<';
  const spanString2 = '/>';
  return (
    <div className={scrolled ? 'nav-container scrolled' : 'nav-container'}>
      <div className='header'>
        <p id='scrollToTop'>
          <span>{spanString}</span>
          TIAGO
          <span>{spanString2}</span>
        </p>
        {/* Navbar con las distintas secciones del sitio */}
        <nav className='nav-desktop'>
          <a href='#services'>Servicios</a>
          <a href='#skills'>Habilidades</a>
          <a href='#about'>Sobre mí</a>
          <a href='#contact'>Contacto</a>
        </nav>
        {/* Agrega el ícono de menú (hamburger) para celulares */}
        <div className='hamburger-menu' id='hamburgerMenu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Navbar mobile con las distintas secciones del sitio */}
        <nav className='nav-mobile' id='navMobile'>
          <a href='#services'>Servicios</a>
          <a href='#skills'>Habilidades</a>
          <a href='#about'>Sobre mí</a>
          <a href='#contact'>Contacto</a>
        </nav>
      </div>
    </div>
  );
};
