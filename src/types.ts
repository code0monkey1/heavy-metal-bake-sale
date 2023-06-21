export type Item={
     name:string,
     quantity:number,
     price :number,
     code:string  
}

export type Sale={
  
  makeSale:(items:string[],amount:number)=>string
}