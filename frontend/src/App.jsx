import React, { useState } from 'react';
import Hero from './components/hero';
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'

function App() {
  

  return (
    <div className="max-h-screen bg-gray-50">
      <Sidebar />
      {/* <Navbar /> */}
      <Hero />
    </div>
  );
}

export default App;
