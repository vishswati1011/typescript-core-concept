enum Days {
    mon,tue,wed,thu,fr,sat,sun
}

let whihcDay : Days;
// whihcDay = 'text' // Error: Type 'string' is not assignable to type 'Days'

whihcDay = Days.mon;
console.log(whihcDay); // output: 0
// console.log(Days.tue==='tue'); // systac error 
console.log(Days.tue===1); // output: true


function whichDaytoday(day:Days){
    console.log(day);
}

whichDaytoday(Days.sat); // output: 5
// whichDaytoday("monday"); // Argument of type '"monday"' is not assignable to parameter of type 'Days'.

enum weekdays {
    mon = 11, tue, wed, thu, fri, sat, sun
}

console.log(weekdays.mon); // output: 11
console.log(weekdays.tue); // output: 12