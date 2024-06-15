var role = ["admin", "manager", 1, 2];
// role.push(true);   // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.
// role[1]= 10;    // Error: Type 'number' is not assignable to type 'string'.
console.warn(role);
var role2 = ["admin", "manager", 1, 2];
role2.push(true); // No Error
role2[1] = "admin"; // No Error
console.warn(role2);


// in tuple we can give every variable a type and we can also give a type to the whole tuple

// but in array we can only give a type to the whole array