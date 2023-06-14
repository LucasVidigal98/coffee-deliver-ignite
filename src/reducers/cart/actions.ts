import { CartItem } from "./reducer";

export enum ActionTypes {
  ADD_NEW_ITEM = 'ADD_NEW_ITEM',
  INCREMENT_ITEM = 'INCREMENT_ITEM'
}

export type ActionParamType = {
  type: ActionTypes;
  payload: any;
}

export function addNewItemAction(item: CartItem): ActionParamType {
  return {
    type: ActionTypes.ADD_NEW_ITEM,
    payload: {
      item
    }
  }
}

export function incrementItemAction(item: CartItem, amount: number): ActionParamType {
  return {
    type: ActionTypes.INCREMENT_ITEM,
    payload: {
      item,
      amount
    }
  }
}