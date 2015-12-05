// Exercise 6 - w3resource - JavaScript Basics
// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.


/* if (year is not exactly divisible by 4) then (it is a common year)
 else if (year is not exactly divisible by 100) then (it is a leap year)
 else if (year is not exactly divisible by 400) then (it is a common year)
 else (it is a leap year) */

year = window.prompt("Input a Year : ");
x = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
alert(x);


// ternary operator:
// condition ?(then) value-if-true :(else) value-if-false