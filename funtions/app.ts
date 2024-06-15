
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