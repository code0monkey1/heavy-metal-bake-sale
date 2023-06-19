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
  
  purchase(items: TItem[], amount: number): void {
        
       const item = this.items.find( i => i.getPurchaseCode()===items[0])

        return item.getAmou
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
    
  //   private static items: Item[] = [
  //     new Item('Brownie', 0.75, 48, 'B'),
  //     new Item('Muffin', 1.00, 36, 'M'),
  //     new Item('Cake Pop', 1.35, 24, 'C'),
  //     new Item('Water', 1.50, 30, 'W'),
  // ];

   
  // public static makePurchase(itemList:string):number{
       
  //      const itemCodes = itemList.split(',') as TItem[]
        
  //      let total =0

  //      for(const code of itemCodes){
  //           const item= this.items.find( item => item.getPurchaseCode()===code)
            
  //           if(item)
  //               total+=item.getPrice() 
  //           else
  //              throw new Error('Item Not Found')
  //      }
      
  //      return total;
  //  }


  // private static getItemQuantity(itemCodes: TItem[]) {
  //   return itemCodes
  //     .reduce(
  //       (prev: Record<TItem, number>, current: TItem) => {

  //         prev[current] += 1;

  //         return prev;

  //       }, { "B": 0, "M": 0, "C": 0, "W": 0 } as Record<TItem, number>);
  // }

  // private static hasRequiredQuantity(itemList:string){

  //   const itemCodes = itemList.split(',') as TItem[]

  //   const item_qty = BuyItems.getItemQuantity(itemCodes)
       
  //     for (const [key, value] of Object.entries(item_qty)) {
          
  //          const item = BuyItems.items.find(i => i.getPurchaseCode()=== key)

  //          if(item){
              
  //             if(item.getQuantity()< value){
  //               return false
  //             }

  //          }
 
  //     }

  //     return true
  // }

  
}