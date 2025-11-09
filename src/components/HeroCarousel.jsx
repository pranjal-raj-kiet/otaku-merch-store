import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77',
    title: 'Welcome to OtakuMerch',
    subtitle: 'Your Ultimate Anime Merchandise Destination'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b06',
    title: 'Exclusive Collections',
    subtitle: 'Authentic Anime Merch from Your Favorite Series'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186',
    title: 'Fast Delivery',
    subtitle: 'Free Shipping on Orders Above ₹999'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-2xl">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f2937]/80 via-[#1f2937]/60 to-transparent flex items-center">
              <div className="max-w-2xl px-8 md:px-16">
                <h2
                  className="text-4xl md:text-6xl font-bold text-white mb-4"
                  style={{ fontFamily: 'Bangers, cursive' }}
                >
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-6">{slide.subtitle}</p>
                <button className="px-8 py-3 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold transform hover:scale-105">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 glass text-[#1f2937] p-2 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 glass text-[#1f2937] p-2 rounded-full hover:bg-white transition-all duration-200 shadow-lg"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 w-3 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
