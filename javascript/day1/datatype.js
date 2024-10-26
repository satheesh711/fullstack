// 1.console the person object
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};

delete person.city;
person.country = "USA";
person.age = 31;
console.log("first Question")
console.log(person);

// 2.How can you remove the model property from the following object using the delete operator?
  
const smartphone = {
    brand: "Samsung",
    model: "Galaxy S21",
    price: 799
};
console.log("second Question")
console.log(smartphone)
delete smartphone.model
console.log(smartphone)

// 3.add property to given object
const book = {
    title: "Learn JavaScript",
    author: "John Smith",
    pages: 400
};
console.log("third Question")
console.log(book)
// book["genre"] = "Programming";
// console.log(book)
book.genre = "Programming";
console.log(book)

// 4.   Console the “fish”
var data = [10, 20, ["apple", "banana"], ["cat", ["dog", "elephant"], "fish"], "grape"];
console.log("fourth Question")
console.log(data[3][2])

// 5.Console. The “eraser”
var items = [["pen", "pencil"], "notebook", [1, 2, [3, 4, ["eraser"]]], "marker"];
console.log("fifth Question")
console.log(items[2][2][2][0])