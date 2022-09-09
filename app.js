const askButton = document.getElementById('ask');
const resetButton = document.getElementById('reset');

const questionContainer = document.getElementById('question-container');
const fortuneContainer = document.getElementById('fortune-container');

const fortuneOutput = document.getElementById('fortune-output');

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
