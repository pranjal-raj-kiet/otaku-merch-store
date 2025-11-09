import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 glass-card p-4 rounded-xl border border-[#e5e7eb]">
      <img
        src={item.image}
        alt={item.name}
        className="w-24 h-24 object-cover rounded-lg border border-[#e5e7eb]"
      />

      <div className="flex-1">
        <h3 className="text-[#1f2937] font-semibold mb-1">{item.name}</h3>
        <p className="text-[#6b7280] text-sm mb-2">
          {item.selectedSize && `Size: ${item.selectedSize}`}
          {item.selectedSize && item.selectedColor && ' | '}
          {item.selectedColor && `Color: ${item.selectedColor}`}
        </p>
        <p className="text-[#7c3aed] font-bold">₹{item.price}</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-white rounded-lg border border-[#e5e7eb]">
          <button
            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
            className="p-2 text-[#6b7280] hover:text-[#f472b6] transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="text-[#1f2937] font-semibold min-w-[2rem] text-center">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
            className="p-2 text-[#6b7280] hover:text-[#10b981] transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>

        <button
          onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
          className="p-2 text-[#6b7280] hover:text-[#f472b6] transition-colors"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
