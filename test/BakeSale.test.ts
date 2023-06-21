import { BakeSale } from "../src/BakeSale";
import { Store } from "../src/Store";
import { IStore, Item } from '../src/types';

describe('BakeSale', () => {
     
    describe('all items in stock',()=>{

        it.each([
          {items:['B'],amount:10,balance:9.25},
          {items:['M'],amount:10,balance:9.00},
          {items:['C'],amount:10,balance:8.65},
          {items:['W'],amount:10,balance:8.50},
        ])('for single item $items ,when given amount $amount ,should return a balance of $$balance',({items,amount,balance})=>{
               //Arrange
               const mockStore:IStore = new Store()

                mockStore.initialize([
    
                  {name:'Brownie',price:0.75,quantity:48,code:'B'},
                  {name:'Muffin',price:1.00,quantity:36,code:'M'},
                  {name:'Cake Pops',price:1.35,quantity:24,code:'C'},
                  {name:'Water',price:1.50,quantity:30,code:'W'}
                        
                ])

               const bakeSale = new BakeSale(mockStore)

               //Act 
               const result =bakeSale.makeSale(items,amount)
              

               //Assert
               expect(result).toBe(`The balance is $${balance.toFixed(2)}`)

        })

  //        it.skip.each([
  //           {items:['B','M'],amount:10,balance:8.25}
  //         ])('double items',({items,amount,balance})=>{

  //              //Arrange
  //              const bakeSale = new BakeSale([
   
  //    {name:'Brownie',price:0.75,quantity:48,code:'B'},
  //    {name:'Muffin',price:1.00,quantity:36,code:'M'},
  //    {name:'Cake Pops',price:1.35,quantity:24,code:'C'},
  //    {name:'Water',price:1.50,quantity:30,code:'W'}
           
  // ])

  //              //Act 
  //              const result =bakeSale.makeSale(items,amount)

  //              //Assert
  //              expect(result).toBe(`The balance is $${balance.toFixed(2)}`)

  //       })

    })

    describe('items are out of stock', () => {
         
        
    })
    
})
