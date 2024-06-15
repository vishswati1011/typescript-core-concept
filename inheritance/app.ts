
//parent class

class Parent {
    name:string;
    setName(name){
        this.name = name;
    }
}
//child class
class Child extends Parent{
    getName():string{
        return this.name;
    }
}
let c1 = new Child();
c1.setName('Mongo');

console.log(c1.getName());
