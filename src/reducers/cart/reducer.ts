import { ActionParamType, ActionTypes } from "./actions";

export type CartItem = {
  id: number;
  title: string;
  amount: number;
  price: number;
}

type CartStates = {
  cart: CartItem[];
  numberOfItems: number;
}

export function cartReducer(state: CartStates, action: ActionParamType): CartStates {
  switch (action.type) {
    case ActionTypes.ADD_NEW_ITEM:
      const { id } = action.payload.item;
      const inCart = state.cart.find(({ id: i }) => i === id);

      if (!inCart) {
        state.cart.push({ ...action.payload.item });
        state.numberOfItems += 1;
      }

      return {
        cart: state.cart,
        numberOfItems: state.numberOfItems
      };
    case ActionTypes.INCREMENT_ITEM:
      const { item, amount } = action.payload;

      const itemToIncreaseAmount = state.cart.find(({ id }) => item.id === id);

      if (itemToIncreaseAmount) {
        const newAmount = itemToIncreaseAmount.amount + amount;
        itemToIncreaseAmount.amount = newAmount;
      }

      return {
        cart: state.cart,
        numberOfItems: state.numberOfItems
      };
    default:
      return state;
  }
}
