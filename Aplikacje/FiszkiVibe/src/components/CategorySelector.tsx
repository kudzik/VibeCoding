import React from 'react';
import type { Category } from '../types';
import { cn } from '../utils/cn';

interface CategorySelectorProps {
  categories: Category[];
  selectedCategoryId?: string;
  onSelectCategory: (categoryId: string | undefined) => void;
  onStartStudy: () => void;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory,
  onStartStudy,
}) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Wybierz kategorię do nauki
        </h2>
        <p className="text-gray-600">
          Wybierz kategorię słówek, którą chcesz powtórzyć
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Opcja "Wszystkie kategorie" */}
        <div
          className={cn(
            'card cursor-pointer transition-all duration-200 hover:shadow-lg',
            !selectedCategoryId
              ? 'ring-2 ring-primary-500 bg-primary-50'
              : 'hover:bg-gray-50'
          )}
          onClick={() => onSelectCategory(undefined)}
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Wszystkie kategorie
            </h3>
            <p className="text-gray-600 mb-4">
              Wszystkie dostępne słówka
            </p>
            <div className="text-sm text-gray-500">
              {categories.reduce((sum, cat) => sum + cat.cardCount, 0)} kart
            </div>
          </div>
        </div>

        {/* Kategorie */}
        {categories.map((category) => (
          <div
            key={category.id}
            className={cn(
              'card cursor-pointer transition-all duration-200 hover:shadow-lg',
              selectedCategoryId === category.id
                ? 'ring-2 ring-primary-500 bg-primary-50'
                : 'hover:bg-gray-50'
            )}
            onClick={() => onSelectCategory(category.id)}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: category.color }}
              >
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {category.description}
              </p>
              <div className="text-sm text-gray-500">
                {category.cardCount} kart
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Przycisk rozpoczęcia nauki */}
      <div className="text-center">
        <button
          onClick={onStartStudy}
          className="btn-primary text-lg px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedCategoryId && categories.length === 0}
        >
          Rozpocznij naukę
        </button>
      </div>
    </div>
  );
};
