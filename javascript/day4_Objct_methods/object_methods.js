// task1

var person={
    firstName:'sira',
    lastName:'satheesh',
    age:20
}
console.log(person.firstName)
person.city = "New York"
console.log(person)


// task2

var product={
    name:"mobile",
    price:30000,
    inStock:5
}
product.price = 32000
delete product.inStock
console.log(product)


// task3

var library={
    math:[
       { BookName:'Calculas',author:'unkown'},
        {BookName:'Probability',author:'i do not know'},
        {BookName:'Statastic',author:'nothing'}
    ],
    Programming:[
        {language:'c',app:'devc++'},
        {language2:'python',app:'jupiter notebook'},
        {language3:'java',app:'idle'},
    ]
}
library.scienceFiction={
    books: [
      { title: "The Blazing World:", author: " Margaret Cavendish" },
      { title: "Frankenstein", author: "Mary Shelley"},
    ]
  }
  console.log(library)
  console.log(library.math[0])
  delete library.Programming
  console.log(library)

//  task 4

var user ={
    username:'satheesh',
    email:'satheessira@gmail.com',
    address:{
        city: 'Suryapet',
        state:'Telangana',
        zip:'508213'
    }
}
console.log(user)
Object.freeze(user)
user.email = "sirasatheesh@outlook.com"
console.log(user)
console.log(Object.isFrozen(user))
user.phone = 'oppo'
console.log(user)


//task5

var car ={
    make:'toyota',
    model:'vs6',
    price:1500000
}
console.log(car)
Object.seal(car)
delete car.make
console.log(car)
console.log(Object.isSealed(car))
car.price = 1400000
console.log(Object.isExtensible(car))
console.log(car)


//task6

const store = {
    name: "SuperMart",
    products: {
      electronics: {
        phones: {
          apple: {
            iPhoneX: { price: 999, stock: 20 },
            iPhone12: { price: 1099, stock: 15 },
          },
          samsung: {
            galaxyS21: { price: 799, stock: 25 },
            galaxyNote20: { price: 999, stock: 10 },
          },
        },
        laptops: {
          dell: {
            XPS13: { price: 1200, stock: 10 },
            Inspiron15: { price: 800, stock: 30 },
          },
          hp: {
            SpectreX360: { price: 1300, stock: 5 },
            Pavilion15: { price: 750, stock: 20 },
          },
        },
      },
      groceries: {
        fruits: {
          apples: { price: 2, stock: 100 },
          bananas: { price: 1, stock: 150 },
        },
        vegetables: {
          carrots: { price: 1.5, stock: 200 },
          spinach: { price: 1, stock: 100 },
        },
      },
    },
  };

  console.log(store.products.groceries.vegetables.spinach)
  console.log(store.products.electronics.laptops.hp.Pavilion15.price)
  