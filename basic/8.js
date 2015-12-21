// Exercise 8 - w3resource - JavaScript Basics
// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".


console.log('--------------------');

(function guessNum() {

    var no = parseInt(prompt("Enter an integer between 1 and 10:"));

    var numToGuess = Math.floor((Math.random() * 10) + 1);

    if (no == numToGuess) {
        console.log("Good Work!")
    } else {
        console.log("Not matched");
    }


})();

console.log('--------------------');