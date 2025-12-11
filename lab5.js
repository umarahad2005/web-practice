alert('hello from java script ');

console.log("hello");
let a = 5;
console.log(a);
a = true;
console.log(a);
a = "welcome";
console.log(a);
b = 50+7;
console.log("the value of b is : " + b +` num is ${b}`);
c = (16/3)*4 ;
console.log("the value of c is : " + c +` num is ${c}`);
let hen = 4;
let ben = 5;
console.log( "the sum of hen and ben is :"+ hen + ben);

let firstname = "usmani \t";
let msg = "\tplease see this this is great effort\t";
let animal = '\tcombo';
console.log(firstname+msg+animal);

console.log(msg.toUpperCase( ));

console.log(msg.trim( ));



console.log(animal.indexOf('bo'));
let str = 'supercellisoneofthemostimpthing'
console.log(str.slice(0,5));
console.log(str.slice(5));
let ann = 'yessss ! we got it yessss';
console.log(ann);
console.log(ann.replace('yessss' , 'noooooo'));
console.log(`i counted the student ${45+7}`);

let pie = Math.PI;
let r = Math.round(4.9);
area = pie * r * r;
console.log("the area using math object is : "+ area);

let rating = 1;
if (rating === 3){
    console.log("you are the supra man ");
}
else if (rating == 2){
    console.log("meet me ");
}
else if (rating == 1){
    console.log("you are not a supra man");
}
let students = ["ali", "umar", "usman", "mohtashim"];
console.log(students.join(" "));
const colors = [
    ['red','blue'],
    ['orange','black'],
    ['purple','navy blue ']
]
for (const row of colors) {
  for (const color of row) {
    console.log(color);
  }
}
const board = [
    ['0',null,'x'],
    [null,'x','0'],
    ['x','0',null]
]
console.log("Board:");
for (const row of board) {
  console.log(row);
}

console.log("\n========== Task 01 ==========");
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
rant("I hate beets");

console.log("\n========== Task 02 ==========");
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
isSnakeEyes(1, 1);
isSnakeEyes(1, 5);
isSnakeEyes(4, 5);

console.log("\n========== Task 03 ==========");
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 3));
console.log(multiply(9, 9));
console.log(multiply(5, 4));

console.log("\n========== Task 04 ==========");
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    } else {
        return false;
    }
}
console.log(isShortsWeather(80));
console.log(isShortsWeather(48));
console.log(isShortsWeather(75));

console.log("\n========== Task 05 ==========");
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1];
}
console.log(lastElement([3, 5, 7]));
console.log(lastElement([1]));
console.log(lastElement([]));

console.log("\n========== Task 06 ==========");
function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}
console.log(capitalize('eggplant'));
console.log(capitalize('pamplemousse'));
console.log(capitalize('squid'));

console.log("\n========== Task 07 ==========");
function sumArray(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}
console.log(sumArray([1, 2, 3]));
console.log(sumArray([2, 2, 2, 2]));
console.log(sumArray([50, 50, 1]));

console.log("\n========== Task 08 ==========");
function returnDay(num) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    if (num < 1 || num > 7) {
        return null;
    }
    return days[num - 1];
}
console.log(returnDay(1));
console.log(returnDay(7));
console.log(returnDay(4));
console.log(returnDay(0));

console.log("\n========== Task 09 ==========");
const square = function(num) {
    return num * num;
}
console.log(square(4));
console.log(square(3));