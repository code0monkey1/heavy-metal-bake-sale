import Store from "./Store";

export default class Shop{
     
      private store :Store

      constructor(store:Store){
        this.store=store
      }


      allItemsInStock(items:string[]):boolean{
                    
           for(const item of items){
               
                    if(!this.store.hasItem(item))
                         return false
           }

           return true
      }
     
      getOutOfStockItems(itemsList:string[]){

            let outOfStockItems:string[] =[]
            
            itemsList.forEach(item =>{

                 
                 if(!this.store.hasItem(item)){

                    outOfStockItems.push(this.store.getItem(item).getName())
                 }
               
            })

            return outOfStockItems
      }

      getTotal(items:string) {
          
         const itemList = items.split(',')

         if(!this.allItemsInStock(itemList)){

               throw new Error(`Items are out of stock`)
         }

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

