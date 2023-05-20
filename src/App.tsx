import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Works from './components/Works'

const App: React.FC = () => {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
      </section>
      <section id='about'>
        <About />
      </section>
      <section id='skills'>
        <Skills />
      </section>
      <section id='works'>
        <Works />
      </section>

    </>
  );
}

export default App;