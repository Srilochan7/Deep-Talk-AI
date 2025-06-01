import React from 'react';
import { Home, Star, Clock, ThumbsUp, HelpCircle } from 'lucide-react';

// Sidebar Component
const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-grey flex flex-col items-center py-4 space-y-4">
      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
        <Home className="w-4 h-4 text-white" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer">
        <Star className="w-5 h-5 text-gray-400" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer">
        <Clock className="w-5 h-5 text-gray-400" />
      </div>
      <div className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer">
        <ThumbsUp className="w-5 h-5 text-gray-400" />
      </div>
      <div className="flex-1"></div>
      <div className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 cursor-pointer">
        <HelpCircle className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
};

export default Sidebar;