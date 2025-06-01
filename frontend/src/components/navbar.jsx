// Reusable Navbar Component
import { ChevronRight, Plus, MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-16 right-0 h-16 bg-grey  flex items-center justify-between px-6">
      <div className="flex items-center space-x-2">
        <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
        <span className="text-gray-600 font-medium">home</span>
      </div>
      <div className="flex items-center space-x-4">
        {/* <span className="text-gray-600">gen z mode</span> */}
        <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
          <span className="text-xs text-gray-600">⚙️</span>
        </div>
      </div>
    </div>
  );
};


export default Navbar