function combine (a:number | string  , b:number | string , type : "as-number" | "as-string"){
    if(type === "as-number"){
        return (+a)+(+b);
    }else{
        return a.toString() + " " +b.toString();
    }
}

console.warn(combine(1,2,"as-number"))

console.warn(combine("swati","vishwakarma","as-string"))

let type : "as-number" | "as-string" = "as-number";
console.warn(combine(10,20,type))