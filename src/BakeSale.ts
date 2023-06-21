import { Item, Sale } from "./types";

export class BakeSale implements Sale{
   
  private items:Item[]=[
   
     {name:'Brownie',price:0.75,quantity:48,code:'B'},
     {name:'Muffin',price:1.00,quantity:36,code:'M'},
     {name:'Cake Pops',price:1.35,quantity:24,code:'C'},
     {name:'Water',price:1.50,quantity:30,code:'W'}
           
  ]

  makeSale(items: string[], amount: number):string{
         
      let total=0
       
       for( const itemCode of items){
          
           const item :Item= this.getItemByCode(itemCode)

           if(item.quantity===0){
            throw new Error(`The item ${item.name} is out of stock`)
           }

           total+=item.price
          
       }
       
       const balance = amount - total
       return `The balance is $${balance.toFixed(2)}`
      
  }

  private getItemByCode(code:string):Item{
      
     const item = this.items.find( i => i.code===code)

     if(!item)
          throw new Error(`Item with code ${code} not found`)

     return item

  }
  
}