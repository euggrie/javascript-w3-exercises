// Exercise 5 - w3resource - JavaScript Basics
// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing
// one letter from the end of the string and attaching it to the front.

var string = "w3resource";
var stringArr = string.split("");

var reverse = function (list) {
    return list.reduce(function (reversedList, current) {
        return [ current ].concat(reversedList);
    }, []);
};
 console.log(reverse(stringArr).join(""));
