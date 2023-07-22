const tools = ['rock', 'papper', 'scissors'];

const getRandomNumder = (min, max) => Math.floor(Math.random() * (max - min + 1) + min );

const userAnswer = prompt ('rock, papper or scissors');
const randomIndex= getRandomNumder (0, 2);
const computerAnswer = tools[randomIndex];

console.log (`User answer is ${userAnswer}`);
console.log (`Computer answer is ${computerAnswer}`);

const startGame = (userAnswer, computerAnswer)=> {
    userAnswer = userAnswer.toLowerCase()
    if (!userAnswer || !tools.includes(userAnswer)) {
        return 'Bad answer'
    }

    let result = '';

    const isDraw = userAnswer === computerAnswer;
    const isUserWin = (userAnswer === 'rock' && computerAnswer === 'scissors') ||
        (userAnswer === 'papper' && computerAnswer === 'rock') || 
        (userAnswer === 'scissors' && computerAnswer === 'papper')

    if (isDraw) result = 'It is Draw';
    else if (isUserWin) result = 'You won';
    else result = 'You lose';
    

    return result;
}

const result = startGame (userAnswer, computerAnswer);
alert (result); 