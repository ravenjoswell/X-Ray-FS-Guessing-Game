let guess_count = 0
let answer = Math.floor(Math.random() * 101)
let submit = document.querySelector('button')
let correct_answer = document.getElementById('correct')
let guesses = document.getElementById("guesses")

console.log(answer)

const checker = () => {
    let input = document.querySelector('input').value
    guess_count++

    if (parseInt(input) === answer) {
        correct_answer.style.display = 'block'
    } else if(parseInt(input) > answer){
        let new_guess = document.createElement('div')
        new_guess.innerText = `Too high! That was guess: ${guess_count}. You guessed: ${input}`
        guesses.appendChild(new_guess)
       
    } else if(parseInt(input) < answer){
        let new_guess = document.createElement('div')
        new_guess.innerText = `Too low! That was guess: ${guess_count}. You guessed: ${input}`
        guesses.appendChild(new_guess)
    }
}

submit.addEventListener('click', checker);






