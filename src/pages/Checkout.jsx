import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, getShipping, getFinalTotal, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (Object.values(formData).some(val => val === '')) {
      toast.error('Error', {
        description: 'Please fill all fields'
      });
      return;
    }

    console.log('Order placed:', { formData, paymentMethod, cart, total: getFinalTotal() });
    toast.success('Order Placed Successfully!', {
      description: 'Your order will be delivered in 3-5 business days.'
    });

    clearCart();
    setTimeout(() => navigate('/'), 2000);
  };

  if (cart.length === 0) {
    navigate('/cart');
    return null;
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
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">Checkout</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="glass-card rounded-xl p-6 border border-white/30">
                <h2 className="text-xl font-bold text-[#1f2937] mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#6b7280] mb-2">First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6b7280] mb-2">Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6b7280] mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-[#6b7280] mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="glass-card rounded-xl p-6 border border-white/30">
                <h2 className="text-xl font-bold text-[#1f2937] mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[#6b7280] mb-2">Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[#6b7280] mb-2">City *</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6b7280] mb-2">State *</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6b7280] mb-2">Pincode *</label>
                      <input
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 bg-white text-[#1f2937] border border-[#e5e7eb] rounded-lg focus:outline-none focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 transition-all"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass-card rounded-xl p-6 border border-white/30">
                <h2 className="text-xl font-bold text-[#1f2937] mb-4">Payment Method</h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#e5e7eb] cursor-pointer hover:border-[#7c3aed] transition-all">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === 'cod'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-[#7c3aed]"
                    />
                    <div>
                      <div className="text-[#1f2937] font-semibold">Cash on Delivery</div>
                      <div className="text-[#6b7280] text-sm">Pay when you receive</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#e5e7eb] cursor-pointer hover:border-[#7c3aed] transition-all">
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === 'upi'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-[#7c3aed]"
                    />
                    <div>
                      <div className="text-[#1f2937] font-semibold">UPI</div>
                      <div className="text-[#6b7280] text-sm">Google Pay, PhonePe, Paytm</div>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#e5e7eb] cursor-pointer hover:border-[#7c3aed] transition-all">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="accent-[#7c3aed]"
                    />
                    <div>
                      <div className="text-[#1f2937] font-semibold">Credit/Debit Card</div>
                      <div className="text-[#6b7280] text-sm">Visa, Mastercard, RuPay</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-card rounded-xl p-6 border border-white/30 sticky top-24">
                <h2 className="text-xl font-bold text-[#1f2937] mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="flex gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded border border-[#e5e7eb]" />
                      <div className="flex-1">
                        <p className="text-[#1f2937] text-sm font-semibold line-clamp-2">{item.name}</p>
                        <p className="text-[#6b7280] text-sm">Qty: {item.quantity}</p>
                      </div>
                      <span className="text-[#7c3aed] font-semibold">₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pt-4 border-t border-[#e5e7eb]">
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
                  <div className="flex justify-between text-[#1f2937] text-xl font-bold pt-3 border-t border-[#e5e7eb]">
                    <span>Total</span>
                    <span>₹{getFinalTotal()}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
