// Reusable Navbar Component
import { ChevronRight, Plus, MessageCircle } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* <div
  className="w-8 h-8 rounded-lg flex items-center justify-center"
  style={{ backgroundColor: "#7F5AF0" }}
>
          <span className="text-white font-bold text-sm"></span>
        </div> */}
        <span className="text-xl font-semibold text-gray-800">Nika AI</span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-violetBrand font-medium"
        style={{ text: "#7F5AF0" }}
        >Home</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">About </a>
        <a href="#" className="text-gray-600 hover:text-gray-800">New plan</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Reports</a>
        {/* <a href="#" className="text-gray-600 hover:text-gray-800">Diet Plans</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Find Gyms</a> */}
      </div>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-black rounded-full"></div>
          <span className="text-sm text-gray-600">aimbot</span>
          <ChevronRight className="w-4 h-4 text-gray-400 rotate-90" />
        </div>
      </div>
    </nav>
  );
};


export default Navbar