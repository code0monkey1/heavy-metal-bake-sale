import ISale from "./ISale";
import Item from "./Item";
import { TItem, TItemRecord } from "./types";

export default class BuyItems implements ISale {
  
  private items :Item[]=[]

  constructor(records:TItemRecord[]){

     this.initializeItems(records) 
  }

  initializeItems(records:TItemRecord[]){
    records.forEach(record =>{

          this.items.push(new Item(record.name,record.price,record.quantity,record.purchaseCode))

     }
      )
  }
  
  purchase(items: TItem[], amount: number): number {
        
       const item = this.items.find( i => i.getPurchaseCode()===items[0])

      if(!item)
        throw new Error(`Item ${items[0]} not found`)
      
      return item.getPrice()
      
  }
  
  balance(): void {
    throw new Error("Method not implemented.");
  }
  total(): number {
    throw new Error("Method not implemented.");
  }
  updateStock(): void {
    throw new Error("Method not implemented.");
  }
  checkStock(): boolean {
    throw new Error("Method not implemented.");
  }
    
  
}