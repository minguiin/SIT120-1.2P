// String Methods
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("string1").innerHTML = text.length;


function slicetext() {
    let text2 = document.getElementById("string2").innerHTML;
    let text2slice = text2.slice(7, 13);
    document.getElementById("string2").innerHTML = text2slice;    
}

function textreplace() {
    let content = document.getElementById("string3").innerHTML;
    document.getElementById("string3").innerHTML = content.replace("Lissandra", "Braum");
}


function catstodogs() {
    let content2 = document.getElementById("string4").innerHTML;
    content2 = content2.replaceAll("Cats", "dogs");
    content2 = content2.replaceAll("cats", "dogs");
    document.getElementById("string4").innerHTML = content2;
}

function tolowercase() {
    let content3 = document.getElementById("string5").innerHTML;
    document.getElementById("string5").innerHTML = content3.toLowerCase();
}

// Number Methods
let x = 5;
let y = 10
let z = x + y;
document.getElementById("number1").innerHTML = x + y;

let string1 = "John";
let string2 = "Barry";
document.getElementById("number2").innerHTML = string1 + string2;
document.getElementById("number3").innerHTML = x + string1;

let string3 = "100";
let string4 = "10";
document.getElementById("number4").innerHTML = string3 / string4;

document.getElementById("number5").innerHTML = string3 + string4;

// Array Methods
const fruits = ["Apple", "Orange", "Banana", "Pear"];
document.getElementById("array1").innerHTML = fruits.length;
document.getElementById("array2").innerHTML = fruits.toString();
document.getElementById("array3").innerHTML = fruits.join("-");
fruits[0] = "Kiwi";
document.getElementById("array4").innerHTML = fruits;
fruits.pop();
document.getElementById("array5").innerHTML = fruits;

// Date Methods
const d = new Date("2023-08-15");
document.getElementById("date1").innerHTML = d;
const d2 = new Date(2023, 8, 15, 19, 26, 30);
document.getElementById("date2").innerHTML = d2;
const d3 = new Date(9, 11, 24);
document.getElementById("date3").innerHTML = d3;
document.getElementById("date4").innerHTML = d2.toDateString();
document.getElementById("date5").innerHTML = d2.toUTCString();


// Functions
let value = addition(4, 3);
document.getElementById("function1").innerHTML = value;
let convertedtemperature = converttofahrenheit(36.5);
document.getElementById("function2").innerHTML = convertedtemperature;

function addition(a, b) {
    return a + b;
}

function converttofahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

