import BuyItems from "../src/BuyItems"
import Item from "../src/Item"
import { getTotalPrice } from "../src/ItemsHelper"

describe('Buy Items', () => {
    
     describe('Gives total amount, when items in stock',()=>{

        
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


