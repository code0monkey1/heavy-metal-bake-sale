import { BakeSale } from "../src/BakeSale"

describe('BakeSale', () => {
     
    describe('When all items are in stock',()=>{

        it.each([
          {items:['B'],amount:10,balance:9.25},
          {items:['M'],amount:10,balance:9.00},
          {items:['C'],amount:10,balance:8.65},
          {items:['W'],amount:10,balance:8.50},
        ])('for single item $items ,when given amount $amount ,should return a balance of $$balance',({items,amount,balance})=>{

               //Arrange
               const bakeSale = new BakeSale()

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

    describe('items are out of stock', () => {
         
        
    })
    
})
