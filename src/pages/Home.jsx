import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Package, Truck, Shield, Star } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/mockProducts';

const Home = () => {
  const navigate = useNavigate();
  const trendingProducts = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen"
      style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf4 100%)' }}
    >
      {/* Hero Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroCarousel />
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1f2937] text-center mb-8"
          style={{ fontFamily: 'Bangers, cursive' }}
        >
          Shop by <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">Category</span>
        </h2>
        <div 
          className="relative rounded-2xl overflow-hidden p-8"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1613376023733-0a73315d9b06)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/80 backdrop-blur-md"></div>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                onClick={() => navigate(`/shop?category=${category.name}`)}
                className="group cursor-pointer glass-card p-8 rounded-xl border border-white/30 hover:border-[#7c3aed] transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                <div className="text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-[#1f2937] font-semibold text-lg mb-2 group-hover:text-[#7c3aed] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-[#6b7280] text-sm">{category.count} Products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1f2937]"
            style={{ fontFamily: 'Bangers, cursive' }}
          >
            Trending <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">Products</span>
          </h2>
          <button
            onClick={() => navigate('/shop')}
            className="text-[#7c3aed] hover:text-[#3b82f6] transition-colors font-semibold"
          >
            View All →
          </button>
        </div>
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-6" style={{ width: 'max-content' }}>
            {trendingProducts.map((product) => (
              <div key={product.id} style={{ width: '280px' }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1f2937] text-center mb-12"
          style={{ fontFamily: 'Bangers, cursive' }}
        >
          Why Choose <span className="bg-gradient-to-r from-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">OtakuMerch?</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 rounded-xl border border-white/30 text-center hover:border-[#7c3aed] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] rounded-full mb-4 shadow-lg">
              <Package className="text-white" size={32} />
            </div>
            <h3 className="text-[#1f2937] font-bold text-xl mb-2">Authentic Products</h3>
            <p className="text-[#6b7280]">
              100% genuine anime merchandise from official licensors. No fakes, guaranteed!
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl border border-white/30 text-center hover:border-[#3b82f6] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3b82f6] to-[#10b981] rounded-full mb-4 shadow-lg">
              <Truck className="text-white" size={32} />
            </div>
            <h3 className="text-[#1f2937] font-bold text-xl mb-2">Fast Delivery</h3>
            <p className="text-[#6b7280]">
              Free shipping on orders above ₹999. Get your merch delivered in 3-5 days!
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl border border-white/30 text-center hover:border-[#10b981] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#fbbf24] rounded-full mb-4 shadow-lg">
              <Shield className="text-white" size={32} />
            </div>
            <h3 className="text-[#1f2937] font-bold text-xl mb-2">Secure Payment</h3>
            <p className="text-[#6b7280]">
              Multiple payment options including COD, UPI, and cards. Your data is safe!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#1f2937] text-center mb-12"
          style={{ fontFamily: 'Bangers, cursive' }}
        >
          What Our <span className="bg-gradient-to-r from-[#f472b6] to-[#fbbf24] bg-clip-text text-transparent">Otakus</span> Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="glass-card p-6 rounded-xl border border-white/30 hover:border-[#7c3aed] transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-[#fbbf24] text-[#fbbf24]" />
                ))}
              </div>
              <p className="text-[#6b7280] mb-4">
                "Amazing quality and fast delivery! Got my Naruto figurine in perfect condition. Will definitely order again!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] rounded-full" />
                <div>
                  <p className="text-[#1f2937] font-semibold">Anime Fan {i}</p>
                  <p className="text-[#6b7280] text-sm">Mumbai, India</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
