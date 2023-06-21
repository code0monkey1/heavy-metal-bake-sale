import { IStore, Item } from './types';

const  Store :IStore={
  hasItem: function (code: string): Boolean {
    throw new Error('Function not implemented.');
  },
  initialize: function (items: Item[]): void {
    throw new Error('Function not implemented.');
  },
  getItem: function (code: string): Item {
    throw new Error('Function not implemented.');
  }
}

export default Store;