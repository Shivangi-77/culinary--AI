import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

interface IngredientInputProps {
  onSubmit: (ingredients: string) => void;
  isLoading: boolean;
  error: string | null;
}

const IngredientInput: React.FC<IngredientInputProps> = ({ onSubmit, isLoading, error }) => {
  const [ingredients, setIngredients] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredients.trim()) {
      onSubmit(ingredients.trim());
    }
  };

  return (
    <motion.div 
      className="card bg-white p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-4">
        What's in your kitchen?
      </h2>
      <p className="text-gray-600 mb-6">
        Enter ingredients you have available, separated by commas. Our AI will create a delicious recipe for you!
      </p>
      
      {error && (
        <div className="mb-6 p-4 bg-red-50 border-l-4 border-error-500 text-error-500 flex items-start">
          <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
          <p>{error}</p>
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-gray-700 mb-2 font-medium">
            Your Ingredients
          </label>
          <textarea
            id="ingredients"
            className="input-field h-32 resize-none"
            placeholder="e.g. chicken, rice, bell peppers, onions, garlic"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            disabled={isLoading}
            required
          />
          <p className="text-xs text-gray-500 mt-2">
            Pro tip: The more specific you are, the better your recipe will be!
          </p>
        </div>
        
        <button 
          type="submit" 
          className="btn btn-primary w-full flex justify-center items-center"
          disabled={isLoading || !ingredients.trim()}
        >
          {isLoading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Creating Recipe...
            </>
          ) : (
            'Generate Recipe'
          )}
        </button>
      </form>
    </motion.div>
  );
};

export default IngredientInput;