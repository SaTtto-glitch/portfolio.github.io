import React from 'react'
import Navbar from './components/Navbar'
import MyAvatar from './components/MyAvatar'
import Skills from './components/Skills'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MyAvatar />
      <Skills />
    </>
  );
}

export default App;