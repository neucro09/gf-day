import React, { useState } from 'react';
import { Lock, Eye, EyeOff, Heart, Sparkles } from 'lucide-react';

interface PasswordProtectionProps {
  onAuthenticated: () => void;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ onAuthenticated }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a brief loading time for better UX
    setTimeout(() => {
      if (password === '07022024') {
        onAuthenticated();
      } else {
        setError('Oops! That\'s not the right date. Try again! 💕');
        setPassword('');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-red-50 flex items-center justify-center relative overflow-hidden">
      {/* Floating hearts animation */}
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
        <div className="absolute top-1/2 left-10 text-pink-200 animate-pulse">
          <Heart size={16} />
        </div>
        <div className="absolute top-1/3 right-10 text-rose-200 animate-bounce">
          <Heart size={20} />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full mx-6 relative z-10">
        <div className="text-center mb-8">
          <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <Lock className="text-rose-500" size={32} />
          </div>
          
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-4">
            A Special Surprise Awaits! 💕
          </h1>
          
          <p className="text-gray-600 mb-2">
            Enter the password to unlock your surprise
          </p>
          
          <p className="text-sm text-rose-500 italic">
            Hint: It's a very special date for us ✨
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              className="w-full px-4 py-4 border-2 border-pink-200 rounded-xl focus:border-rose-400 focus:outline-none text-center text-lg tracking-wider transition-colors duration-300"
              disabled={isLoading}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-rose-500 transition-colors duration-300"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {error && (
            <div className="text-center text-rose-500 text-sm bg-rose-50 py-2 px-4 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading || !password}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-4 rounded-xl text-lg font-semibold hover:from-rose-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Unlocking...
              </div>
            ) : (
              'Unlock My Surprise 💕'
            )}
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-xs text-gray-400">
            Made with love for the most amazing girlfriend 💖
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasswordProtection;