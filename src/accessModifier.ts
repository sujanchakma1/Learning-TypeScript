class BankAccount {
  readonly id: number
  name: string
  protected balance: number
  constructor(id:number, name: string, balance:number) {
    this.id= id
    this.name= name
    this.balance = balance
  }
  addBalance(numOfBalance: number){
    return this.balance = this.balance + numOfBalance
  }
}

// const sujanAccount = new BankAccount(1,"sujan", 10)

// sujanAccount.addBalance(50)
// // sujanAccount.id = 2
// // sujanAccount.balance = 20
// console.log(sujanAccount);

class sujanAccount extends BankAccount{
  constructor(id:number, name:string, balance: number){
   super(id, name,balance)
  }
}