export default class Item {
     constructor(
      private readonly name: string, 
      private readonly price: number,
      private quantity: number,
      private readonly purchaseCode: string) {}

      
      getName(){
        return this.name
      }

      getPrice(){
        return this.price
      }

      getQuantity(){
        return this.quantity
      }

      getPurchaseCode(){
        return this.purchaseCode
      }

}