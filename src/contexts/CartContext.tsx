import { ReactNode, createContext, useEffect, useReducer, useState } from "react";
import { CartItem, cartReducer } from "../reducers/cart/reducer";
import { addNewItemAction, incrementItemAction } from "../reducers/cart/actions";


interface CartContextType {
  cart: CartItem[];
  numberOfItems: number;
  addNewItem: (cartItem: CartItem) => void;
  increaseItem: (cartItem: CartItem, ammount: number) => void;
}

export const CartContext = createContext({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      numberOfItems: 0
    },
  );

  useEffect(() => {
    console.log(cartState);
  }, [cartState])

  function addNewItem(cartItem: CartItem) {
    dispatch(addNewItemAction(cartItem));
  }

  function increaseItem(cartItem: CartItem, ammount: number) {
    dispatch(incrementItemAction(cartItem, ammount));
  }

  return (
    <CartContext.Provider
      value={{
        cart: cartState.cart,
        numberOfItems: cartState.numberOfItems,
        addNewItem,
        increaseItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}