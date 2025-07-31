import React from 'react';
import { Heart, Globe, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-rose-500 to-pink-500 text-white py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-6">
            <Heart className="text-pink-200 mr-2 animate-pulse" size={32} />
            <h3 className="text-3xl font-serif font-bold">Made with Love</h3>
            <Heart className="text-pink-200 ml-2 animate-pulse" size={32} />
          </div>
          <p className="text-pink-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            This little corner of the internet was created just for you, Anjali. 
            Every pixel, every word, every animation was crafted with love to show you how much you mean to me.
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h4 className="text-xl font-semibold mb-6">Let's Stay Connected</h4>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <Globe className="mr-2" size={20} />
              <span className="text-pink-100">anjali.nimeshahir.cloud</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2" size={20} />
              <span className="text-pink-100">Always in my heart</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" size={20} />
              <span className="text-pink-100">Just a heartbeat away</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-pink-300/30 pt-8">
          <p className="text-pink-100 text-sm">
            © {currentYear} • Made with endless love for the most amazing girlfriend in the world
          </p>
          <div className="mt-4 flex items-center justify-center space-x-2">
            <Heart className="text-pink-200 animate-pulse" size={16} />
            <span className="text-pink-200 text-sm">Happy Girlfriend Day, Beautiful!</span>
            <Heart className="text-pink-200 animate-pulse" size={16} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;