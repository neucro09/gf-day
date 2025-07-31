import React, { useState } from 'react';
import { Heart, Sparkles, Star, Smile, Sun, Zap } from 'lucide-react';

const ReasonsILoveYou = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const reasons = [
    {
      icon: <Smile className="text-yellow-500" size={32} />,
      title: "Your Beautiful Smile",
      description: "It lights up every room you enter and makes my heart skip a beat every single time."
    },
    {
      icon: <Heart className="text-red-500" size={32} />,
      title: "Your Kind Heart",
      description: "The way you care for others and show compassion in everything you do amazes me daily."
    },
    {
      icon: <Star className="text-purple-500" size={32} />,
      title: "Your Dreams & Ambitions",
      description: "I love how passionate you are about your goals and how you inspire me to chase mine too."
    },
    {
      icon: <Sun className="text-orange-500" size={32} />,
      title: "Your Positive Energy",
      description: "You bring sunshine into my life even on the cloudiest days. Your optimism is infectious."
    },
    {
      icon: <Sparkles className="text-pink-500" size={32} />,
      title: "Your Unique Personality",
      description: "All your quirks, your sense of humor, your way of seeing the world – everything makes you perfect."
    },
    {
      icon: <Zap className="text-blue-500" size={32} />,
      title: "The Way You Love Me",
      description: "You love me completely, flaws and all, and make me feel like the luckiest person alive."
    }
  ];

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Reasons I Love You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I could write a thousand reasons, but here are just a few that make my heart full every day.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
          <p className="text-sm text-gray-500 mt-4">Click on each card to reveal the reason 💕</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative h-64 cursor-pointer group"
              onClick={() => toggleCard(index)}
            >
              <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-gpu ${
                flippedCards.includes(index) ? 'rotate-y-180' : ''
              }`}>
                {/* Front of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-8 h-full flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200">
                    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {reason.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 text-center mb-4">
                      {reason.title}
                    </h3>
                    <div className="text-center">
                      <Heart className="text-rose-400 mx-auto animate-pulse" size={20} />
                      <p className="text-sm text-gray-500 mt-2">Click to reveal</p>
                    </div>
                  </div>
                </div>
                
                {/* Back of card */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
                  <div className="bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl p-8 h-full flex flex-col items-center justify-center shadow-lg text-white">
                    <div className="mb-4 text-white">
                      {React.cloneElement(reason.icon, { className: 'text-white' })}
                    </div>
                    <h3 className="text-lg font-semibold text-center mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-center leading-relaxed text-pink-100">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 italic">
            And so many more reasons that I discover every day... 💕
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReasonsILoveYou;