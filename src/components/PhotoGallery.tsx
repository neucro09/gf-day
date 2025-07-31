import React from 'react';
import { Camera, Heart, Image } from 'lucide-react';

const PhotoGallery = () => {
  const photoPlaceholders = [
    { id: 1, title: "Our First Adventure" },
    { id: 2, title: "That Perfect Sunset" },
    { id: 3, title: "Silly Moments" },
    { id: 4, title: "Date Night Magic" },
    { id: 5, title: "Just Being Us" },
    { id: 6, title: "Future Dreams" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Camera className="text-rose-500 mr-2" size={32} />
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-800">Our Beautiful Moments</h2>
            <Camera className="text-rose-500 ml-2" size={32} />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every picture tells a story, and with you, every story is beautiful.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photoPlaceholders.map((photo, index) => (
            <div 
              key={photo.id} 
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-square bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 to-pink-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="text-center text-gray-400 z-10">
                    <Image size={48} className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-sm font-medium">{photo.title}</p>
                    <p className="text-xs mt-2 opacity-70">Click to add photo</p>
                  </div>
                  <Heart className="absolute top-4 right-4 text-rose-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110" size={20} />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 text-center group-hover:text-rose-600 transition-colors duration-300">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 italic">
            Replace these placeholders with our actual beautiful memories! 📸
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;