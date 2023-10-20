import inquirer from 'inquirer';

interface BankAccount {
  debit(amount: number): void;
  credit(amount: number): void;
  getBalance(): number;
}

class Customer {
  private firstName: string;
  private lastName: string;
  private gender: string;
  private age: number;
  private mobileNumber: string;

  constructor(firstName: string, lastName: string, gender: string, age: number, mobileNumber: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.age = age;
    this.mobileNumber = mobileNumber;
  }

  getInfo(): string {
    return `Name: ${this.firstName} ${this.lastName}, Gender: ${this.gender}, Age: ${this.age}, Mobile Number: ${this.mobileNumber}`;
  }
}

class BankAccountImpl implements BankAccount {
  private balance: number;

  constructor() {
    this.balance = 0;
  }

  debit(amount: number): void {
    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      console.log('Insufficient balance.');
    }
  }

  credit(amount: number): void {
    if (amount > 100) {
      this.balance += amount - 1;
    } else {
      this.balance += amount;
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

async function main() {
  const customerInfo = await inquirer.prompt([
    {
      type: 'string',
      name: 'firstName',
      message: 'Enter your first name:',
    },
    {
      type: 'string',
      name: 'lastName',
      message: 'Enter your last name:',
    },
    {
      type: 'string',
      name: 'gender',
      message: 'Enter your gender:',
    },
    {
      type: 'input',
      name: 'age',
      message: 'Enter your age:',
    },
    {
      type: 'input',
      name: 'mobileNumber',
      message: 'Enter your mobile number:',
    },
  ]);

  const customer = new Customer(
    customerInfo.firstName,
    customerInfo.lastName,
    customerInfo.gender,
    customerInfo.age,
    customerInfo.mobileNumber
  );

  const bankAccount = new BankAccountImpl();

  while (true) {
    const choice = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: [
          'Check Balance',
          'Credit Money',
          'Debit Money',
          'Exit',
        ],
      },
    ]);

    if (choice.action === 'Exit') {
      break;
    } else if (choice.action === 'Check Balance') {
      console.log(`Balance: $${bankAccount.getBalance()}`);
    } else if (choice.action === 'Credit Money') {
      const creditAmount = await inquirer.prompt([
        {
          type: 'number',
          name: 'amount',
          message: 'Enter the amount to credit:',
        },
      ]);
      bankAccount.credit(creditAmount.amount);
      console.log(`Credited $${creditAmount.amount} to your account.`);
    } else if (choice.action === 'Debit Money') {
      const debitAmount = await inquirer.prompt([
        {
          type: 'number',
          name: 'amount',
          message: 'Enter the amount to debit:',
        },
      ]);
      bankAccount.debit(debitAmount.amount);
      console.log(`Debited $${debitAmount.amount} from your account.`);
    }
  }

  console.log(customer.getInfo());
  console.log(`Final Balance: $${bankAccount.getBalance()}`);
}

main();
