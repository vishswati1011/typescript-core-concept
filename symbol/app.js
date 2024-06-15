var _a;
var s1 = Symbol();
console.log(s1); // output: Symbol()
var s2 = Symbol();
console.log(s1 === s2); // output: false
var s3 = Symbol('symbol3');
console.log(s3); // output: Symbol(symbol3)
// how to use sybmol with variable 
var s4 = Symbol("data1");
var data = (_a = {},
    _a[s4] = "some data",
    _a);
console.log(data[s4]); // output: some data
// use symbol in class
var demoF1 = Symbol('d2');
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype[demoF1] = function () {
        return 'demoF1';
    };
    return Demo;
}());
var d1 = new Demo();
console.log(d1[demoF1]()); // output: demoF1
