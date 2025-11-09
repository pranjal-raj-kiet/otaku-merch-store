import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingCart, CreditCard, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';
import { products } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.variants.size[0]);
  const [selectedColor, setSelectedColor] = useState(product?.variants.color[0]);
  const [expandedAccordion, setExpandedAccordion] = useState('details');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #e8ecf4 100%)' }}>
        <div className="text-center">
          <h2 className="text-[#1f2937] text-2xl mb-4">Product not found</h2>
          <button
            onClick={() => navigate('/shop')}
            className="px-6 py-2 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-lg hover:shadow-lg transition-all"
          >
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    toast.success('Added to cart!', {
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, quantity, selectedSize, selectedColor);
    navigate('/checkout');
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="glass-card rounded-xl overflow-hidden mb-4 border border-white/30">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`glass-card rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    mainImage === img ? 'border-[#7c3aed] shadow-lg' : 'border-white/30 hover:border-[#7c3aed]/60'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-24 object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-2">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={i < Math.floor(product.rating) ? 'fill-[#fbbf24] text-[#fbbf24]' : 'text-[#e5e7eb]'}
                  />
                ))}
              </div>
              <span className="text-[#6b7280]">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl font-bold text-[#7c3aed]">₹{product.price}</span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-[#6b7280] line-through">₹{product.originalPrice}</span>
                  <span className="px-3 py-1 bg-gradient-to-r from-[#f472b6] to-[#fbbf24] text-white rounded-full text-sm font-bold">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-[#6b7280] mb-6 leading-relaxed">{product.description}</p>

            {/* Size */}
            {product.variants.size.length > 1 && (
              <div className="mb-6">
                <h3 className="text-[#1f2937] font-semibold mb-3">Size</h3>
                <div className="flex gap-3">
                  {product.variants.size.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        selectedSize === size
                          ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] border-[#7c3aed] text-white shadow-lg'
                          : 'bg-white border-[#e5e7eb] text-[#6b7280] hover:border-[#7c3aed]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color */}
            {product.variants.color.length > 1 && (
              <div className="mb-6">
                <h3 className="text-[#1f2937] font-semibold mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.variants.color.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? 'bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] border-[#7c3aed] text-white shadow-lg'
                          : 'bg-white border-[#e5e7eb] text-[#6b7280] hover:border-[#7c3aed]'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-6">
              <h3 className="text-[#1f2937] font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3 bg-white rounded-lg w-fit border border-[#e5e7eb]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-[#6b7280] hover:text-[#f472b6] transition-colors"
                >
                  <Minus size={20} />
                </button>
                <span className="text-[#1f2937] font-semibold text-lg min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-[#6b7280] hover:text-[#10b981] transition-colors"
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#7c3aed] border-2 border-[#7c3aed] rounded-lg hover:bg-[#7c3aed] hover:text-white transition-all duration-200 font-semibold shadow-lg"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white rounded-lg hover:shadow-2xl transition-all duration-200 font-semibold"
              >
                <CreditCard size={20} />
                Buy Now
              </button>
            </div>

            {/* Accordion */}
            <div className="space-y-2">
              {/* Details */}
              <div className="glass-card rounded-lg border border-white/30 overflow-hidden">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 'details' ? '' : 'details')}
                  className="w-full flex items-center justify-between p-4 text-[#1f2937] hover:text-[#7c3aed] transition-colors"
                >
                  <span className="font-semibold">Product Details</span>
                  {expandedAccordion === 'details' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedAccordion === 'details' && (
                  <div className="px-4 pb-4 text-[#6b7280]">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Category: {product.category}</li>
                      <li>In Stock: {product.inStock ? 'Yes' : 'No'}</li>
                      <li>Rating: {product.rating}/5 based on {product.reviews} reviews</li>
                      <li>100% Authentic Product</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="glass-card rounded-lg border border-white/30 overflow-hidden">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 'shipping' ? '' : 'shipping')}
                  className="w-full flex items-center justify-between p-4 text-[#1f2937] hover:text-[#7c3aed] transition-colors"
                >
                  <span className="font-semibold">Shipping Info</span>
                  {expandedAccordion === 'shipping' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedAccordion === 'shipping' && (
                  <div className="px-4 pb-4 text-[#6b7280]">
                    <ul className="list-disc list-inside space-y-1">
                      <li>Free shipping on orders above ₹999</li>
                      <li>Standard delivery: 3-5 business days</li>
                      <li>Express delivery available</li>
                      <li>Ships to all over India</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Returns */}
              <div className="glass-card rounded-lg border border-white/30 overflow-hidden">
                <button
                  onClick={() => setExpandedAccordion(expandedAccordion === 'returns' ? '' : 'returns')}
                  className="w-full flex items-center justify-between p-4 text-[#1f2937] hover:text-[#7c3aed] transition-colors"
                >
                  <span className="font-semibold">Returns & Exchange</span>
                  {expandedAccordion === 'returns' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {expandedAccordion === 'returns' && (
                  <div className="px-4 pb-4 text-[#6b7280]">
                    <ul className="list-disc list-inside space-y-1">
                      <li>7-day easy returns</li>
                      <li>Free return pickup</li>
                      <li>Exchange available</li>
                      <li>Damaged products fully refunded</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
