import { useState } from 'react';
import { Header } from './components/Header';
import { CategorySelector } from './components/CategorySelector';
import { Flashcard } from './components/Flashcard';
import { useFlashcards } from './hooks/useFlashcards';
import { CheckCircle, RotateCcw, Home, Trophy } from 'lucide-react';

type AppView = 'category-select' | 'study' | 'results';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('category-select');
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>();
  
  const {
    categories,
    currentSession,
    isFlipped,
    startStudySession,
    flipCard,
    answerCard,
    endStudySession,
    resetSession,
    getCurrentCard,
    isSessionComplete,
    getSessionStats,
  } = useFlashcards();

  const handleSelectCategory = (categoryId: string | undefined) => {
    setSelectedCategoryId(categoryId);
  };

  const handleStartStudy = () => {
    startStudySession(selectedCategoryId);
    setCurrentView('study');
  };

  const handleCorrectAnswer = () => {
    answerCard(true);
  };

  const handleIncorrectAnswer = () => {
    answerCard(false);
  };

  const handleEndSession = () => {
    endStudySession();
    setCurrentView('results');
  };

  const handleRestart = () => {
    resetSession();
    setCurrentView('category-select');
    setSelectedCategoryId(undefined);
  };

  const currentCard = getCurrentCard();
  const sessionStats = getSessionStats();

  return (
    <div className="min-h-screen bg-gray-50">
      {currentView === 'study' && currentSession && (
        <Header
          currentCard={currentSession.currentCardIndex}
          totalCards={currentSession.cards.length}
          correctAnswers={currentSession.correctAnswers}
          onShowStats={() => {}}
          onShowSettings={() => {}}
        />
      )}

      <main className="container mx-auto px-4 py-8">
        {currentView === 'category-select' && (
          <CategorySelector
            categories={categories}
            selectedCategoryId={selectedCategoryId}
            onSelectCategory={handleSelectCategory}
            onStartStudy={handleStartStudy}
          />
        )}

        {currentView === 'study' && currentCard && !isSessionComplete() && (
          <div className="max-w-4xl mx-auto">
            <Flashcard
              card={currentCard}
              isFlipped={isFlipped}
              onFlip={flipCard}
              onCorrect={handleCorrectAnswer}
              onIncorrect={handleIncorrectAnswer}
            />
          </div>
        )}

        {currentView === 'study' && isSessionComplete() && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="card">
              <div className="mb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Gratulacje! 🎉
                </h2>
                <p className="text-gray-600">
                  Ukończyłeś sesję nauki!
                </p>
              </div>

              {sessionStats && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-gray-900">
                      {sessionStats.correctAnswers}/{sessionStats.totalCards}
                    </div>
                    <div className="text-sm text-gray-600">Prawidłowe odpowiedzi</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600">
                      {sessionStats.accuracy}%
                    </div>
                    <div className="text-sm text-gray-600">Dokładność</div>
                  </div>
                </div>
              )}

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleEndSession}
                  className="btn-primary flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  Zakończ sesję
                </button>
                <button
                  onClick={handleRestart}
                  className="btn-secondary flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  Nowa sesja
                </button>
              </div>
            </div>
          </div>
        )}

        {currentView === 'results' && sessionStats && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="card">
              <div className="mb-6">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Wyniki sesji
                </h2>
                <p className="text-gray-600">
                  Oto podsumowanie Twojej nauki
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {sessionStats.correctAnswers}/{sessionStats.totalCards}
                  </div>
                  <div className="text-sm text-gray-600">Prawidłowe odpowiedzi</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-600">
                    {sessionStats.accuracy}%
                  </div>
                  <div className="text-sm text-gray-600">Dokładność</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-600">
                    {Math.floor(sessionStats.timeSpent / 60)}:{(sessionStats.timeSpent % 60).toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-600">Czas nauki</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-purple-600">
                    {sessionStats.answeredCards}
                  </div>
                  <div className="text-sm text-gray-600">Odpowiedzi</div>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="btn-primary flex items-center gap-2"
                >
                  <Home className="w-4 h-4" />
                  Nowa sesja
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
