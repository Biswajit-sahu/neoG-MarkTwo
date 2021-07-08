const readlineSync = require('readline-sync');
const chalk = require('chalk')

let score = 0;
var game = chalk.bold.green('\'Do you really know Odisha???\'');
var name = readlineSync.question(chalk.bold('Hey, What\'s your name? '));
console.log(`Welcome, ${name}!`);
console.log('');

console.log(`Let\'s play a game ${game}`);

console.log('');

function askQuestion(ques, ans, i) {
	var userAns = readlineSync.question(chalk.bold(`${i}. ${ques}`));

	if(userAns.toLowerCase() == ans.toLowerCase()) {
		console.log(chalk.bold.yellowBright('Correct Answer :)'));
		score++;
	} else {
		console.log(chalk.bold.red('Incorrect Answer :('));
		console.log(chalk.bold.yellowBright(`The correct answer is ${ans}`));
	}

	console.log(chalk.underline(`Score: ${score}`));
	console.log(" ");
}

var quesList = [
	{
		q: 'The Jagannath Puri Temple was built in the year? ',
		a: '1161',
	},
  {
    q:'On which river, the Hirakud Dam is built?',
    a:'Mahanadi River',
  },
  {
    q:'What is the total number of Districts in Odisha?',
    a:'30',

  },
  {
    q:'Which one was the capital of Odisha before Bhubneswar?',
    a:' Cuttack',

  },
  {
    q:'In Ancient times, Odisha was known by the name of?',
    a:'Kalinga',

  },
  {
    q:'Which place in Odisha is known as ‘Temple City of Odisha?',
    a:'Bhubaneswar',

  },
  {
    q:'When was the super cyclone held in Odisha?',
    a:'1999',

  },
  {
    q:'What is Odisha Population Rank in India?',
    a:'11',

  },
  {
    q:'Which lake is located in Odisha state?',
    a:'Chillika',

  },
  {
    q:'Who is the current Chief-Minister of Odisha? ',
    a:'Naveen Patnaik',

  },
  
];

for(var i=0; i<quesList.length; i++) {
	askQuestion(quesList[i]["q"], quesList[i]["a"], i+1);

  if(score == 3 && i!==quesList.length-1) {
		console.log(chalk.underline.black.bold.bgWhite('-- Welcome to Level 2 --'));
		console.log(" ");
	} else if (score == 6 && i!==quesList.length-1) {
		console.log(chalk.underline.black.bold.bgWhite('--Welcome to Level 3 --'));
		console.log(" ");
	}
}
if(score >= 9) {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You know Odisha very well :)`));
} else if(score >=5) {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You know Odisha fairly :|`));
} else {
	console.log(chalk.underline.italic.bold.bgBlue(`Result: You scored ${score} points! You do not know Odisha well :(  `));
}
