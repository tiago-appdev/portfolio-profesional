import './Hero.css';
import heroImage from '../../assets/hero.svg';

export const Hero = () => {
  return (
    <section className='home' id='home'>
      <div className='home-description'>
        <h3 className='home-title'>Hola, Bienvenido</h3>
        <p className='home-paragraph'>
          Soy desarrollador Front-End / Full-Stack. Actualmente me estoy
          especializando en tecnologias Fron-End, pero tengo conocimiento de
          varios lenguajes.
        </p>
        <div className='typewriter'>
          <span className='text' id='typewriter'></span>
        </div>
      </div>
      <img
        src={heroImage}
        alt='Imagen persona en una computadora'
        className='inicio-img'
      />
    </section>
  );
};
