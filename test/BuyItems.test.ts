import BuyItems from "../src/BuyItems"
import Item from "../src/Item"
import { getInventory, getTotalPrice } from "../src/ItemsHelper"
import { TItem } from "../src/types"


describe('Buy Items', () => {
    
     describe('Gives total amount, when items in stock',()=>{


         describe('for single item',()=>{
               test.each([
            {items:"B",total:getTotalPrice("B")},
            {items:"M",total:getTotalPrice("M")},
            {items:"C",total:getTotalPrice("C")},
            {items:"W",total:getTotalPrice("W")}
        ])(`gives total : $total for $items`,({items,total})=>{
            
            const sut = new BuyItems(getInventory())
            
            const item_list:TItem[] = items.split(',') as TItem[]

            sut.purchase(item_list,20)
            
         })
         })
        
         test.each([
            {items:"B,M,C",total:getTotalPrice("B,M,C")},
            {items:"B",total:getTotalPrice("B")},
            {items:"C,W",total:getTotalPrice("C,W")},
        ])(`gives total : $total for $items`,({items,total})=>{
            
            // const tot = BuyItems.makePurchase(items)
            
            //  expect(tot).toBe(total)
         })

     })

     describe('If an item is out of stock, respond with "X is out of stock" where X is the item out of stock.', () => {
       
         test.each([
            {items:"B,M,C",error:"B is out of stock"}
         ])
      
     })
     
})


