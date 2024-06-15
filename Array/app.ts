
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

