import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Members from './components/Members';
import Discography from './components/Discography';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Hero />
      <About />
      <Timeline />
      <Members />
      <Discography />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;