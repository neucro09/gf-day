import React, { useState } from 'react';
import PasswordProtection from './components/PasswordProtection';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import Memories from './components/Memories';
import ReasonsILoveYou from './components/ReasonsILoveYou';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthenticated = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={handleAuthenticated} />;
  }

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