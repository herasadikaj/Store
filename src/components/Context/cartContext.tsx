import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Article } from './articles'; // Import your Article type if needed

interface CartContextType {
    cart: Article[];
    addToCart: (article: Article) => void;
    removeFromCart: (id: string) => void;
    clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Article[]>(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

 
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (article: Article) => {
        setCart(prevCart => {
            const existingItemIndex = prevCart.findIndex(item => item.id === article.id);
            if (existingItemIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingItemIndex].quantity += article.quantity; // Update quantity
                return updatedCart;
            }
            return [...prevCart, article]; // Add new item
        });
    };

    const removeFromCart = (id: string) => {
        setCart(prevCart => prevCart.filter(article => article.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
