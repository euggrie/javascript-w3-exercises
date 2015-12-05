// Exercise 3 - w3resource - JavaScript Basics
//Write a JavaScript program to get the current date.

var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();

var myDate = (function() {
    alert("today is: " + day + "-" + month + "-" + year)
});

