import React from 'react';
import { CounterStore } from "./Counter";
import { TodoStore } from './Todo';

export const Store = {
  counterStore: new CounterStore(),
  todoStore: new TodoStore(),
};
export const StoreContext = React.createContext(null);
export const useStores = () => {
  const stores = React.useContext(StoreContext);
  if (!stores) {
    throw new Error('useStores must be used within a StoreProvider');
  }
  return stores;
}