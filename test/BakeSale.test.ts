import { BakeSale } from "../src/BakeSale";
import { Store } from "../src/Store";
import { IStore } from "../src/interfaces/Store";

describe('BakeSale', () => {
     
    describe('items in stock',()=>{

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

         it.each([
            {items:['B','M'],amount:10,balance:8.25}
          ])('double items',({items,amount,balance})=>{

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

    })

    describe('invalid item code',()=>{
        describe('single item', () => {
          
          it.each([
          
            {items:['X']},
            {items:['Y']},
            {items:['Z']},
            {items:['P']},
          ])('for item $items , should throw error , when initialized with quantity  0',({items})=>{
                 
                //Arrange
                 const mockStore:IStore = new Store()
                 
                 mockStore.initialize([])
  
                 const bakeSale = new BakeSale(mockStore)
  
                 //Act //Assert
                expect(()=>bakeSale.makeSale(items,10)).toThrowError((`Item with code ${items[0]} not found`))
  
          })
        })

        
    })

    })

    describe('items out of stock', () => {

        describe('single item', () => {
          
          it.each([
          
            {items:['B'],amount:10,initializer:[{name:'Brownie',price:0.75,quantity:0,code:'B'}]},
            {items:['M'],amount:10,initializer:[{name:'Muffin',price:0.75,quantity:0,code:'M'}]},
            {items:['C'],amount:10,initializer:[{name:'Cake Pops',price:0.75,quantity:0,code:'C'}]},
            {items:['W'],amount:10,initializer:[{name:'Water',price:0.75,quantity:0,code:'W'}]},
          ])('for item $items , should throw error , when initialized with quantity  0',({items,amount,initializer})=>{
                 
                //Arrange
                 const mockStore:IStore = new Store()
  
                  mockStore.initialize(initializer)
  
                 const bakeSale = new BakeSale(mockStore)
  
                 //Act //Assert
                expect(()=>bakeSale.makeSale(items,amount)).toThrowError(`${initializer[0].name}'s are out of stock`)
                
  
          })
        })

        
    })
  
