import { Item } from './Item';

export class BakeSale{

  private  items: Item[] = [
    new Item('Brownie', 'B', 48, 0.75),
    new Item('Muffin', 'M', 36, 1.00),
    new Item('Cake Pop', 'C', 24, 1.35),
    new Item('Water', 'W', 30, 1.50),
  ];

  public runSale(purchaseCodes: string[], amountPaid: number): string {
    const itemsToPurchase: Item[] = [];

    for (const code of purchaseCodes) {
      const item = this.getItemByCode(code);

      if (item) {
        if (item.getQuantity() === 0) {
          return `${item.getName()} is out of stock.`;
        }
        itemsToPurchase.push(item);
      }
    }

    const totalAmount = this.getTotalAmount(itemsToPurchase);

    if (totalAmount === 0) {
      return 'No items selected for purchase.';
    }

    if (amountPaid < totalAmount) {
      return 'Not enough money.';
    }

    const change = amountPaid - totalAmount;
    
    return `Change: $${change.toFixed(2)}`;
  }

  private getItemByCode(code: string): Item | undefined {
    return this.items.find((item) => item.getPurchaseCode() === code);
  }

  private getTotalAmount(items: Item[]): number {
    let total = 0;

    for (const item of items) {
      total += item.getPrice();
    }

    return total;
  }
}
