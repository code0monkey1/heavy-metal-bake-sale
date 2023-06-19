export default interface ISale{
    
    purchase(item:[],amount:number):string

    balance():void

    total():number

    updateStock():void

    checkStock():boolean

}