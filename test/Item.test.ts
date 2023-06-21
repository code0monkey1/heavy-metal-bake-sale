import { BakeSale } from "../src/BakeSale"
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
                throw new Error("Function not implemented.")
             }
          }

           
           const sale = new BakeSale(mockStore)

           const response= sale.runSale(value,amount)
          
           expect(response).toBe(`Change: $${result.toFixed(2)}`)

        })

     })
})
