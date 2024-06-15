# Step 1: create first file
Make a ts file 
Write some code
Run it with ts
Js file will be generated
Make html file
Add js file in html file
And on chrome

# Step 2: 
What is duplicate identifier issue
  : when we run ts file it create js file which has same name of fuction 

# How to resolve it 
use export {} in ts file

# What is watch
after every changes we need to run ts file to update changes in js to avoid this we can run watch to check changes in ts and it will automatically update in js 
run command like  : tsc class.ts --watch 

its like nodemon in node js

run file without brawser
node app.js


# Type in TypeScripts

let a:number= 10;

let arr = number[]= [1,2,3,4,5]



# Array without Data Type

# push and update array operation in TS

# Mixed array 

# Define array type


// with data type in array
let arr  = ["anil","swati"]
arr.push("vishal") //not give error because it is string array
// arr.push(1) //give error because it is string array
console.log("arr without type: ", arr);

// mixed array

let mixarray = ["anil", 1, "swati", 2]
mixarray.push(3)    //not give error because it is mixed array
console.log("mixarray: ", mixarray);

let mixarray1: (string | number)[] = ["anil", 1, "swati", 2]

let stringarr : string[] = ["anil", "swati"]

let intarr : number[] = [1,2,3,4]

let boolarr : boolean[] = [true, false]

# Object in TS

default typed object
update property
add new property
define a custum type for object
use any with object


# Example

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

# union data type

let data:string|number|boolean = 'swati';

data =30;
console.log("data: ", data);

# Interface

syntax 
    interface interface_name {
      property_type: data_type,
      property_type: data_type,
    }

# Example

export {}

interface UserType {
    name : string,
    age : number,
    address : string
    getName : ()=>string
}
let users:UserType = {
    name : "bruce",
    age : 25,
    address : "gotham",

    getName :function(){
        return "interface for object name value is : " +this.name;
    }
}

console.log( users.getName())

# functions in TS
define a normal function
define funtion type
add params in function
define params type
optional params with type


# Example :

function Cals ()
{
    let a = 10;
    let b = 20;
    let c = a + b;
    console.log(c);
}

Cals(); // 30

function Cals2(a):number{
    return a;
}

console.log("number type funtion", Cals2("hello"));
console.log("number type funtion", Cals2(10));





function Cals3 (a:number, b:number):number
{
    let c = a + b;
    return c;
}

console.log("parameter type",Cals3(10, 20)); // 30

// Cals3(10, "hello"); // error parameter type is not match

// if second parameter is option then

function Cals4 (a:number, b?:number):number
{
    return b?a+b:a;
}

console.log("optional parameter", Cals4(10)); // 10


# class in TS

Define a Class
create a object for class
make property
make function
define data type of funtion and property
define data type to params

# Example
export {}
class App {
    name = 'swati vish'
    constructor(){
        console.log('constructor initialized.');
    }
    getName (){
        return this.name;
    }
}
let a1 = new App();
console.log(a1.getName());

// assign value to constructor
class App1 {
    name;
    constructor(name){
        this.name = name;
        console.log('pass parma to constructor.');
    }
    getName (){
        return this.name;
    }
}
let a2 = new App1('swati vish');
console.log(a2.getName());

// assign data type to variable
class App2 {
    name :string;
    constructor(name){
        this.name = name;
        console.log('name is string data type.');
    }
    getName():string{
        return this.name;
    }
    getAddress():void{
        console.log('void means no return type.');
    }
}
console.log(new App2('swati vish').getName());


# Inheritance
What is inheritance
Make a parent class
Make a child class
Inherit a class
# Example
 //parent class

class Parent {
    name:string;
    setName(name){
        this.name = name;
    }
}
//child class
class Child extends Parent{
    getName():string{
        return this.name;
    }
}
let c1 = new Child();
c1.setName('Mongo');

console.log(c1.getName());

# namespace in Typescript
what is namespace, how to use it and example



# what is module make 2 file and make module use them in single file

Example
# make 2 file
export default class Login{
    data = 'Teacher Login done'
}


export default class Login{
    data = 'Student Login done'
}

# use them in single file
import sLogin from './Student'
import tLogin from './Teacher'

let teacher = new tLogin();
console.log(teacher.data);

let student = new sLogin();
console.log(student.data);

# What is Generics in TypeScript
why we need it 
make a program with generics
make a program without generics
check difference

# Example:

function users(data:Object):Object{
    return data
}

console.log(users({name:'swati vish',age:25})); 

// a generic function can give any tyoe of output we dont need to define data type of output


// Example 2: Generic Function with Multiple Data Types

function users1<T>(data:T):T{
    return data
}
console.log(users1('swati vish'));
console.log(users1(30));


function users2<T>(data:T):T{
    return data
    // return "data"  // give error because we have defined data type as T
}

console.log(users1({name:'swati vish',age:25}).age);   //output: 25 


# enum in TS
what is enum
Make a Program with enum
use enum with variable and function

# Example
enum Days {
    mon,tue,wed,thu,fr,sat,sun
}

let whihcDay : Days;
// whihcDay = 'text' // Error: Type 'string' is not assignable to type 'Days'

whihcDay = Days.mon;
console.log(whihcDay); // output: 0
// console.log(Days.tue==='tue'); // systac error 
console.log(Days.tue===1); // output: true


function whichDaytoday(day:Days){
    console.log(day);
}

whichDaytoday(Days.sat); // output: 5
// whichDaytoday("monday"); // Argument of type '"monday"' is not assignable to parameter of type 'Days'.

enum weekdays {
    mon = 11, tue, wed, thu, fri, sat, sun
}

console.log(weekdays.mon); // output: 11
console.log(weekdays.tue); // output: 12


# Symbol in TypeScript
make a program with symbol
use symbol as key of object
use synbol as function of class

# Example 

let s1 = Symbol();

console.log(s1); // output: Symbol()
 let s2 = Symbol();
 console.log(s1===s2); // output: false

 let s3 = Symbol('symbol3');
 console.log(s3); // output: Symbol(symbol3)

// how to use sybmol with variable 

let s4= Symbol("data1");

let data = {
    [s4] : "some data"
}
console.log(data[s4]); // output: some data


// use symbol in class

let demoF1 = Symbol('d2')
class Demo {
    [demoF1](){
        return 'demoF1'
    }
}

let d1= new Demo();
console.log(d1[demoF1]()); // output: demoF1


# Configuration file in TS
how to make it what we can config , try with some configuration

in whihc folder we want output ,form which file we want  input , whihc file should not change, where to use ecamscript

# Answer
to create config file run command in terminal in your folder
 tsc --init
 

# Type inference
ek vaiable apne app idea laga leta ki value kis type ki hona chahiye based on first assign value

let data;   // any is the data type of data variable
let data ="swati"   //string is the data type of data variable

const num=10    // num type is 10


# difference between tuple and array
In tuple we can give every variable a type and we can also give a type to the whole tuple. but in array we can only give a type to the whole array

# literal type in typescript 

apply values rather than apply types to a variable or parameter

let data : string |number = 'hello'

let lit_data :"abc" | 123 = "abc"

here we can assign any other value to lit_data