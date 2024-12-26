import React, { useState } from 'react';
import { RefreshCw, Sparkles } from 'lucide-react';

const RoastApp = () => {
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [roast, setRoast] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:3000/api/roast', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: linkedinUrl })
      });

      const data = await response.json();
      if (data.roast) {
        setRoast(data.roast);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRandomRoast = () => {
    setIsLoading(true);
    // Add random roast generation logic
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 p-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-coral-600">
            LinkedIn Roastmaster
          </h1>
          <p className="text-gray-600 text-lg">
            Turn corporate buzzwords into comedy gold! 🎭
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-semibold text-gray-800">
              Ready to roast? 🔥
            </h2>
            <p className="text-gray-600">
              Drop that LinkedIn URL and watch the magic happen
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="url"
                placeholder="https://linkedin.com/in/..."
                className="w-full p-4 pr-16 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-coral-400 text-gray-800 placeholder-gray-400"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                required
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-2 top-2 bg-gradient-to-r from-coral-500 to-coral-600 text-white p-3 rounded-xl transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
              >
                <Sparkles size={20} />
              </button>
            </div>

            <button
              type="button"
              onClick={handleRandomRoast}
              className="flex items-center gap-2 text-gray-500 hover:text-coral-600 transition-colors mx-auto"
            >
              <RefreshCw size={16} />
              Generate Random Roast
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm">
          Made with ❤️ for fun • Keep it professional • No harm intended
        </p>
      </div>
    </div>
  );
};

export default RoastApp;