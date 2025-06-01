import React from 'react';
import { ChevronRight, Plus, MessageCircle } from 'lucide-react';
import Navbar from './navbar';

// Hero Component
const Hero = () => {
  return (
    <div className="ml-16 mt-16 min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <div className="flex items-center justify-center space-x-3">
          <div className="w-12 h-12 bg-yellow-400 rounded-full"></div>
          <h1 className="text-4xl font-normal text-gray-900">morning</h1>
        </div>
        
        <div className="space-y-6 max-w-sm">
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900 font-medium">voice mode</div>
                <div className="text-gray-400 text-sm">monthly limit reached</div>
              </div>
              <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-xs">🔒</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-gray-900 font-medium">text mode</div>
                <div className="text-gray-400 text-sm">not in the talking mood?</div>
              </div>
              <div className="w-6 h-6 flex items-center justify-center">
                <span className="text-gray-400">></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};