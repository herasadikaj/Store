import { useState, useEffect } from 'react';

interface Article {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
}

export const useCart = () => {
  const [cartItems, setCartItems] = useState<Article[]>(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Article) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (articleId: string) => {
    setCartItems(prevItems =>
      prevItems
        .map(item => 
          item.id === articleId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter(item => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = parseFloat(item.price || "0");
    return acc + price * item.quantity;
  }, 0);

  const getItemQuantity = (id: string) => {
    const item = cartItems.find(cartItem => cartItem.id === id);
    return item ? item.quantity : 0;
  };

  return { cartItems, addToCart, removeFromCart, clearCart, cartCount, totalPrice, getItemQuantity };
};
