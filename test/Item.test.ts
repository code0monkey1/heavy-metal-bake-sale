import { BakeSale } from "../src/BakeSale"
import { Item } from "../src/Item"
import { IStore, TItem } from "../src/types"

describe('BakeSale', () => {

     describe('when all items are in stock',()=>{
         
      
        test
        .each([
         {value:['B'],amount:10,result:9.25},
         {value:['M'],amount:10,result:9.00},
         {value:['C'],amount:10,result:8.65},
         {value:['W'],amount:10,result:8.50},
      ])
        ('only 1 item',({value,amount,result})=>{

          const mockStore :IStore = {

             items: [],
             initialize: function (items: TItem[]): void {
                this.items=items;
             }
          }
           
          mockStore.initialize([
               new Item('Brownie', 'B', 48, 0.75),
               new Item('Muffin', 'M', 36, 1.00),
               new Item('Cake Pop', 'C', 24, 1.35),
               new Item('Water', 'W', 30, 1.50),
            ])
           
           const sale = new BakeSale(mockStore)

           const response= sale.runSale(value,amount)
          
           expect(response).toBe(`Change: $${result.toFixed(2)}`)

        })

     })
})
