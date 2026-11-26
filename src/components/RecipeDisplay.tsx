import React from 'react';
import { motion } from 'framer-motion';
import { Recipe } from '../types';
import { Clock, Bookmark, Share2 } from 'lucide-react';

interface RecipeDisplayProps {
  recipe: Recipe;
  onBack: () => void;
}

const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe, onBack }) => {
  if (!recipe || !recipe.title) return null;

  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-6 md:p-8 text-white">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold mb-2">
          {recipe.title}
        </h2>
        <div className="flex items-center text-primary-100">
          <Clock size={18} className="mr-1" />
          <span className="text-sm">Estimated cook time: 30-45 minutes</span>
        </div>
      </div>
      
      <div className="p-6 md:p-8">
        <div className="recipe-section">
          <h3 className="recipe-subtitle">Ingredients</h3>
          <ul className="recipe-list">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="py-1">{ingredient}</li>
            ))}
          </ul>
        </div>
        
        <div className="recipe-section border-t border-gray-100 pt-6">
          <h3 className="recipe-subtitle">Instructions</h3>
          <div className="space-y-4 mt-4">
            {recipe.instructions.map((step, index) => (
              <div key={index} className="recipe-step">
                <div className="flex">
                  <span className="recipe-step-number">{index + 1}.</span>
                  <p>{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-6 border-t border-gray-100">
          <button 
            onClick={onBack}
            className="mb-4 sm:mb-0 text-primary-500 hover:text-primary-600 font-medium"
          >
            ← Try with different ingredients
          </button>
          
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-600 hover:text-primary-500 transition-colors">
              <Bookmark size={18} className="mr-1" />
              <span>Save</span>
            </button>
            <button className="flex items-center text-gray-600 hover:text-primary-500 transition-colors">
              <Share2 size={18} className="mr-1" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default RecipeDisplay;