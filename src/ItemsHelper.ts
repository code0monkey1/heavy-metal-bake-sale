import { TItem, TItemRecord } from "./types"


const item_price:Record<TItem,number>={
   "B":0.75,
   "M":1.0,
   "C":1.35,
   "W":1.5
}


export const getTotalPrice=(list:string)=>{
    
   let tot=0

    for(const item of list.split(',')){
         
      tot+=item_price[item as TItem]

    }
    
    return tot

}

export const getInventory=()=>{

   const inventory:TItemRecord[] =[
              {
                name:'Brownie',
                quantity:48,
                price:0.75,
                purchaseCode:'B'

              },
               {
                name:'Muffin',
                quantity:36,
                price:1,
                purchaseCode:'M'

              },
               {
                name:'Cake Pops',
                quantity:24,
                price:1.35,
                purchaseCode:'C'

              },
               {
                name:'Water',
                quantity:30,
                price:1.50,
                purchaseCode:'W'

              }
            ]

    return inventory
}