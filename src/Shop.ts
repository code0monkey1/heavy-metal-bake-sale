import Store from "./Store";

export default class Shop{
     
      private store :Store

      constructor(store:Store){
        this.store=store
      }

      getTotal(items:string) {
    
         let total = 0
          
         const itemList = items.split(',')

         for(const item of itemList){
              
               if(!this.store.hasItem(item))
                   throw new Error(`The item ${item} is out of stock`)
               
              total+= this.store.getPrice(item)
          }
     
          return total
     }

   
     

}

