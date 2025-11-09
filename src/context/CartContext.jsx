import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('otakuMerchCart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('otakuMerchCart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity = 1, selectedSize = null, selectedColor = null) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => 
        item.id === product.id && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && 
          item.selectedSize === selectedSize && 
          item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity, selectedSize, selectedColor }];
    });
  };

  const removeFromCart = (productId, selectedSize, selectedColor) => {
    setCart(prevCart => 
      prevCart.filter(item => 
        !(item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor)
      )
    );
  };

  const updateQuantity = (productId, selectedSize, selectedColor, quantity) => {
    if (quantity < 1) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const getShipping = () => {
    const total = getCartTotal();
    return total > 999 ? 0 : 50;
  };

  const getFinalTotal = () => {
    return getCartTotal() + getShipping();
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
        getShipping,
        getFinalTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
