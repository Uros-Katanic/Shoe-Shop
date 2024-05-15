import React, { createContext, useState, useContext, useEffect } from "react";
import cartService from "../../services/cartService";

export interface CartItem {
  id: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  cartCount: number;
  setCartCount: (count: number) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  cartCount: 0,
  setCartCount: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0); // State for cartCount

  useEffect(() => {
    // Load cart items from local storage
    const storedCartItems = localStorage.getItem("cart");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
      setCartCount(cartService.getTotalNumberOfCartItems());
    }
  }, []);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += item.quantity;
        return updatedItems;
      }

      return [...prevItems, item];
    });

    // Update cartCount
    setCartCount((prevCount) => prevCount + item.quantity);
  };

  useEffect(() => {
    // Save cart items to local storage
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, cartCount, setCartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);
