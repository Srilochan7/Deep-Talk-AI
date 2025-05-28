import React from 'react';
import { ChevronRight, Plus, MessageCircle } from 'lucide-react';
import Navbar from './navbar';

// Hero Component
const Hero = () => {
  return (
    <div>
      {/* Add floating animation styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes floatGlow {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px);
          }
        }
        
        @keyframes floatGlowSlow {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0px);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-glow {
          animation: floatGlow 4.5s ease-in-out infinite;
        }
        
        .animate-float-glow-slow {
          animation: floatGlowSlow 5s ease-in-out infinite;
        }
      `}</style>
      
      
       <div className="relative min-h-screen bg-gradient-to-br from-violet-50 via-white to-violet-100 overflow-hidden">
        <Navbar/>
      {/* Violet glow effect */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-violetBrand rounded-full opacity-20 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6  pb-0">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-4 h-4 bg-violet-100 rounded flex items-center justify-center">
                <span className="text-violetBrand text-xs">%</span>
              </div>
              <span>Your Fitness Journey Starts Here</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-800">Your </span>
                <span className="text-violetBrand">Personal</span>
                <br />
                <span className="text-gray-800">Guide To </span>
                <span className="text-violetBrand">Fitness</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Explore customized exercises for your fitness level. Track progress, stay motivated, 
              and build a stronger, healthier you.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button className="bg-violetBrand hover:bg-violet-600 text-white px-8 py-4 rounded-xl font-medium flex items-center space-x-2 transition-colors">
                <span>Browse Exercises</span>
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <button className="border border-gray-300 hover:border-violetBrand hover:text-violetBrand text-gray-700 px-6 py-4 rounded-xl font-medium flex items-center space-x-2 transition-colors">
                <span>Create Workout</span>
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Content - Character Image */}
          <div className="relative flex justify-end lg:justify-start lg:pl-20">
            <div className="relative">
              {/* Character image with proper sizing, positioning and floating animation */}
              <div className="relative w-96 h-[800px] flex items-end justify-center">
                <img 
                  src="/assets/home.png" // Corrected path (remove ../public)
                  alt="Fitness character"
                  className="h-full w-auto object-contain object-bottom max-w-none animate-float"
                  style={{ filter: 'drop-shadow(0 0 50px rgba(127, 90, 240, 0.3))' }}
                />
              </div>
              
              {/* Violet glow behind image - also floating */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-violetBrand rounded-full opacity-10 blur-3xl -z-10 animate-float-glow"></div>
              
              {/* Additional smaller glow for more dramatic effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violetBrand rounded-full opacity-15 blur-2xl -z-10 animate-float-glow-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-violetBrand hover:bg-violet-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors">
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
    </div>
  );
};

export default Hero;