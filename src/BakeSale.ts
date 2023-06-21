import { IStore, Item, Sale } from "./types";

export class BakeSale implements Sale{
   
    private store:IStore

    constructor(store:IStore){
     this.store=store
    }

    getTotal(items:string[]): number {

      let total=0
        
        for( const itemCode of items){
            
            const item :Item= this.getItemByCode(itemCode)

            total+=item.price
            
        }
       return total
    }

    hasItemsInStock(items:string[]):boolean{
    
      for (const item of items){
  
            if(!this.store.hasItemInStock(item)){

                const itemName=this.store.getItem(item).name

                throw new Error(`${itemName}'s are out of stock`)
            }
                      
      }

      return true
    
    }

    makeSale(items: string[], amount: number):string{
       
        this.hasItemsInStock(items)
          
        const total=this.getTotal(items)
        
        const balance = amount - total

        return `The balance is $${balance.toFixed(2)}`
        
    }

    private getItemByCode(code:string):Item{
        
      return this.store.getItem(code)

    }
  
}