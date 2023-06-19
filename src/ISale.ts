export default interface ISale{
    
    purchase(item:[],amount:number):void

    balance():void

    total():number

    updateStock():void

    checkStock():boolean

}