import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Hero from './components/Hero';
import IngredientInput from './components/IngredientInput';
import RecipeDisplay from './components/RecipeDisplay';
import { useRecipe } from './hooks/useRecipe';

function App() {
  const { recipe, loading, error, generateRecipe, resetRecipe } = useRecipe();

  return (
    <div className="flex flex-col min-h-screen pattern-background">
      <Header />
      
      {!recipe && <Hero />}
      
      <main className="flex-grow py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatePresence mode="wait">
            {recipe ? (
              <motion.div
                key="recipe"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <RecipeDisplay recipe={recipe} onBack={resetRecipe} />
              </motion.div>
            ) : (
              <motion.div
                key="input"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <IngredientInput 
                  onSubmit={generateRecipe} 
                  isLoading={loading}
                  error={error}
                />
              </motion.div>
            )}
          </AnimatePresence>
          
          {loading && (
            <motion.div 
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="inline-flex flex-col items-center p-6 rounded-lg bg-white shadow-md">
                <div className="relative w-20 h-20 mb-4">
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin"></div>
                </div>
                <p className="text-xl font-heading font-semibold text-gray-800">
                  Cooking up your recipe...
                </p>
                <p className="text-gray-600 mt-2">
                  Our AI chef is hard at work creating something delicious!
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;