import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800">
      <div className="flex items-center">
        <a href="#" className="text-white font-bold text-xl">Portfolio</a>
      </div>
      <div className="block">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-gray-400">Home</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Projects</a></li>
          <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
