import { TItem } from "./types"


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