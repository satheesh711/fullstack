// Write a code snippet to find the length of an array.

var arr=[1,2,3,4,5]
console.log("frst task")
console.log(arr)
console.log(arr.length)

// How do you add an element to the end of an array?

console.log("second task")
arr.push(6)
console.log(arr)

// How do you remove the last element from an array?

console.log("thrid task")
arr.pop()
console.log(arr)

// How do you add an element to the beginning of an array?

console.log("fourth task")
arr.unshift(0)
console.log(arr)

// How can you remove the first element from an array?

console.log("fifth task")
arr.shift()
console.log(arr)

// How do you reverse the elements in an array?

console.log("sixth task")
arr.reverse()
console.log(arr)

// How can you find the index of a specific value in an array?

console.log("seventh task")
console.log(arr.indexOf(4))

// How can you check if a certain value exists in an array?

console.log("eigth task")
console.log(arr.includes(3))

// How can you sort the elements of an array in ascending order?

console.log("ninth task")
arr.sort()
console.log(arr)

// How can you convert an array to a string using commas as separators?

console.log("tenth task")
var str=arr.join()
console.log(str)


// Questions with Multiple Array Methods:

// Write a code snippet that adds an element to the end of an array, then removes the first element.

console.log("first task")
var array = ["1", "2", "3", "5"]
array.push("6")
array.shift()
console.log(array)

// How can you reverse an array and then join the elements into a string?

console.log("second task")
array.reverse()
var string = array.join("")
console.log(string)

// Write a code that first sorts an array in ascending order, then removes the last element.

console.log("third task")
var array1=[3,5,9,2,5,99]
console.log(array1)
array1.sort()
array1.pop()
console.log(array1)

// How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?

console.log("fourth task")
var array2 = [2,3,5,1,8,9]
console.log(array2)
array2.unshift(84,82)
console.log(array2)
array2.shift()
console.log(array2)
console.log(array2.length)

// How do you combine two arrays, sort the combined array, and then remove the last element?

console.log("fifth task")
var a1=[75,32,67]
var a2 =[100,3,56]
console.log(a1)
console.log(a2)
var a3=a1.concat(a2)
console.log(a3)
a3.sort()
console.log(a3)
a3.pop()
console.log(a3)