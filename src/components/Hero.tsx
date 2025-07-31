import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 text-pink-200 animate-pulse">
          <Heart size={24} />
        </div>
        <div className="absolute top-40 right-32 text-rose-200 animate-bounce">
          <Sparkles size={20} />
        </div>
        <div className="absolute bottom-32 left-1/4 text-pink-300 animate-pulse">
          <Heart size={18} />
        </div>
        <div className="absolute bottom-20 right-20 text-rose-300 animate-bounce">
          <Sparkles size={22} />
        </div>
      </div>
      
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <Heart className="mx-auto text-rose-500 mb-6 animate-pulse" size={64} />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-gray-800 mb-6 animate-slide-up">
          For My Beautiful
          <span className="block text-rose-500 mt-2">Anjali</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed animate-slide-up-delay">
          Happy Girlfriend Day, my love! ✨
        </p>
        
        <div className="space-y-4 animate-slide-up-delay-2">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Today and every day, I want you to know how incredibly special you are to me. 
            This little corner of the internet is dedicated entirely to you and all the joy you bring to my life.
          </p>
        </div>
        
        <button 
          onClick={() => document.getElementById('love-letter')?.scrollIntoView({ behavior: 'smooth' })}
          className="mt-12 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Read My Heart Out 💕
        </button>
      </div>
    </section>
  );
};

export default Hero;