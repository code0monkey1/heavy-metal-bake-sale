import Item from "./Item";

export default class Store{
    
      private store :Record<string,Item>={
               'B': new Item("Brownie","B",48,0.75),
               'M': new Item("Muffin","M",36,1),
               'C': new Item("Cake Pops","C",24,1.35),
               'W' : new Item('Water','W',30,1.50)
            };
      
      initialize(items:Record<string,Item> ){
         this.store=items
      }

      hasItem(item:string):boolean{
            
          return  this.store[item].getQuantity()>0
      }
      
      getItem(item:string){

        return this.store[item]
      }


}