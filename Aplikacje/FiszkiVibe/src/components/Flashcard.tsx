import React from 'react';
import type { Flashcard as FlashcardType } from '../types';
import { cn } from '../utils/cn';

interface FlashcardProps {
  card: FlashcardType;
  isFlipped: boolean;
  onFlip: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;
}

export const Flashcard: React.FC<FlashcardProps> = ({
  card,
  isFlipped,
  onFlip,
  onCorrect,
  onIncorrect,
}) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Karta */}
      <div
        className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 min-h-[400px] flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:shadow-xl"
        onClick={onFlip}
      >
        {!isFlipped ? (
          // Przód karty - słowo hiszpańskie
          <div className="text-center space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                {card.spanish}
              </h2>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {card.category}
              </p>
            </div>
            
            <div>
              <span
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium',
                  card.difficulty === 'easy' && 'bg-green-100 text-green-800',
                  card.difficulty === 'medium' && 'bg-yellow-100 text-yellow-800',
                  card.difficulty === 'hard' && 'bg-red-100 text-red-800'
                )}
              >
                {card.difficulty === 'easy' && 'Łatwy'}
                {card.difficulty === 'medium' && 'Średni'}
                {card.difficulty === 'hard' && 'Trudny'}
              </span>
            </div>
            
            <div className="text-gray-400">
              <p className="text-sm">Kliknij, aby zobaczyć odpowiedź</p>
            </div>
          </div>
        ) : (
          // Tył karty - polskie tłumaczenie
          <div className="text-center space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-2">
                {card.polish}
              </h2>
              <p className="text-sm text-gray-500 uppercase tracking-wide">
                {card.category}
              </p>
            </div>
            
            <div className="text-gray-400">
              <p className="text-sm">Polskie tłumaczenie</p>
            </div>
          </div>
        )}
      </div>

      {/* Przyciski odpowiedzi (widoczne tylko po odwróceniu) */}
      {isFlipped && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={onIncorrect}
            className="btn-secondary flex items-center gap-2"
          >
            <span>❌</span>
            Nieprawidłowa
          </button>
          <button
            onClick={onCorrect}
            className="btn-primary flex items-center gap-2"
          >
            <span>✅</span>
            Prawidłowa
          </button>
        </div>
      )}
    </div>
  );
};
