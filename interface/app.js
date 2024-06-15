"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = {
    name: "bruce",
    age: 25,
    address: "gotham",
    getName: function () {
        return "interface for object name value is : " + this.name;
    }
};
console.log(users.getName());
