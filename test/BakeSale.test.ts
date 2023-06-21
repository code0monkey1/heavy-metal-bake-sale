import { BakeSale } from "../src/BakeSale"

describe('BakeSale', () => {
     
    describe('When all items are in stock',()=>{

     
        it('single item',()=>{

               //Arrange
               const bakeSale = new BakeSale()
               const items=['B']
               const amount=10
               const balance=9.25

               //Act 
               const result =bakeSale.makeSale(items,amount)
              

               //Assert
               expect(result).toBe(`The balance is $${balance.toFixed(2)}`)

        })

    })
})
