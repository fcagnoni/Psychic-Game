let wins = 0
let losses = 0
let guessesLeft = 9
let guessesSoFar = []
let answer = ""

let alphabet = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]

reset()

let winsElement = document.getElementById("wins")
let lossesElement = document.getElementById("losses")
let guessesLeftElement = document.getElementById("guessesLeft")
let guessesSoFarElement = document.getElementById("guessesSoFar")

updateDisplay()


document.addEventListener("keypress", handleKeyPress)

function handleKeyPress(e) {
  var guess = e.key
  var isLetter = alphabet.includes(guess)
  if (isLetter) {
    console.log("isLetter", guess)
  } else {
    console.log("isNotLetter", guess)
  }
  if (!isLetter) {
    return
  }

  if (guess === answer) {
    wins++
    console.log("you win")
    reset()
  } else {
    guessesLeft--
    guessesSoFar.push(guess)
    console.log("guessesSoFar", guessesSoFar)

    if (guessesLeft === 0) {
      losses++
      console.log("You Lose")
      reset()
    }
  }
  updateDisplay()
}

function updateDisplay() {
  winsElement.innerText=wins
  lossesElement.innerText=losses
  guessesLeftElement.innerText=guessesLeft
  guessesSoFarElement.innerText=guessesSoFar.join(", ")

}

function reset(){
  let randomIndex = Math.floor((Math.random() * 26));
  answer = alphabet[randomIndex]
  guessesLeft = 9
  guessesSoFar = []
  console.log("answer", answer)
}