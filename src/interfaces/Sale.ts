export interface Sale{
  
  makeSale(items:string[],amount:number):string

  getTotal(items:string[]):number

}