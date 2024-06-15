function combine(a, b, type) {
    if (type === "as-number") {
        return (+a) + (+b);
    }
    else {
        return a.toString() + " " + b.toString();
    }
}
console.warn(combine(1, 2, "as-number"));
console.warn(combine("swati", "vishwakarma", "as-string"));
var type = "as-number";
console.warn(combine(1, 2, type));
