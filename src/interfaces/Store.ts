import { Item } from "../types"

export interface IStore{
     
  hasItemInStock(code:string):Boolean
  initialize(items:Item[]):void
  getItem(code:string):Item

}