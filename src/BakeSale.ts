import { Sale } from "./interfaces/Sale";
import { IStore } from "./interfaces/Store";
import { Item } from "./types";

export class BakeSale implements Sale{
   
    private store:IStore

    constructor(store:IStore){
     this.store=store
    }

    makeSale(items: string[], amount: number):string{
       
        if(!this.hasInStock(items)){

           const outOfStock = this.getOutOfStock(items)

           throw new Error(`${outOfStock}'s are out of stock`)
        }
          
        const total=this.getTotal(items)
        
        const balance = amount - total

        return `The balance is $${balance.toFixed(2)}`
        
    }

    getOutOfStock(items:string[]):string[]{
       
       const outOfStock=[]
       
       for(const item of items){

          if(!this.store.hasItemInStock(item))
              outOfStock.push(this.store.getItem(item).name)
       }

     return outOfStock;
    }

    getTotal(items:string[]): number {

      let total=0
        
        for( const itemCode of items){
            
            const item :Item= this.getItemByCode(itemCode)

            total+=item.price
            
        }

       return total
    }

    hasInStock(items:string[]):boolean{
    
      for (const item of items){
  
            if(!this.store.hasItemInStock(item))
                return false
             
      }

      return true
    }


    private getItemByCode(code:string):Item{
        
      return this.store.getItem(code)

    }
  
}