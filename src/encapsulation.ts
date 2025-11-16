
//* Encapsulation meaning hocce nijer property guloke private kore, mane onnojon user kore parber na.

class BankAccount {
  userId : number
  userName: string
   userBalance : number

  constructor(userId: number, userName: string, userBalance: number){
    this.userId = userId
    this.userName = userName
    this.userBalance = userBalance
  }

   private addBalance (amount: number){
    return this.userBalance += amount
  }
}

class StudentAccount extends BankAccount{
  constructor(userId: number, userName: string, userBalance: number){
    super(userId, userName, userBalance)
  }
}

const studentAccount1 = new StudentAccount(11,'sujan', 20)
studentAccount1.userBalance = 50

console.log(studentAccount1.userBalance);