

import inquirer from 'inquirer';

class Person {
  private personality: string;

  constructor() {
    this.personality = 'Mystery';
  }

  askQuestion(answer: number): void {
    if (answer === 1) {
      this.personality = 'Extrovert';
    } else {
      this.personality = 'Introvert';
    }
  }

  getPersonality(): string {
    return this.personality;
  }
}


async function main() {
    const answerPrompt = await inquirer.prompt([
      {
        type: 'list',
        name: 'answer',
        message: 'Choose your personality:',
        choices: [
          { name: 'Extrovert', value: 1 },
          { name: 'Introvert', value: 2 },
        ],
      },
    ]);


class Student extends Person {
  private name: string;

  constructor() {
    super();
    this.name = '';
  }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}


  const student = new Student();

  student.askQuestion(answerPrompt.answer);

  const namePrompt = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ]);

  student.setName(namePrompt.name);

  console.log(`Your name is ${student.getName()} and your personality is ${student.getPersonality()}.`);
}


main();