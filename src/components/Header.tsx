import React from 'react';
import { ChefHat } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="p-4 md:p-6 bg-white shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ChefHat size={32} className="text-primary-500" />
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-gray-900">
            Culinary<span className="text-primary-500">AI</span>
          </h1>
        </div>
        <div className="hidden md:block">
          <p className="text-gray-600 italic font-heading">
            "Turn your ingredients into culinary masterpieces"
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;