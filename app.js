const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');

const questionContainer = document.getElementById('question-container');
const fortuneContainer = document.getElementById('fortune-container');

const fortuneOutput = document.getElementById('fortune-output');

const answers = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];

askButton.addEventListener('click', () => {
    questionContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
    const rando = Math.floor(Math.random() * answers.length);
    fortuneOutput.textContent = answers[rando];
});

resetButton.addEventListener('click', () => {
    questionContainer.classList.toggle('hide');
    fortuneContainer.classList.toggle('hide');
});
