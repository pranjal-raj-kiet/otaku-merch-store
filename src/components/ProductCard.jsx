import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group cursor-pointer glass-card rounded-xl overflow-hidden border border-[#e5e7eb] hover:border-[#7c3aed] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-[#f5f7fa] to-[#e8ecf4]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.isNew && (
          <span className="absolute top-2 right-2 bg-gradient-to-r from-[#10b981] to-[#3b82f6] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            NEW
          </span>
        )}
        {product.originalPrice && (
          <span className="absolute top-2 left-2 bg-gradient-to-r from-[#f472b6] to-[#fbbf24] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            SALE
          </span>
        )}
      </div>

      <div className="p-4 bg-white">
        <h3 className="text-[#1f2937] font-semibold mb-2 line-clamp-2 group-hover:text-[#7c3aed] transition-colors duration-200">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={i < Math.floor(product.rating) ? 'fill-[#fbbf24] text-[#fbbf24]' : 'text-[#e5e7eb]'}
            />
          ))}
          <span className="text-[#6b7280] text-sm ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[#7c3aed] font-bold text-lg">₹{product.price}</span>
          {product.originalPrice && (
            <span className="text-[#6b7280] line-through text-sm">₹{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
