import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Filter, ArrowLeft, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockProducts';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    let result = [...products];

    // Filter by category
    if (selectedCategory !== 'All' && selectedCategory !== 'Recommended') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // Filter by price
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default:
        break;
    }

    // Show recommended (new + high rated)
    if (selectedCategory === 'Recommended') {
      result = result.filter(p => p.isNew || p.rating >= 4.7);
    }

    setFilteredProducts(result);
  }, [selectedCategory, priceRange, sortBy]);

  const menuItems = [
    { name: 'Recommended', icon: <Sparkles size={18} className="text-[#fbbf24]" /> },
    { name: 'All', icon: null },
    ...categories.map(cat => ({ name: cat.name, icon: null }))
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf4 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#6b7280] hover:text-[#7c3aed] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1f2937]"
            style={{ fontFamily: 'Bangers, cursive' }}
          >
            Anime <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">Shop</span>
          </h1>
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="md:hidden ml-auto flex items-center gap-2 px-4 py-2 glass-card rounded-lg border border-[#e5e7eb]"
          >
            <Filter size={20} />
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside
            className={`${
              showMobileFilters ? 'block' : 'hidden'
            } md:block w-full md:w-64 space-y-6`}
          >
            {/* Category Menu */}
            <div className="glass-card p-6 rounded-xl border border-white/30">
              <h3 className="text-[#1f2937] font-semibold mb-4">Categories</h3>
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setSelectedCategory(item.name)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                      selectedCategory === item.name
                        ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white shadow-lg'
                        : 'text-[#6b7280] hover:bg-[#f3f4f6]'
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="glass-card p-6 rounded-xl border border-white/30">
              <h3 className="text-[#1f2937] font-semibold mb-4">Price Range</h3>
              <div className="space-y-4">
                <input
                  type="range"
                  min="0"
                  max="2000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full accent-[#7c3aed]"
                />
                <div className="flex items-center justify-between text-[#6b7280] text-sm">
                  <span>₹{priceRange[0]}</span>
                  <span>₹{priceRange[1]}</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="glass-card p-4 rounded-xl border border-white/30 mb-6 flex items-center justify-between">
              <p className="text-[#6b7280]">
                Showing <span className="font-semibold text-[#1f2937]">{filteredProducts.length}</span> of {products.length} products
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
              >
                <option value="default">Sort by: Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-[#6b7280] text-lg mb-4">No products found</p>
                <button
                  onClick={() => {
                    setSelectedCategory('All');
                    setPriceRange([0, 2000]);
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
