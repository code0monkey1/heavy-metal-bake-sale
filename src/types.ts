export type Item={
     name:string,
     quantity:number,
     price :number,
     code:string  
}

export interface Sale{

  makeSale:(items:Item[],amount:number)=>string

}