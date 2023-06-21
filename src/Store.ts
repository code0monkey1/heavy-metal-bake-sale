import { IStore } from './interfaces/Store';
import { Item } from './types';


export class Store implements IStore{
  
    private items:Item[] =[]

    hasItemInStock(code: string):boolean{
        
        const item = this.getItem(code)

        return item.quantity>0
    }

    initialize(items: Item[]): void {
        this.items=items
      }

    getItem (code: string):Item{
        const item = this.items.find(item => item.code===code)

        if(!item)
          throw new Error (`Item with code ${code} not found`)
        
        return item;
    }
    
}