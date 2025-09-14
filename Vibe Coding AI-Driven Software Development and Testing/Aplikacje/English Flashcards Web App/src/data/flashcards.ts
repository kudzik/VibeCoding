import type { Category } from '../types/flashcard';

export const categories: Category[] = [
  {
    id: 'zwierzeta',
    name: 'Zwierzęta',
    flashcards: [
      {
        id: 'cat',
        category: 'zwierzeta',
        english: 'cat',
        polish: 'kot',
        quiz: {
          type: 'multiple-choice',
          options: ['pies', 'dom', 'kot', 'ptak']
        }
      },
      {
        id: 'dog',
        category: 'zwierzeta',
        english: 'dog',
        polish: 'pies',
        quiz: {
          type: 'multiple-choice',
          options: ['kot', 'samochód', 'pies', 'książka']
        }
      },
      {
        id: 'bird',
        category: 'zwierzeta',
        english: 'bird',
        polish: 'ptak',
        quiz: {
          type: 'multiple-choice',
          options: ['ryba', 'ptak', 'drzewo', 'woda']
        }
      },
      {
        id: 'fish',
        category: 'zwierzeta',
        english: 'fish',
        polish: 'ryba',
        quiz: {
          type: 'multiple-choice',
          options: ['ptak', 'ryba', 'kwiat', 'dom']
        }
      },
      {
        id: 'elephant',
        category: 'zwierzeta',
        english: 'elephant',
        polish: 'słoń',
        quiz: {
          type: 'multiple-choice',
          options: ['słoń', 'samolot', 'telefon', 'okno']
        }
      }
    ]
  },
  {
    id: 'jedzenie',
    name: 'Jedzenie',
    flashcards: [
      {
        id: 'apple',
        category: 'jedzenie',
        english: 'apple',
        polish: 'jabłko',
        quiz: {
          type: 'multiple-choice',
          options: ['jabłko', 'samochód', 'książka', 'telefon']
        }
      },
      {
        id: 'bread',
        category: 'jedzenie',
        english: 'bread',
        polish: 'chleb',
        quiz: {
          type: 'multiple-choice',
          options: ['woda', 'chleb', 'dom', 'ptak']
        }
      },
      {
        id: 'milk',
        category: 'jedzenie',
        english: 'milk',
        polish: 'mleko',
        quiz: {
          type: 'multiple-choice',
          options: ['mleko', 'samolot', 'drzewo', 'telefon']
        }
      },
      {
        id: 'cheese',
        category: 'jedzenie',
        english: 'cheese',
        polish: 'ser',
        quiz: {
          type: 'multiple-choice',
          options: ['ser', 'książka', 'okno', 'woda']
        }
      },
      {
        id: 'pizza',
        category: 'jedzenie',
        english: 'pizza',
        polish: 'pizza',
        quiz: {
          type: 'multiple-choice',
          options: ['pizza', 'samochód', 'ptak', 'drzewo']
        }
      }
    ]
  },
  {
    id: 'czasowniki',
    name: 'Czasowniki',
    flashcards: [
      {
        id: 'run',
        category: 'czasowniki',
        english: 'run',
        polish: 'biegać',
        quiz: {
          type: 'multiple-choice',
          options: ['biegać', 'dom', 'książka', 'woda']
        }
      },
      {
        id: 'eat',
        category: 'czasowniki',
        english: 'eat',
        polish: 'jeść',
        quiz: {
          type: 'multiple-choice',
          options: ['jeść', 'samochód', 'ptak', 'telefon']
        }
      },
      {
        id: 'sleep',
        category: 'czasowniki',
        english: 'sleep',
        polish: 'spać',
        quiz: {
          type: 'multiple-choice',
          options: ['spać', 'drzewo', 'okno', 'mleko']
        }
      },
      {
        id: 'read',
        category: 'czasowniki',
        english: 'read',
        polish: 'czytać',
        quiz: {
          type: 'multiple-choice',
          options: ['czytać', 'samolot', 'ryba', 'chleb']
        }
      },
      {
        id: 'write',
        category: 'czasowniki',
        english: 'write',
        polish: 'pisać',
        quiz: {
          type: 'multiple-choice',
          options: ['pisać', 'jabłko', 'kot', 'dom']
        }
      }
    ]
  }
];

export const getAllFlashcards = () => {
  return categories.flatMap(category => category.flashcards);
};

export const getFlashcardsByCategory = (categoryId: string) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.flashcards : [];
};

export const getCategoryById = (categoryId: string) => {
  return categories.find(cat => cat.id === categoryId);
};
