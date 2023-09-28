"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
const Store = createContext<any>(null);

const GLobalContext = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<any>([]);
  const [openCart, setOpenCart] = useState(false);
  const [token, setToken] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const userLogin = useCallback(
    async (user: { username: string; password: string }) => {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      const data = await res.json();

      localStorage.setItem("token", JSON.stringify(data));
      setToken(data);
      setLoading(false);
    },
    []
  );

  useEffect(() => {
    setLoading(true);
    if (localStorage.getItem("token")) {
      const tokenValue = localStorage.getItem("token");
      const tokenData = tokenValue !== null ? JSON.parse(tokenValue) : {};
      setToken(tokenData);
    } else {
      setToken(null);
    }
    setLoading(false);
  }, []);

  const addItemToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };
  const removeItemFromCart = (id: any) => {
    setCartItems(cartItems.filter((item: any) => item.id !== id));
  };
  return (
    <Store.Provider
      value={{
        token,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        openCart,
        setOpenCart,
        userLogin,
        loading,
      }}
    >
      {children}
    </Store.Provider>
  );
};

export const useContextApp = () => useContext(Store);
export default GLobalContext;
