export interface Flashcard {
  id: string;
  category: 'zwierzeta' | 'jedzenie' | 'czasowniki';
  english: string;
  polish: string;
  quiz: {
    type: 'multiple-choice';
    options: string[];
  };
}

export interface Category {
  id: 'zwierzeta' | 'jedzenie' | 'czasowniki';
  name: string;
  flashcards: Flashcard[];
}

export type GameMode = 'learn' | 'quiz' | 'review';
export type QuizType = 'multiple-choice' | 'fill-in-the-blank';
