export interface Flashcard {
  id: string;
  spanish: string;
  polish: string;
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
  createdAt: Date;
  lastReviewed?: Date;
  reviewCount: number;
  correctCount: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  cardCount: number;
}

export interface StudySession {
  id: string;
  categoryId?: string;
  cards: Flashcard[];
  currentCardIndex: number;
  startTime: Date;
  endTime?: Date;
  correctAnswers: number;
  totalAnswers: number;
}

export interface AppState {
  flashcards: Flashcard[];
  categories: Category[];
  currentSession?: StudySession;
  isFlipped: boolean;
  showAnswer: boolean;
}
