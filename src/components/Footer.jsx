import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="glass-card border-t border-[#e5e7eb] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Bangers, cursive' }}>
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">Otaku</span>
              <span className="bg-gradient-to-r from-[#3b82f6] to-[#10b981] bg-clip-text text-transparent">Merch</span>
            </h3>
            <p className="text-[#6b7280] mb-4">
              Your one-stop shop for authentic anime merchandise. From keychains to figurines, we've got everything an otaku needs!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#6b7280] hover:text-[#7c3aed] transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-[#6b7280] hover:text-[#3b82f6] transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-[#6b7280] hover:text-[#10b981] transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-[#6b7280] hover:text-[#f472b6] transition-colors duration-200">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#1f2937] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#6b7280] hover:text-[#7c3aed] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-[#6b7280] hover:text-[#7c3aed] transition-colors duration-200">
                  Shop
                </Link>
              </li>
              <li>
                <a href="#" className="text-[#6b7280] hover:text-[#7c3aed] transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6b7280] hover:text-[#7c3aed] transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#6b7280] hover:text-[#7c3aed] transition-colors duration-200">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-[#1f2937] mb-4">Newsletter</h4>
            <p className="text-[#6b7280] mb-4">
              Subscribe to get special offers and exclusive anime drops!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-l-lg focus:outline-none focus:border-[#7c3aed] transition-colors"
              />
              <button className="px-6 py-2 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-r-lg hover:shadow-lg transition-all duration-200 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#e5e7eb] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#6b7280] text-sm mb-4 md:mb-0">
              © 2025 OtakuMerch. All rights reserved. Made with ❤️ for anime fans.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-[#6b7280] text-sm">We Accept:</span>
              <div className="flex space-x-2">
                <div className="px-3 py-1 bg-white rounded text-[#1f2937] text-xs font-semibold border border-[#e5e7eb]">COD</div>
                <div className="px-3 py-1 bg-white rounded text-[#1f2937] text-xs font-semibold border border-[#e5e7eb]">UPI</div>
                <div className="px-3 py-1 bg-white rounded text-[#1f2937] text-xs font-semibold border border-[#e5e7eb]">CARD</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
