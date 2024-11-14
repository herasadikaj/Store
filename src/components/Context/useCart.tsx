import { useState, useEffect } from 'react';

export const useCart = () => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cartItems');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Add item to the cart or update quantity
    const addToCart = (product) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                // Item exists, so we update the quantity
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                // Item does not exist, add new item with quantity 1
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove item from the cart or reduce its quantity
    const removeFromCart = (articleId) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.map(item =>
                item.id === articleId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ).filter(item => item.quantity > 0); // Remove items with 0 quantity
            return updatedItems;
        });
    };

    // Clear all items in the cart
    const clearCart = () => {
        setCartItems([]);
    };

    // Calculate the total quantity of items in the cart
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Calculate the total price of items in the cart
    const totalPrice = cartItems.reduce((acc, item) => {
        const price = parseFloat(item.price || '0'); // Default to '0' if price is invalid
        const quantity = parseInt(item.quantity, 10);
        return acc + price * quantity;
    }, 0);

    // Get the quantity of a specific item by its ID
    const getItemQuantity = (id) => {
        const item = cartItems.find((cartItem) => cartItem.id === id);
        return item ? item.quantity : 0;
    };

    // Sync cart items to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    return { cartItems, addToCart, removeFromCart, clearCart, cartCount, totalPrice, getItemQuantity };
};
