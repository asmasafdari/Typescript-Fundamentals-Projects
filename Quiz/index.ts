import inquirer from 'inquirer';

interface Question {
  question: string;
  choices: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: 'What is the capital of France?',
    choices: ['London', 'Madrid', 'Paris'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Mars', 'Earth', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is 2 + 2?',
    choices: ['3', '4', '5'],
    correctAnswer: '4',
  },
];

let score = 0;

async function startQuiz() {
  console.log('Welcome to the Quiz!\n');
  for (const q of questions) {
    const answer = await askQuestion(q);
    if (answer === q.correctAnswer) {
      console.log('Correct!\n');
      score++;
    } else {
      console.log(`Incorrect! The correct answer is: ${q.correctAnswer}\n`);
    }
  }
  console.log(`Your Score: ${score} out of ${questions.length}`);
}

async function askQuestion(q: Question): Promise<string> {
  const answer = await inquirer.prompt({
    type: 'list',
    name: 'response',
    message: q.question,
    choices: q.choices,
  });
  return answer.response;
}

startQuiz();
