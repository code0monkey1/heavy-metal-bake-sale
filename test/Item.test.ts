import Item from "../src/Item"
import Purchase from "../src/Purchase"

describe('Item', () => {
         
      describe('single item', () => {
           
         it.each([
          {item:'B',price:0.75},
          {item:'M',price:1},
          {item:'C',price:1.35},
          {item:'W',price:1.50},
        ])('item $item bought for $price',({item,price})=>{
             
            //Arrange
             const purchaseItems = new Purchase()

            //Act 
            const amount = purchaseItems.getTotal(item)

            //Assert
            expect(amount).toBe(price)

         })

      })

         describe('two items', () => {
           
         it.each([
          {items:'B,C',price:2.1},
          {items:'M,B',price:1.75},
          {items:'B,W',price:2.25},
          {items:'W,C',price:2.85},
        ])('item $items bought for $price',({items,price})=>{
         //Arrange
             const purchaseItems = new Purchase()

            //Act 
            const amount = purchaseItems.getTotal(items)

            //Assert
            expect(amount).toBe(price)

      })


      
})

})