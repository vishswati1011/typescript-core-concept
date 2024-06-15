let users = {
    name : "bruce",
    age : 25,
    address : "gotham"
}

// users.name = 100 //give error because it is string
// users.age = "25" //give error because it is number
// users.address = 100 //give error because it is string

users.name = "peter"
users.age = 30
users.address = "new york"

console.log("users: ", users); // { name: 'peter', age:30, address: 'new york' }


// define custum type in object

interface UserTyped {
    name:string,
    age:number,
    address:any
}
let user1 : UserTyped = {
    name : "tony",
    age : 40,
    address : "new york"
}

user1.address = 601 //not give error because it is any type

console.log("user1: ", user1); // { name: 'tony', age: 40, address: 601 }


// define any property in object


let user2 : any ={
    name : "tony",
    age : 40,
    address : "new york"
}

user2.address = 601 //not give error because it is any type
user2.name = 100 //not give error because it is any type
user2.age = "40" //not give error because it is any type

console.log("user2: ", user2); // { name: 100, age: '40', address: 601 }
