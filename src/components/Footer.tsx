
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">

        <div className="text-center">
          <h3 className="text-xl font-heading font-semibold">
            Culinary<span className="text-primary-500">AI</span>
          </h3>

          <p className="text-gray-400 mt-2">
            AI-powered recipe inspiration
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Culinary AI. All rights reserved.
          </p>

          <p className="mt-1">
            Made with passion for food and technology.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
