import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowRight, ArrowLeft } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, getShipping, getFinalTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf4 100%)' }}>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 glass-card rounded-full mb-6">
            <ShoppingBag size={48} className="text-[#6b7280]" />
          </div>
          <h2 className="text-[#1f2937] text-3xl font-bold mb-4" style={{ fontFamily: 'Bangers, cursive' }}>
            Your Cart is Empty
          </h2>
          <p className="text-[#6b7280] mb-8">Add some awesome anime merch to your cart!</p>
          <button
            onClick={() => navigate('/shop')}
            className="px-8 py-3 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
          >
            Start Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf4 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#6b7280] hover:text-[#7c3aed] transition-colors mb-6"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>

        <h1
          className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-8"
          style={{ fontFamily: 'Bangers, cursive' }}
        >
          Shopping <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">Cart</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <CartItem key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`} item={item} />
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-xl p-6 border border-white/30 sticky top-24">
              <h2 className="text-xl font-bold text-[#1f2937] mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-[#6b7280]">
                  <span>Subtotal</span>
                  <span>₹{getCartTotal()}</span>
                </div>
                <div className="flex justify-between text-[#6b7280]">
                  <span>Shipping</span>
                  <span className={getShipping() === 0 ? 'text-[#10b981] font-semibold' : ''}>
                    {getShipping() === 0 ? 'FREE' : `₹${getShipping()}`}
                  </span>
                </div>
                {getCartTotal() < 999 && (
                  <p className="text-sm text-[#10b981]">
                    Add ₹{999 - getCartTotal()} more for free shipping!
                  </p>
                )}
                <div className="border-t border-[#e5e7eb] pt-4">
                  <div className="flex justify-between text-[#1f2937] text-xl font-bold">
                    <span>Total</span>
                    <span>₹{getFinalTotal()}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/checkout')}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
              >
                Proceed to Checkout
                <ArrowRight size={20} />
              </button>

              <button
                onClick={() => navigate('/shop')}
                className="w-full mt-3 px-6 py-3 bg-white text-[#7c3aed] border border-[#e5e7eb] rounded-lg hover:border-[#7c3aed] transition-all duration-200 font-semibold"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
