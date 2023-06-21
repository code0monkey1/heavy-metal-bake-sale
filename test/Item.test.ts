import { BakeSale } from "../src/BakeSale"

describe('BakeSale', () => {

     describe('when all items are in stock',()=>{

        test('only 1 item',()=>{
           
           const sale = new BakeSale()

           sale.runSale(['B'],29)


        })

     })
})
