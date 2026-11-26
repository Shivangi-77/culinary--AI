import { useState } from 'react';
import axios from 'axios';
import { Recipe } from '../types';

// For local development, this would point to your local server
const API_URL = 'http://localhost:5000/api/generate-recipe';

export const useRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generateRecipe = async (ingredients: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(API_URL, { ingredients });
      
      // Add a slight delay to display loading state (better UX)
      setTimeout(() => {
        setRecipe(response.data.recipe);
        setLoading(false);
      }, 800);
    } catch (err) {
      console.error('Error generating recipe:', err);
      setError('Failed to generate recipe. Please try again later.');
      setLoading(false);
    }
  };

  const resetRecipe = () => {
    setRecipe(null);
    setError(null);
  };

  return {
    recipe,
    loading,
    error,
    generateRecipe,
    resetRecipe
  };
};