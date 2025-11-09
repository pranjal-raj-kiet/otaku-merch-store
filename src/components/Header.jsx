import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Store } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { getCartCount } = useCart();
  const navigate = useNavigate();

  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-50 glass border-b border-[#e5e7eb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-bold" style={{ fontFamily: 'Bangers, cursive' }}>
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">Otaku</span>
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] bg-clip-text text-transparent">Merch</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200 font-medium">
              Home
            </Link>
            <Link to="/shop" className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200 font-medium">
              Shop
            </Link>
            <a href="#about" className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200 font-medium">
              Contact
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Shop Button */}
            <button
              onClick={() => navigate('/shop')}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
            >
              <Store size={18} />
              Shop
            </button>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200"
            >
              <Search size={20} />
            </button>

            {/* Cart */}
            <button
              onClick={() => navigate('/cart')}
              className="relative text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-[#f472b6] to-[#fbbf24] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="py-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <input
              type="text"
              placeholder="Search for anime merch..."
              className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
            />
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-[#e5e7eb] animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              to="/shop"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200 font-medium"
            >
              Shop
            </Link>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1f2937] hover:text-[#7c3aed] transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
