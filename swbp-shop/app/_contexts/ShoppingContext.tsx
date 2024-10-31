"use client";
import { createContext, ReactNode, useContext, useState } from "react";

type PurchaseProduct = {
  id: number;
  name: string;
  num: number;
  size: string;
};

interface ShoppingContextType {
  products: PurchaseProduct[];
  addProduct: (newProduct: PurchaseProduct) => void;
}

const initialState = {
  products: [],
  addProduct: () => {},
};

const ShoppingContext = createContext<ShoppingContextType>(initialState);

function ShoppingProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<PurchaseProduct[]>(
    initialState.products
  );

  function addProduct(newProduct: PurchaseProduct) {
    setProducts((state) => [...state, newProduct]);
  }
  console.log(products);
  return (
    <ShoppingContext.Provider value={{ products, addProduct }}>
      {children}
    </ShoppingContext.Provider>
  );
}

function useShopping() {
  const context = useContext(ShoppingContext);
  if (context === undefined)
    throw new Error("ShoppingContext was used outside the ShoppingProvider");
  return context;
}

export { ShoppingProvider, useShopping };
