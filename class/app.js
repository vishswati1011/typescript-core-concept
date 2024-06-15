"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var App = /** @class */ (function () {
    function App() {
        this.name = 'swati vish';
        console.log('constructor initialized.');
    }
    App.prototype.getName = function () {
        return this.name;
    };
    return App;
}());
var a1 = new App();
console.log(a1.getName());
// assign value to constructor
var App1 = /** @class */ (function () {
    function App1(name) {
        this.name = name;
        console.log('pass parma to constructor.');
    }
    App1.prototype.getName = function () {
        return this.name;
    };
    return App1;
}());
var a2 = new App1('swati vish');
console.log(a2.getName());
// assign data type to variable
var App2 = /** @class */ (function () {
    function App2(name) {
        this.name = name;
        console.log('name is string data type.');
    }
    App2.prototype.getName = function () {
        return this.name;
    };
    App2.prototype.getAddress = function () {
        console.log('void means no return type.');
    };
    return App2;
}());
console.log(new App2('swati vish').getName());
