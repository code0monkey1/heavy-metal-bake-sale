import { BakeSale } from "../src/BakeSale"

describe('BakeSale', () => {

     describe('when all items are in stock',()=>{

        test
        .each([
         {value:['B'],amount:10,result:9.25},
         {value:['M'],amount:10,result:9.00},
         {value:['C'],amount:10,result:28.25},
         {value:['W'],amount:10,result:28.25},
      ])
        ('only 1 item',({value,amount,result})=>{
           
           const sale = new BakeSale()

           const response= sale.runSale(value,amount)
          
           expect(response).toBe(`Change: $${result}`)

        })

     })
})
