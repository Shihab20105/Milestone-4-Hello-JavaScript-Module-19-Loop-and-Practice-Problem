/*                      Practice Problem 3

You are given three numbers 13, 79, and 45. Write a program that will print the largest number using if-else. */


var num1 = 13;
var num2 = 79;
var num3 = 45;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
/* Output:
79 */

var num1 = 13;
var num2 = 79;
var num3 = 145;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
/* Output:
145 */

var num1 = 213;
var num2 = 79;
var num3 = 145;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}
/* Output:
213 */