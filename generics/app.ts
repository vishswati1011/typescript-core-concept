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

