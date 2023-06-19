export default class Item{

  constructor(
      private readonly name:string,
      private readonly purchaseCode:string,
      private quantity:number,
      private readonly price:number
    ){}


  getName(): string {
    return this.name;
  }

  getPurchaseCode(): string {
    return this.purchaseCode;
  }

  getQuantity(): number {
    return this.quantity;
  }

  getPrice(): number {
    return this.price;
  }
  

}