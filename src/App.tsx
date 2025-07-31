import React from 'react';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import Memories from './components/Memories';
import ReasonsILoveYou from './components/ReasonsILoveYou';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LoveLetter />
      <Memories />
      <ReasonsILoveYou />
      <PhotoGallery />
      <Footer />
    </div>
  );
}

export default App;