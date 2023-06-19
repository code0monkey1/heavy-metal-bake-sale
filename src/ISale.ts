export default interface ISale{
    
    purchase(item:[],amount:number):number

    balance():void

    total():number

    updateStock():void

    checkStock():boolean

}