import React from 'react';
import { BookOpen, Trophy, Settings } from 'lucide-react';

interface HeaderProps {
  currentCard: number;
  totalCards: number;
  correctAnswers: number;
  onShowStats: () => void;
  onShowSettings: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentCard,
  totalCards,
  correctAnswers,
  onShowStats,
  onShowSettings,
}) => {
  const progress = totalCards > 0 ? (currentCard / totalCards) * 100 : 0;
  const accuracy = currentCard > 0 ? (correctAnswers / currentCard) * 100 : 0;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo i tytuł */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded-lg">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Spanish Flashcards
              </h1>
              <p className="text-sm text-gray-500">
                Nauka hiszpańskiego przez fiszki
              </p>
            </div>
          </div>

          {/* Statystyki sesji */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {currentCard}/{totalCards}
              </div>
              <div className="text-xs text-gray-500">Karty</div>
            </div>
            
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">
                {Math.round(accuracy)}%
              </div>
              <div className="text-xs text-gray-500">Dokładność</div>
            </div>

            {/* Pasek postępu */}
            <div className="w-32">
              <div className="bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1 text-center">
                Postęp
              </div>
            </div>

            {/* Przyciski akcji */}
            <div className="flex items-center gap-2">
              <button
                onClick={onShowStats}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Statystyki"
              >
                <Trophy className="w-5 h-5" />
              </button>
              <button
                onClick={onShowSettings}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Ustawienia"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
