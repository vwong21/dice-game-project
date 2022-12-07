const $rollDiceBtn = $('#roll-dice')
const displayUserScore = document.getElementById('user-score')
const displayCpuScore = document.getElementById('cpu-score')
const userDiceOne = document.getElementById('user-dice-one')
const userDiceTwo = document.getElementById('user-dice-two')
const cpuDiceOne = document.getElementById('cpu-dice-one')
const cpuDiceTwo = document.getElementById('cpu-dice-two')
const roundNumber = document.getElementById('round-number')
const dices = document.querySelectorAll('.dice')
const $popup = $('#popup-background')
const $winner = $('#win-or-lose')
const playAgain = document.getElementById('play-again')

let userDices = {
    dice1: 1,
    dice2: 1
}

let cpuDices = {
    dice1: 1,
    dice2: 1
}

let firstDice
let secondDice
let thirdDice
let fourthDice

let userResult = 0
let cpuResult = 0

const maxRounds = 3
let currentRound = 0

$popup.hide()

displayCurrentDice(userDices.dice1, userDices.dice2, cpuDices.dice1, cpuDices.dice2)

$rollDiceBtn.click(function(){
    rollDice()
    displayCurrentDice(userDices.dice1, userDices.dice2, cpuDices.dice1, cpuDices.dice2)
    calculatePoints(userDices.dice1, userDices.dice2, cpuDices.dice1, cpuDices.dice2)
    currentRound ++
    roundNumber.innerHTML = currentRound
    console.log(currentRound)
    if(currentRound == 3){
        $popup.fadeIn()
        if(userResult > cpuResult){
            $winner.html('You Win!')
        }else if(userResult < cpuResult){
            $winner.html('You Lose')
        }else{
            $winner.html('Tie')
        }
        playAgain.addEventListener('click', function(){
            $popup.fadeOut()
            currentRound = 0
            userResult = 0
            cpuResult = 0
            roundNumber.innerHTML = currentRound + 1
            displayUserScore.innerHTML = userResult
            displayCpuScore.innerHTML = cpuResult
        })
    }

})

function displayCurrentDice(dice1, dice2, dice3, dice4){
    userDiceOne.src = `../images/dices/${dice1}.png`
    userDiceTwo.src = `../images/dices/${dice2}.png`
    cpuDiceOne.src = `../images/dices/${dice3}.png`
    cpuDiceTwo.src = `../images/dices/${dice4}.png`
}

function rollDice(){
    userDices.dice1 = Math.floor((Math.random() * 6) + 1)
    userDices.dice2 = Math.floor((Math.random() * 6) + 1)
    cpuDices.dice1 = Math.floor((Math.random() * 6) + 1)
    cpuDices.dice2 = Math.floor((Math.random() * 6) + 1)
}

function calculatePoints(dice1, dice2, dice3, dice4){
    if(dice1 != 1 && dice2 != 1){
        if(dice1 == dice2){
            userResult += (dice1 + dice2) * 2
        }else{
            userResult += dice1 + dice2
        }
    }
    if(dice3 != 1 && dice4 != 1){
        if(dice3 == dice4){
            cpuResult += (dice3 + dice4) * 2
        }else{
            cpuResult += dice3 + dice4
        }
    }
    displayUserScore.innerHTML = userResult
    displayCpuScore.innerHTML = cpuResult
}


