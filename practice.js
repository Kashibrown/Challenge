//This is a conditional loop for a bus entry.
//challenge 1
let age = 3;
if (age << 6){
    console.log("The bus is free")
}else if(age >= 6 && age <=17 ){
    console.log("This is a child discount")
}else if(age >= 18 && age <=26 ){
    console.log("This is a student discount")
}else if(age >= 27 && age <=66  ){
    console.log("You are required to pay the full price")
}else if(age > 66){
    console.log("This is a senior citizen discount")
}else{
    console.log("Enter age")
} 

//challenge two
let person = {
    name : "kashibrwn",
    age : 23,
    country : "Nigeria",
}

function logData (){
    let message = person.name + " is " + person.age + " and lives in " + person.country
    console.log(message)
}
logData() 
/* the output of this code should be kashibrwn is 23 and lives in Nigeria
yes, you can do that in a string but here we are using an object for it */

//challenge three
//we are going to be adding two objects together.
let object1 = {
    name: "Kashibrwn",
    age : 18
}
let object2 = {
    country : "Nigeria",
    state : "Lagos"
}

let concat = {...object1 , ...object2}
//note adding two objects with same key names would only give you the output of the last object
console.log(concat)

//challenge four
// We are going to write a function that would give us the sum and product of two numbers
function sumAndProduct(num1, num2){
    console.log(num1 + num2);
    console.log(num1 * num2);
}
sumAndProduct(2,4)
//I could use return inside of double console but unfortunately, you cannot have two return in a function.
