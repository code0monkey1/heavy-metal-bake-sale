import Store from "./Store";

export default class Shop{
     
      private store :Store

      constructor(store:Store){
        this.store=store
      }


      allItemsInStock(items:string):boolean{
        
          const itemsList = items.split(',')

           for(const item of itemsList){
               
                    if(!this.store.hasItem(item))
                         return false
           }

           return true
      }
     
      getOutOfStockItems(items:string){

           const itemsList = items.split(',')

            let outOfStockItems:string[] =[]
            
            itemsList.forEach(item =>{

                 
                 if(!this.store.hasItem(item)){

                    outOfStockItems.push(item)
                 }
               
            })

            return outOfStockItems
      }

      getTotal(items:string) {

         if(!this.allItemsInStock(items)){

               throw new Error(`Items ${this.getOutOfStockItems(items)} are out of stock`)
         }

          
         const itemList = items.split(',')

     
         let total = 0

         for(const item of itemList){

               if(!this.store.hasItem(item))
                   throw new Error(`The item ${item} is out of stock`)
              
              const storeItem = this.store.getItem(item)

              total+= storeItem.getPrice()

              storeItem.decrementQuantity()
          }
     
          return total
       }

          payBill(items:string,amt:number){
                 
               const total = this.getTotal(items)

               if(amt>=total){
                   
                    const balance = amt-total
                    console.log("Amount paid ")

                    return balance
               }else{

                    return `Not enout`
               }
                    
          }


}

