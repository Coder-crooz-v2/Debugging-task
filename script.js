
let secretNumber = Math.trunc(20 * Math.random() + 1);
let timerDisplay = true;
let highscore = 0
let time = [0, 0];
let timer;
document.querySelector('.again').addEventListener('click', () => {
    time = [0, 0];
    clearInterval(timer);
    timerDisplay = false;
    secretNumber = 10;
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.getElementById('timer').innerHTML = '';
    document.querySelector('.number').innerHTML = '?';
    document.querySelector('body').style.backgroundColor = 'white';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
});

document.querySelector('.check').addEventListener('click', (e) => {
    clearInterval(timer);
    let guess = document.querySelector('.guess').value;
    timerDisplay = true;
    timer = setInterval(() => {
        time[1]++;
        if (time[1] % 60 == 0) {
            time[0]++;
            time[1] = 0;
        }
        if (timerDisplay) {
            if (time[1] < 10)
                document.getElementById('timer').innerHTML = ` ${time[0]} : 0${time[1]} `;
            else
                document.getElementById('timer').innerHTML = ` ${time[0]} : ${time[1]} `;
        }
    }, 1000);
    e.target.style.backgroundColor = 'black';

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Valid input";
    }
    else if (guess == secretNumber) {
        document.querySelector(".message").textContent = "You guessed it Right";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector("body").style.backgroundColor = 'green';
        document.querySelector('.number').textContent = secretNumber;
        if (highscore < document.querySelector('.score').textContent) highscore = document.querySelector('.score').textContent;
        if (time[1] < 10)
            document.querySelector('.highscore').textContent = highscore + ' ' + `(${time[0]}:0${time[1]})`;
        else
            document.querySelector('.highscore').textContent = highscore + ' ' + `(${time[0]}:${time[1]})`;
        timerDisplay = false;
    }
    else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high";
        document.querySelector('.score').textContent--;
    }


    else {
        document.querySelector(".message").textContent = "Too low ";
        document.querySelector('.score').textContent--;
    }

    if (document.querySelector('.score').textContent <= 0) {
        document.querySelector(".message").textContent = "You lost the Game";
        clearInterval(timer);
        timerDisplay = false;
        document.getElementById('timer').innerHTML = '';
        document.getElementById('hiddenResult').textContent = secretNumber;
        e.target.style.backgroundColor = '#f1356d';
        document.querySelector('body').style.backgroundColor = 'red';
    }

});
