import React from 'react';
import type { GameMode } from '../types/flashcard';

interface HomePageProps {
  onNavigate: (page: string, mode?: GameMode) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full relative overflow-hidden">
        {/* Falista ramka */}
        <div className="absolute inset-0 wavy-border-blue"></div>
        
        {/* Tło z teksturą */}
        <div className="absolute inset-2 bg-white rounded-2xl opacity-95"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-black text-gray-800 mb-4 hand-drawn-text">
              🎯 English Flashcards
            </h1>
            <p className="text-gray-600 hand-drawn-text text-lg">
              Ucz się angielskiego z fiszkami!
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => onNavigate('category-selection', 'learn')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-black py-4 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 hand-drawn-button"
            >
              <span className="text-2xl">📚</span>
              <span className="text-lg">Tryb Nauki</span>
            </button>

            <button
              onClick={() => onNavigate('category-selection', 'quiz')}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-black py-4 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 hand-drawn-button"
            >
              <span className="text-2xl">🧠</span>
              <span className="text-lg">Tryb Quizu</span>
            </button>

            <button
              onClick={() => onNavigate('stats')}
              className="w-full bg-purple-500 hover:bg-purple-600 text-white font-black py-4 px-6 rounded-2xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl transform hover:scale-105 hand-drawn-button"
            >
              <span className="text-2xl">📊</span>
              <span className="text-lg">Statystyki</span>
            </button>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 hand-drawn-text">
            <p>Wybierz tryb nauki i zacznij swoją przygodę z angielskim! 🚀</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
