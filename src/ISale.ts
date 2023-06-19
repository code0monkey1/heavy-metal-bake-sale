export default interface ISale<T>{
    
    purchase(item:T[],amount:number):void

    balance():void

    total():number

    updateStock():void

    checkStock():boolean

}