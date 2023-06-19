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
             const amount = record[item] 

            //Assert
             

         })

      })
      
})
