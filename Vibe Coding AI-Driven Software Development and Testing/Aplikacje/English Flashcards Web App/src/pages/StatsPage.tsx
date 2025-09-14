import React from 'react';

interface StatsPageProps {
  onNavigate: (page: string) => void;
  onBack: () => void;
}

const StatsPage: React.FC<StatsPageProps> = ({ onNavigate, onBack }) => {
  // Na razie statyczne dane - w przyszłości będzie to połączone z localStorage
  const stats = {
    totalFlashcards: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    categories: {
      zwierzeta: { studied: 0, correct: 0, wrong: 0 },
      jedzenie: { studied: 0, correct: 0, wrong: 0 },
      czasowniki: { studied: 0, correct: 0, wrong: 0 }
    }
  };

  const accuracy = stats.totalFlashcards > 0 
    ? Math.round((stats.correctAnswers / (stats.correctAnswers + stats.wrongAnswers)) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <div className="text-center mb-8">
          <button
            onClick={onBack}
            className="mb-4 text-gray-500 hover:text-gray-700 transition-colors"
          >
            ← Powrót
          </button>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            📊 Statystyki
          </h1>
          <p className="text-gray-600">
            Twoje postępy w nauce angielskiego
          </p>
        </div>

        {stats.totalFlashcards === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Brak danych
            </h3>
            <p className="text-gray-500 mb-6">
              Zacznij naukę, aby zobaczyć swoje statystyki!
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Rozpocznij naukę
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Ogólne statystyki */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Ogólne statystyki</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{stats.totalFlashcards}</div>
                  <div className="text-sm opacity-90">Przerobione fiszki</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{stats.correctAnswers}</div>
                  <div className="text-sm opacity-90">Poprawne odpowiedzi</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{accuracy}%</div>
                  <div className="text-sm opacity-90">Skuteczność</div>
                </div>
              </div>
            </div>

            {/* Statystyki według kategorii */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Statystyki według kategorii
              </h3>
              <div className="space-y-3">
                {Object.entries(stats.categories).map(([categoryId, categoryStats]) => {
                  const categoryName = {
                    zwierzeta: 'Zwierzęta',
                    jedzenie: 'Jedzenie',
                    czasowniki: 'Czasowniki'
                  }[categoryId];
                  
                  const categoryIcon = {
                    zwierzeta: '🐾',
                    jedzenie: '🍎',
                    czasowniki: '🏃'
                  }[categoryId];

                  const categoryAccuracy = categoryStats.studied > 0 
                    ? Math.round((categoryStats.correct / (categoryStats.correct + categoryStats.wrong)) * 100)
                    : 0;

                  return (
                    <div key={categoryId} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{categoryIcon}</span>
                          <span className="font-semibold text-gray-800">{categoryName}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-gray-800">
                            {categoryAccuracy}%
                          </div>
                          <div className="text-sm text-gray-500">
                            {categoryStats.studied} fiszek
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;
