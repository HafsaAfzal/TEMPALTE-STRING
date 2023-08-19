// template string
// Write a function that takes an array of numbers and returns a string with the sum and
// the average of the numbers using template strings.
function sum_average(a,b,c,d){
    let total = a+b+c+d;
    let average=total/4;
    return(`the sum of array numbers is ${total} and the average of array numbers is ${average} `)

}

let number =[2,3,4,5];
let answere=sum_average(...number);
console.log(answere)
