import React, { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';
import { getFlashcardsByCategory, getCategoryById } from '../data/flashcards';
import type { Flashcard as FlashcardType } from '../types/flashcard';

interface FlashcardLearningPageProps {
  categoryId: string;
  onNavigate: (page: string) => void;
  onBack: () => void;
}

const FlashcardLearningPage: React.FC<FlashcardLearningPageProps> = ({ 
  categoryId, 
  onNavigate, 
  onBack 
}) => {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<FlashcardType[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [category, setCategory] = useState<any>(null);

  useEffect(() => {
    const categoryData = getCategoryById(categoryId);
    const flashcardsData = getFlashcardsByCategory(categoryId);
    
    setCategory(categoryData);
    setFlashcards(flashcardsData);
  }, [categoryId]);

  const handleAnswer = (isCorrect: boolean) => {
    const currentFlashcard = flashcards[currentIndex];
    
    if (!isCorrect) {
      setWrongAnswers(prev => [...prev, currentFlashcard]);
    }

    if (currentIndex < flashcards.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleStartReview = () => {
    if (wrongAnswers.length > 0) {
      onNavigate('flashcard-review');
    } else {
      onNavigate('home');
    }
  };

  if (!category || flashcards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Ładowanie...</p>
        </div>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Gratulacje!
          </h1>
          <p className="text-gray-600 mb-6">
            Ukończyłeś kategorię <strong>{category.name}</strong>
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-2">Podsumowanie:</h3>
            <p className="text-gray-600">
              Przerobione fiszki: <strong>{flashcards.length}</strong>
            </p>
            <p className="text-gray-600">
              Błędne odpowiedzi: <strong>{wrongAnswers.length}</strong>
            </p>
            <p className="text-gray-600">
              Skuteczność: <strong>{Math.round(((flashcards.length - wrongAnswers.length) / flashcards.length) * 100)}%</strong>
            </p>
          </div>

          <div className="space-y-3">
            {wrongAnswers.length > 0 && (
              <button
                onClick={handleStartReview}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                🔄 Powtórz błędne fiszki ({wrongAnswers.length})
              </button>
            )}
            
            <button
              onClick={() => onNavigate('home')}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              🏠 Powrót do strony głównej
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Nagłówek z postępem */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Powrót
            </button>
            
            <div className="text-center">
              <h1 className="text-xl font-semibold text-gray-800">
                {category.name}
              </h1>
              <p className="text-sm text-gray-600">
                Fiszka {currentIndex + 1} z {flashcards.length}
              </p>
            </div>
            
            <div className="w-16"></div>
          </div>
          
          {/* Pasek postępu */}
          <div className="mt-4">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / flashcards.length) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Komponent fiszki */}
      <Flashcard
        key={flashcards[currentIndex].english}
        flashcard={flashcards[currentIndex]}
        onAnswer={handleAnswer}
        isLast={currentIndex === flashcards.length - 1}
      />
    </div>
  );
};

export default FlashcardLearningPage;
