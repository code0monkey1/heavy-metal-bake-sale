import Item from "../src/Item"

describe('Item', () => {
       
      describe('single item', () => {
           
         it.each([
          {item:'B',price:0.75},
          {item:'M',price:1},
          {item:'C',price:1.35},
          {item:'W',price:1.50},
        ])('item $item bought for $price',({item,price})=>{
             
            //Arrange
            const record :Record<string,Item> ={
               'B': new Item("Brownie","B",48,0.75),
               'M': new Item("Muffin","M",36,1),
               'C': new Item("Cake Pops","C",24,1.35),
               'W' : new Item('Water','W',30,1.50)
            }

            //Act 
            const amount = record[item].getPrice()

            //Assert
            expect(amount).toBe(price)

         })

      })

         describe(' two items', () => {
           
         it.each([
          {items:'B,C',price:2.1},
          {items:'M,B',price:1.75},
          {items:'B,W',price:2.25},
          {items:'W,C',price:2.85},
        ])('item $item bought for $price',({items,price})=>{
             
            //Arrange
            const record :Record<string,Item> ={
               'B': new Item("Brownie","B",48,0.75),
               'M': new Item("Muffin","M",36,1),
               'C': new Item("Cake Pops","C",24,1.35),
               'W' : new Item('Water','W',30,1.50)
            }

            //Act 
            const amount1 = record[items[0]].getPrice()
            const amount2 = record[items[1]].getPrice()

            //Assert
            expect(amount1+amount2).toBe(price)

         })

      })
      
})
