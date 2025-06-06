import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">OK DOCS MASTER</h1>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/getting" className="hover:text-gray-400">Getting Started</a>
          {/* <a href="/installation" className="hover:text-gray-400">Installation</a> */}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden px-3 py-2 bg-gray-700 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu - Toggle */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-2">
          <a href="/" className="block bg-gray-800 p-2 rounded">Home</a>
          <a href="/about" className="block bg-gray-800 p-2 rounded">About</a>
          <a href="/getting" className="block bg-gray-800 p-2 rounded">Getting Started</a>
          {/* <a href="/installation" className="block bg-gray-800 p-2 rounded">Installation</a> */}
        </nav>
      )}
    </header>
  );
}
