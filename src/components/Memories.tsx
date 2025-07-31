import React from 'react';
import { Calendar, Heart, Camera, Star } from 'lucide-react';

const Memories = () => {
  const memories = [
    {
      date: "The Day We Met",
      title: "Our Beautiful Beginning",
      description: "The moment I saw you, I knew my life was about to change in the most wonderful way.",
      icon: <Heart className="text-rose-500" size={24} />
    },
    {
      date: "Our First Date",
      title: "Butterflies & Magic",
      description: "Nervous excitement, endless conversation, and the beginning of countless beautiful memories.",
      icon: <Star className="text-pink-500" size={24} />
    },
    {
      date: "First 'I Love You'",
      title: "Three Little Words",
      description: "The moment we both knew what our hearts had been whispering all along.",
      icon: <Heart className="text-red-500" size={24} />
    },
    {
      date: "Today & Always",
      title: "Our Forever Story",
      description: "Every day with you is a new page in our beautiful love story. Here's to many more chapters!",
      icon: <Camera className="text-rose-600" size={24} />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Our Beautiful Journey</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every moment with you has been a treasure. Here are some of my favorite chapters in our love story.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>
        
        <div className="space-y-8">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="flex items-center mb-4">
                    {memory.icon}
                    <Calendar className="text-gray-400 ml-2" size={20} />
                  </div>
                  <div className="text-sm text-rose-500 font-semibold mb-2 uppercase tracking-wide">
                    {memory.date}
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                    {memory.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {memory.description}
                  </p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="text-center text-gray-400">
                    <Camera size={48} className="mx-auto mb-4" />
                    <p className="text-sm">Beautiful Memory #{index + 1}</p>
                    <p className="text-xs mt-2">Photo placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;