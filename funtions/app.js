function Cals() {
    var a = 10;
    var b = 20;
    var c = a + b;
    console.log(c);
}
Cals(); // 30
function Cals2(a) {
    return a;
}
console.log("number type funtion", Cals2("hello"));
console.log("number type funtion", Cals2(10));
function Cals3(a, b) {
    var c = a + b;
    return c;
}
console.log("parameter type", Cals3(10, 20)); // 30
// Cals3(10, "hello"); // error parameter type is not match
// if second parameter is option then
function Cals4(a, b) {
    return b ? a + b : a;
}
console.log("optional parameter", Cals4(10)); // 10
