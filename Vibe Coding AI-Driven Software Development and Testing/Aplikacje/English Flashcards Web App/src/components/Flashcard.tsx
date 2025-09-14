import React, { useState, useEffect, useRef } from 'react';
import type { Flashcard as FlashcardType } from '../types/flashcard';

interface FlashcardProps {
  flashcard: FlashcardType;
  onAnswer: (isCorrect: boolean) => void;
  isLast: boolean;
}

const Flashcard: React.FC<FlashcardProps> = ({ flashcard, onAnswer, isLast }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const timeoutRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);
  const isLocked = useRef(false);

  const handleFlip = () => {
    if (isFlipped || isLocked.current) return;
    isLocked.current = true;
    // Anuluj poprzednie timery, jeśli istnieją
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    setIsFlipped(true);
    setTimeLeft(6);

    // Uruchom timer wizualny (odliczanie co sekundę)
    intervalRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Ustaw timeout na 6 sekund, aby automatycznie odwrócić kartę
    timeoutRef.current = setTimeout(() => {
      setIsFlipped(false);
      setTimeLeft(0);
      timeoutRef.current = null;
      isLocked.current = false;
    }, 6000);
  };

  const handleAnswer = (isCorrect: boolean) => {
    // Anuluj timery, jeśli użytkownik odpowiedział przed upływem 5 sekund
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    onAnswer(isCorrect);
    setIsFlipped(false);
    setTimeLeft(0);
  };

  // Resetuj stan przy zmianie fiszki
  useEffect(() => {
    // Anuluj poprzednie timery
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Resetuj stan odwrócenia
    setIsFlipped(false);
    setTimeLeft(0);
    isLocked.current = false;
  }, [flashcard.english]);

  // Wyczyść timery przy odmontowaniu komponentu
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Funkcja do generowania kolorów ramek
  const getBorderColor = (category: string) => {
    const colors = {
      zwierzeta: 'border-yellow-400',
      jedzenie: 'border-green-400',
      czasowniki: 'border-pink-400'
    };
    return colors[category as keyof typeof colors] || 'border-blue-400';
  };

  // Funkcja do generowania ikon kreskówkowych
  const getCartoonIcon = (english: string) => {
    const icons: { [key: string]: string } = {
      // Zwierzęta
      'cat': '🐱',
      'dog': '🐶',
      'bird': '🐦',
      'fish': '🐠',
      'elephant': '🐘',
      // Jedzenie
      'apple': '🍎',
      'bread': '🍞',
      'milk': '🥛',
      'cheese': '🧀',
      'pizza': '🍕',
      // Czasowniki
      'run': '🏃',
      'eat': '🍽️',
      'sleep': '😴',
      'read': '📖',
      'write': '✍️'
    };
    return icons[english.toLowerCase()] || '📝';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Fiszka */}
        <div
          className={`relative w-full h-80 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''
            }`}
          onMouseOver={handleFlip}
          style={{ perspective: '1000px' }}
        >
          <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d">
            {/* Przód fiszki */}
            <div className={`absolute inset-0 w-full h-full backface-hidden ${isFlipped ? 'rotate-y-180' : ''
              }`}>
              <div className={`flashcard-front bg-white rounded-3xl shadow-2xl p-6 h-full flex flex-col items-center justify-center border-8 ${getBorderColor(flashcard.category)} relative overflow-hidden`}>
                {/* Falista ramka */}
                <div className="absolute inset-0 wavy-border"></div>

                {/* Tło z teksturą */}
                <div className="absolute inset-2 bg-white rounded-2xl opacity-90"></div>

                <div className="relative z-10 text-center">
                  {/* Kreskówkowa ikona */}
                  <div className="text-8xl mb-6 transform hover:scale-110 transition-transform duration-300">
                    {getCartoonIcon(flashcard.english)}
                  </div>

                  {/* Linia pod ikoną */}
                  <div className="w-32 h-1 bg-gray-300 mx-auto mb-4 rounded-full"></div>

                  {/* Tekst angielski */}
                  <h2 className="text-2xl font-black text-gray-800 mb-2 hand-drawn-text">
                    {flashcard.english}
                  </h2>

                  <p className="text-sm text-gray-500 hand-drawn-text">
                    Najedź, aby zobaczyć tłumaczenie
                  </p>
                </div>
              </div>
            </div>

            {/* Tył fiszki */}
            <div className={`absolute inset-0 w-full h-full backface-hidden rotate-y-180 ${isFlipped ? 'rotate-y-0' : ''
              }`}>
              <div className={`flashcard-back bg-white rounded-3xl shadow-2xl p-6 h-full flex flex-col items-center justify-center border-8 border-green-400 relative overflow-hidden`}>
                {/* Falista ramka */}
                <div className="absolute inset-0 wavy-border-green"></div>

                {/* Tło z teksturą */}
                <div className="absolute inset-2 bg-white rounded-2xl opacity-90"></div>

                <div className="relative z-10 text-center">
                  {/* Kreskówkowa ikona */}
                  <div className="text-8xl mb-6 transform hover:scale-110 transition-transform duration-300">
                    {getCartoonIcon(flashcard.english)}
                  </div>

                  {/* Linia pod ikoną */}
                  <div className="w-32 h-1 bg-gray-300 mx-auto mb-4 rounded-full"></div>

                  {/* Tekst polski */}
                  <h2 className="text-2xl font-black text-gray-800 mb-6 hand-drawn-text">
                    {flashcard.polish}
                  </h2>

                  {/* Wskaźnik czasu */}
                  {isFlipped && timeLeft > 0 && (
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">
                        Pozostało: {timeLeft}s
                      </div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full mx-auto">
                        <div
                          className="h-2 bg-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${(timeLeft / 6) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {isFlipped && (
                    <div className="flex space-x-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAnswer(true);
                        }}
                        className="bg-green-500 hover:bg-green-600 text-white font-black py-3 px-6 rounded-2xl transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 hand-drawn-button"
                      >
                        <span className="text-xl">✅</span>
                        <span>Poprawnie</span>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAnswer(false);
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white font-black py-3 px-6 rounded-2xl transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 hand-drawn-button"
                      >
                        <span className="text-xl">❌</span>
                        <span>Źle</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informacja o postępie */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 hand-drawn-text text-lg">
            {isLast ? '🎉 Ostatnia fiszka!' : '👆 Kliknij na fiszkę, aby ją odwrócić'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
