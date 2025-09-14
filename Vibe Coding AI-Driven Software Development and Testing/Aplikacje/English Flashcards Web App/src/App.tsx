import { useState } from 'react';
import HomePage from './pages/HomePage';
import CategorySelectionPage from './pages/CategorySelectionPage';
import FlashcardLearningPage from './pages/FlashcardLearningPage';
import StatsPage from './pages/StatsPage';
import type { GameMode } from './types/flashcard';
import './App.css';

type Page = 'home' | 'category-selection' | 'flashcard-learning' | 'quiz-selection' | 'flashcard-review' | 'stats';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentMode, setCurrentMode] = useState<GameMode>('learn');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleNavigate = (page: string, categoryId?: string, mode?: GameMode) => {
    setCurrentPage(page as Page);
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
    if (mode) {
      setCurrentMode(mode);
    }
  };

  const handleBack = () => {
    switch (currentPage) {
      case 'category-selection':
        setCurrentPage('home');
        break;
      case 'flashcard-learning':
        setCurrentPage('category-selection');
        break;
      case 'stats':
        setCurrentPage('home');
        break;
      default:
        setCurrentPage('home');
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      
      case 'category-selection':
        return (
          <CategorySelectionPage
            mode={currentMode}
            onNavigate={handleNavigate}
            onBack={handleBack}
          />
        );
      
      case 'flashcard-learning':
        return (
          <FlashcardLearningPage
            categoryId={selectedCategory}
            onNavigate={handleNavigate}
            onBack={handleBack}
          />
        );
      
      case 'stats':
        return (
          <StatsPage
            onNavigate={handleNavigate}
            onBack={handleBack}
          />
        );
      
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="App">
      {renderCurrentPage()}
    </div>
  );
}

export default App;
