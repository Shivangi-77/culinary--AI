import React from 'react';
import { motion } from 'framer-motion';
import { UtensilsCrossed } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-6">
            <UtensilsCrossed size={48} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
            Turn Ingredients into Culinary Magic
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-2xl mx-auto">
            Enter what you have, and our AI will create delicious recipes tailored just for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-flex items-center space-x-2">
            <span className="text-sm md:text-base font-medium text-white">
              Just enter your ingredients below to get started →
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;