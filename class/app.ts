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