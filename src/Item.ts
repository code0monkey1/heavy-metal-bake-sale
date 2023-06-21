import { TItem } from "./types";

class Item implements TItem{

  constructor(
    private readonly name: string,
    private readonly purchaseCode: string,
    private  quantity: number,
    private readonly price: number
  ) {}

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
