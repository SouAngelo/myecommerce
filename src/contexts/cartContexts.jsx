import { createContext, useState, useEffect } from "react";

export const cartContext = createContext({});

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(false)
  }, [])

  function addItemsCart(name, price, id, image) {
    const newItem = { name, price, id, image };

    setCart([...cart, newItem]);

  }

  function handleRemoveItem(index) {
    let filter = cart.filter((item) => cart.indexOf(item) !== index);

    setCart(filter);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{ addItemsCart, cart, handleRemoveItem, clearCart, loading}}
    >
      {children}
    </cartContext.Provider>
  );
}
