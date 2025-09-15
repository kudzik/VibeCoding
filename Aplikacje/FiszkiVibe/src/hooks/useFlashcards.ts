import { useState, useEffect } from 'react';
import type { Flashcard, StudySession } from '../types';
import { initialFlashcards } from '../data/flashcards';
import { categories } from '../data/categories';

export const useFlashcards = () => {
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [currentSession, setCurrentSession] = useState<StudySession | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  // Inicjalizacja danych
  useEffect(() => {
    const savedFlashcards = localStorage.getItem('spanish-flashcards');
    if (savedFlashcards) {
      setFlashcards(JSON.parse(savedFlashcards));
    } else {
      setFlashcards(initialFlashcards);
      localStorage.setItem('spanish-flashcards', JSON.stringify(initialFlashcards));
    }
  }, []);

  // Zapisywanie do localStorage przy każdej zmianie
  useEffect(() => {
    if (flashcards.length > 0) {
      localStorage.setItem('spanish-flashcards', JSON.stringify(flashcards));
    }
  }, [flashcards]);

  const startStudySession = (categoryId?: string) => {
    let cardsToStudy = flashcards;
    
    if (categoryId) {
      cardsToStudy = flashcards.filter(card => card.category === categoryId);
    }

    // Mieszanie kart
    const shuffledCards = [...cardsToStudy].sort(() => Math.random() - 0.5);

    const newSession: StudySession = {
      id: Date.now().toString(),
      categoryId,
      cards: shuffledCards,
      currentCardIndex: 0,
      startTime: new Date(),
      correctAnswers: 0,
      totalAnswers: 0,
    };

    setCurrentSession(newSession);
    setIsFlipped(false);
    setShowAnswer(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(!showAnswer);
  };

  const answerCard = (isCorrect: boolean) => {
    if (!currentSession) return;

    const currentCard = currentSession.cards[currentSession.currentCardIndex];
    const updatedFlashcards = flashcards.map(card => {
      if (card.id === currentCard.id) {
        return {
          ...card,
          reviewCount: card.reviewCount + 1,
          correctCount: isCorrect ? card.correctCount + 1 : card.correctCount,
          lastReviewed: new Date(),
        };
      }
      return card;
    });

    setFlashcards(updatedFlashcards);

    const updatedSession = {
      ...currentSession,
      currentCardIndex: currentSession.currentCardIndex + 1,
      correctAnswers: isCorrect ? currentSession.correctAnswers + 1 : currentSession.correctAnswers,
      totalAnswers: currentSession.totalAnswers + 1,
    };

    setCurrentSession(updatedSession);
    setIsFlipped(false);
    setShowAnswer(false);
  };

  const endStudySession = () => {
    if (currentSession) {
      const endedSession = {
        ...currentSession,
        endTime: new Date(),
      };
      setCurrentSession(endedSession);
    }
  };

  const resetSession = () => {
    setCurrentSession(null);
    setIsFlipped(false);
    setShowAnswer(false);
  };

  const getCurrentCard = (): Flashcard | null => {
    if (!currentSession || currentSession.currentCardIndex >= currentSession.cards.length) {
      return null;
    }
    return currentSession.cards[currentSession.currentCardIndex];
  };

  const isSessionComplete = (): boolean => {
    return currentSession ? currentSession.currentCardIndex >= currentSession.cards.length : false;
  };

  const getSessionStats = () => {
    if (!currentSession) return null;
    
    const accuracy = currentSession.totalAnswers > 0 
      ? (currentSession.correctAnswers / currentSession.totalAnswers) * 100 
      : 0;
    
    const timeSpent = currentSession.endTime 
      ? Math.round((currentSession.endTime.getTime() - currentSession.startTime.getTime()) / 1000)
      : Math.round((new Date().getTime() - currentSession.startTime.getTime()) / 1000);

    return {
      totalCards: currentSession.cards.length,
      answeredCards: currentSession.totalAnswers,
      correctAnswers: currentSession.correctAnswers,
      accuracy: Math.round(accuracy),
      timeSpent,
    };
  };

  return {
    flashcards,
    categories,
    currentSession,
    isFlipped,
    showAnswer,
    startStudySession,
    flipCard,
    answerCard,
    endStudySession,
    resetSession,
    getCurrentCard,
    isSessionComplete,
    getSessionStats,
  };
};
