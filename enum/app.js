var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thu"] = 3] = "thu";
    Days[Days["fr"] = 4] = "fr";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
var whihcDay;
// whihcDay = 'text' // Error: Type 'string' is not assignable to type 'Days'
whihcDay = Days.mon;
console.log(whihcDay); // output: 0
// console.log(Days.tue==='tue'); // systac error 
console.log(Days.tue === 1); // output: true
function whichDaytoday(day) {
    console.log(day);
}
whichDaytoday(Days.sat); // output: 5
// whichDaytoday("monday"); // Argument of type '"monday"' is not assignable to parameter of type 'Days'.
var weekdays;
(function (weekdays) {
    weekdays[weekdays["mon"] = 11] = "mon";
    weekdays[weekdays["tue"] = 12] = "tue";
    weekdays[weekdays["wed"] = 13] = "wed";
    weekdays[weekdays["thu"] = 14] = "thu";
    weekdays[weekdays["fri"] = 15] = "fri";
    weekdays[weekdays["sat"] = 16] = "sat";
    weekdays[weekdays["sun"] = 17] = "sun";
})(weekdays || (weekdays = {}));
console.log(weekdays.mon); // output: 11
console.log(weekdays.tue); // output: 12
