import { BakeSale } from "../src/BakeSale"

describe('BakeSale', () => {
     
    describe('When all items are in stock',()=>{

        it.each([
          {items:['B'],amount:10,balance:9.25}
        ])('single item',({items,amount,balance})=>{

               //Arrange
               const bakeSale = new BakeSale()
              //  const items=['B']
              //  const amount=10
              //  const balance=9.25

               //Act 
               const result =bakeSale.makeSale(items,amount)
              

               //Assert
               expect(result).toBe(`The balance is $${balance.toFixed(2)}`)

        })

         it.each([
            {items:['B','M'],amount:10,balance:8.25}
          ])('double items',({items,amount,balance})=>{

               //Arrange
               const bakeSale = new BakeSale()

               //Act 
               const result =bakeSale.makeSale(items,amount)
              

               //Assert
               expect(result).toBe(`The balance is $${balance.toFixed(2)}`)

        })

    })
})
