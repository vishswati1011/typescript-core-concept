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