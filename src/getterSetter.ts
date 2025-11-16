class BankAccount {
  readonly id: number
  name: string
  protected balance: number
  constructor(id:number, name: string, balance:number) {
    this.id= id
    this.name= name
    this.balance = balance
  }

  set addBalance(amount:number){
    this.balance += amount
  }
  get getBalance (){
    return this.balance
  }
  
}
const sujanAccount = new BankAccount(1,"sujan", 10)

sujanAccount.addBalance = 500
sujanAccount.addBalance = 1000
console.log(sujanAccount.getBalance);