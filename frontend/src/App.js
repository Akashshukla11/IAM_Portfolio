import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="App bg-[#050816] min-h-screen">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Tools />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
