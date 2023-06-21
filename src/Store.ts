import { IStore, Item } from './types';


export class Store implements IStore{
  
    // private items:Item[]

    hasItem(code: string):boolean{
        return true
    }

    initialize(items: Item[]): void {
        // this.items=items
      }

    getItem (code: string):Item{
        return  {name:'Brownie',price:0.75,quantity:48,code:'B'}
    }

    

}