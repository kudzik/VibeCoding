import React from 'react';
import { categories } from '../data/flashcards';
import type { GameMode } from '../types/flashcard';

interface CategorySelectionPageProps {
  mode: GameMode;
  onNavigate: (page: string, categoryId?: string, mode?: GameMode) => void;
  onBack: () => void;
}

const CategorySelectionPage: React.FC<CategorySelectionPageProps> = ({ 
  mode, 
  onNavigate, 
  onBack 
}) => {
  const getModeTitle = () => {
    switch (mode) {
      case 'learn':
        return 'Tryb Nauki';
      case 'quiz':
        return 'Tryb Quizu';
      case 'review':
        return 'Tryb Powtórek';
      default:
        return 'Wybierz Kategorię';
    }
  };

  const getModeIcon = () => {
    switch (mode) {
      case 'learn':
        return '📚';
      case 'quiz':
        return '🧠';
      case 'review':
        return '🔄';
      default:
        return '📂';
    }
  };

  const handleCategorySelect = (categoryId: string) => {
    if (mode === 'learn') {
      onNavigate('flashcard-learning', categoryId, mode);
    } else if (mode === 'quiz') {
      onNavigate('quiz-selection', categoryId, mode);
    } else if (mode === 'review') {
      onNavigate('flashcard-review', categoryId, mode);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative overflow-hidden">
        {/* Falista ramka */}
        <div className="absolute inset-0 wavy-border-blue"></div>
        
        {/* Tło z teksturą */}
        <div className="absolute inset-2 bg-white rounded-2xl opacity-95"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <button
              onClick={onBack}
              className="mb-4 text-gray-500 hover:text-gray-700 transition-colors hand-drawn-text text-lg"
            >
              ← Powrót
            </button>
            <h1 className="text-4xl font-black text-gray-800 mb-2 hand-drawn-text">
              {getModeIcon()} {getModeTitle()}
            </h1>
            <p className="text-gray-600 hand-drawn-text text-lg">
              Wybierz kategorię do nauki
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className="bg-white rounded-3xl shadow-xl p-6 transition-all duration-200 transform hover:scale-105 hover:shadow-2xl border-4 border-transparent hover:border-opacity-50 relative overflow-hidden"
                style={{
                  borderColor: category.id === 'zwierzeta' ? '#facc15' : 
                              category.id === 'jedzenie' ? '#4ade80' : '#f472b6'
                }}
              >
                {/* Falista ramka dla kategorii */}
                <div 
                  className="absolute inset-0 rounded-3xl opacity-20"
                  style={{
                    background: category.id === 'zwierzeta' ? 'linear-gradient(45deg, #fbbf24, #f59e0b)' : 
                                category.id === 'jedzenie' ? 'linear-gradient(45deg, #10b981, #059669)' : 
                                'linear-gradient(45deg, #f472b6, #ec4899)'
                  }}
                ></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-4 transform hover:scale-110 transition-transform duration-300">
                    {category.id === 'zwierzeta' && '🐾'}
                    {category.id === 'jedzenie' && '🍎'}
                    {category.id === 'czasowniki' && '🏃'}
                  </div>
                  <h3 className="text-xl font-black mb-2 hand-drawn-text text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-sm hand-drawn-text text-gray-600">
                    {category.flashcards.length} fiszek
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 hand-drawn-text">
            <p>Każda kategoria zawiera zestaw słówek do nauki 📚</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategorySelectionPage;
