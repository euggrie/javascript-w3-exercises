// Exercise 1 - w3resource - JavaScript Basics

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Friday.
// Current time is : 4 PM : 50 : 22

  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();

console.log("Current Time : "+hour + " : " + minute + " : " + second);