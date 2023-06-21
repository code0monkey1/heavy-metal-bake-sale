export type TBakeSale ={
   items:TItem[],
  runSale:(purchaseCodes: string[], amountPaid: number)=>void,
  getItemByCode:(code: string)=>TItem|undefined,
  getTotalAmount:(items: TItem[])=>number
}

export type TItem ={

 getName:()=>string,
 getPurchaseCode:()=>string,
 getQuantity:()=>number,
 getPrice:()=>number

}