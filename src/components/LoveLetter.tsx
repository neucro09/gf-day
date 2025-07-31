import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LoveLetter = () => {
  return (
    <section id="love-letter" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="text-rose-400 mr-2" size={32} />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">A Letter from My Heart</h2>
            <Sparkles className="text-rose-400 ml-2" size={32} />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto"></div>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200 to-pink-200 rounded-full -translate-y-16 translate-x-16 opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full translate-y-12 -translate-x-12 opacity-30"></div>
          
          <div className="relative z-10">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-light">
              My Dearest Anjali,
            </p>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Every morning I wake up grateful for another day to love you. You've brought so much light, 
                laughter, and love into my world that I can hardly remember what life was like before you.
              </p>
              
              <p>
                Your smile can turn my worst days into the best ones. Your laugh is the most beautiful 
                sound I've ever heard. Your kindness touches everyone around you, and your strength 
                inspires me to be better every single day.
              </p>
              
              <p>
                I love the way you get excited about little things, how you make even ordinary moments 
                feel magical, and how you see beauty in everything around us. You have this incredible 
                way of making me feel like the luckiest person alive just by being yourself.
              </p>
              
              <p>
                Today, on Girlfriend Day, I want you to know that you're not just my girlfriend – 
                you're my best friend, my favorite person, my safe place, and my greatest adventure all 
                rolled into one amazing human being.
              </p>
              
              <p className="text-xl font-medium text-rose-600">
                Thank you for choosing to share your heart with mine. I love you more than words could ever express.
              </p>
            </div>
            
            <div className="mt-8 text-right">
              <p className="text-gray-700 text-lg italic">
                Forever yours,
              </p>
              <div className="flex items-center justify-end mt-2">
                <Heart className="text-rose-500 mr-2" size={20} />
                <p className="text-xl font-semibold text-gray-800">Your Love</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;