const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices =document.querySelectorAll('button')

let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice () {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) +1 // le nombre de choix, 3.

    if (randomNumber === 1) {
        computerChoice = 'Pierre'
    }
    if (randomNumber === 2) {
        computerChoice = 'Ciseaux'
    }
    if (randomNumber === 3) {
        computerChoice = 'Feuille'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult () {
    if (computerChoice === userChoice) {
        result = 'Égalité !'
    }
    if (computerChoice === "Pierre" && userChoice === "Feuille") {
        result = 'Gagné !'
    }
    if (computerChoice === "Pierre" && userChoice === "Ciseaux") {
        result = 'Perdu !'
    }
    if (computerChoice === "Feuille" && userChoice === "Ciseaux") {
        result = 'Gagné !'
    }
    if (computerChoice === "Feuille" && userChoice === "Pierre") {
        result = 'Perdu !'
    }
    if (computerChoice === "Ciseaux" && userChoice === "Pierre") {
        result = 'Gagné !'
    }
    if (computerChoice === "Ciseaux" && userChoice === "Feuille") {
        result = 'Perdu !'
    }
    resultDisplay.innerHTML = result
}