let role : [string,string,number,number] = ["admin","manager", 1, 2];
// role.push(true);   // Error: Argument of type 'true' is not assignable to parameter of type 'string | number'.
// role[1]= 10;    // Error: Type 'number' is not assignable to type 'string'.
console.warn(role);

let role2 : [string,string,number,number,boolean?] = ["admin","manager", 1, 2];

role2.push(true);   // No Error
role2[1]= "admin";    // No Error
console.warn(role2);