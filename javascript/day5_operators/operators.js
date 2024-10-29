// Multiple Operators (1)


var x = 10;
var y = 5;
var result = (x + y) * 2 - 5;
console.log(result)

// Multiple Operators (2)

var age = 20;
var message = (age >= 18 && age < 60) ? "Adult" : "Not an adult";
console.log(message)

// Multiple Operators (3)

var x = 5;
var y = "5";
var comparison = (x == y) && (x !== y);
console.log(comparison)

// Multiple Operators (4)

var price = 100;
var discount = 0.1;
var totalPrice = (price * (1 - discount)) > 50 ? "Expensive" : "Cheap";
console.log(totalPrice)


// Multiple Operators (5)

var a = 7;
var b = 14;
var condition = (a < b) || (a === b);
console.log(condition)

// Multiple Operators (6)

var num = 4;
var result =   (num % 2 === 0) && typeof num === "number";
console.log(result)

// Multiple Operators (7)

var str = "Hello";
var isLong = (str.length > 5) ? true : false;
console.log(isLong)

// Multiple Operators (8)

var x = 15;
var y = 5;
var result = x >= y ? x + y : x - y;
console.log(result)

// Multiple Operators (9)

var a = true;
var b = false;
var result = a && b ? "Both true" : "One or both false";
console.log(result)


// Multiple Operators (10)

var val = 50;
var result = (val > 20) && (val < 100) ? "Within range" : "Out of range";
console.log(result)


// Multiple Operators (11)

var x = 12;
var y = 8;
var result = x > y ? (x + y) * 2 : (x - y) / 2;
console.log(result)

// Multiple Operators (12)

var temperature = 30;
var weather = temperature > 25 ? (temperature < 40 ? "Hot" : "Very Hot") : "Cool";
console.log(weather)

// Multiple Operators (13)

var age = 16;
var category = (age >= 18) ? "Adult" : (age > 12) ? "Teen" : "Child";
console.log(category)


// Multiple Operators (14)

var x = 5;
var y = 10;
var z = 15;
var result = (x + y > z) && (z % y === 0);
console.log(result)

// Multiple Operators (15)

var isAdmin = true;
var isLoggedIn = false;
var message = isAdmin && isLoggedIn ? "Access granted" : "Access denied";
console.log(message)