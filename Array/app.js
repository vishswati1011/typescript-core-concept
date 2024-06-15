// with data type in array
var arr = ["anil", "swati"];
arr.push("vishal"); //not give error because it is string array
// arr.push(1) //give error because it is string array
console.log("arr without type: ", arr);
// mixed array
var mixarray = ["anil", 1, "swati", 2];
mixarray.push(3); //not give error because it is mixed array
console.log("mixarray: ", mixarray);
var mixarray1 = ["anil", 1, "swati", 2];
var stringarr = ["anil", "swati"];
var intarr = [1, 2, 3, 4];
var boolarr = [true, false];
