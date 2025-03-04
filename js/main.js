'use strict';

/*
    - Seleccionar elementos html: input, button, span clue, span attempts
    - Crear accumulator
    - Generar random number entre 1 y 100 (hacer console.log)
    - Cuando la usuaria haga click en el botón:
        · Guardar el valor del input number (hacer console.log)
        · Condiciones:
            > Si number user < 1 || number user > 100 --> Pintar en el span clue "El número debe estar entre 1 y 100"
            > Si number user > random number --> Pintar en el span clue "Demasiado alto"
            > Si number user < random number --> Pintar en el span clue "Demasiado bajo"
            > Si number user = random number --> Pintar en el span clue "Has ganado campeona!!!"
        · Sumar 1 intento al accumulator
*/

const inputUserNumber = document.querySelector('.js-user-number');
const pruebaButton = document.querySelector('.js-btn');
const clue = document.querySelector('.js-clue');
const attempts = document.querySelector('.js-attempts');

let accumulator = 0;

const getRandomNumber = (max) => Math.ceil(Math.random() * max);
const randomNumber = getRandomNumber(100);
console.log(`Random number: ${randomNumber}`);

const handleClick = (event) => {
    event.preventDefault();

    const userNumber = parseInt(inputUserNumber.value);
    console.log(`User number: ${userNumber}`);

    if (userNumber < 1 || userNumber > 100) {
        clue.innerHTML = 'El número debe estar entre 1 y 100';
    } else if (userNumber === randomNumber) {
        clue.innerHTML = 'Has ganado campeona!!!';
    } else if (userNumber > randomNumber) {
        clue.innerHTML = 'Demasiado alto';
    } else if (userNumber < randomNumber) {
        clue.innerHTML = 'Demasiado bajo';
    }

    accumulator++;
    attempts.innerHTML = accumulator;
}

pruebaButton.addEventListener("click", handleClick);