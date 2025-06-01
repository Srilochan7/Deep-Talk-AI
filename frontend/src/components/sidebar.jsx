import React from 'react';
import { Home, Star, Clock, ThumbsUp, HelpCircle } from 'lucide-react';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-gray-50 flex flex-col items-center py-4 space-y-6">
      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
        <Home className="w-4 h-4 text-white" />
      </div>
      <Star className="w-6 h-6 text-gray-400" />
      <Clock className="w-6 h-6 text-gray-400" />
      <ThumbsUp className="w-6 h-6 text-gray-400" />
      <div className="flex-1"></div>
      <HelpCircle className="w-6 h-6 text-gray-400" />
    </div>
  );
};


export default Sidebar