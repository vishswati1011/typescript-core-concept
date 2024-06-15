export {}

interface UserType {
    name : string,
    age : number,
    address : string
    getName : ()=>string
}
let users:UserType = {
    name : "bruce",
    age : 25,
    address : "gotham",

    getName :function(){
        return "interface for object name value is : " +this.name;
    }
}

console.log( users.getName())
