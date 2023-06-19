import Item from "./Item"

export default class Purchase{
     
      private store :Record<string,Item> ={
               'B': new Item("Brownie","B",48,0.75),
               'M': new Item("Muffin","M",36,1),
               'C': new Item("Cake Pops","C",24,1.35),
               'W' : new Item('Water','W',30,1.50)
            }
 
     
      getTotalPrice(items:string) {
    
         let total = 0

          items.split(',').forEach(item =>{

              total+= this.store[item].getPrice()
          })
     
          return total
    }


}