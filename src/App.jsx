import React from 'react';
import {
  Navbar,
  Hero,
  Services,
  Skills,
  About,
  Contact,
  Footer,
} from './components';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
