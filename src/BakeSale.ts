import { IStore, Item, Sale } from "./types";

export class BakeSale implements Sale{
   
    private store:IStore

    constructor(store:IStore){
    this.store=store
    }

  makeSale(items: string[], amount: number):string{
         
      let total=0
       
       for( const itemCode of items){
          
           const item :Item= this.getItemByCode(itemCode)

           if(item.quantity===0){
            throw new Error(`The item ${item.name} is out of stock`)
           }

           total+=item.price
          
       }
       
       const balance = amount - total
       return `The balance is $${balance.toFixed(2)}`
      
  }

  private getItemByCode(code:string):Item{
      
     return this.store.getItem(code)

  }
  
}