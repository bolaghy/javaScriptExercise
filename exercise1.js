// 1.Declare three variables: firstName, lastName, and age. Assign them appropriate values and print a sentence like "My name is John Doe and I am 25 years old."

const firstName = "Bolaji";
const lastName = "Isaac";
const age = "27"

console.log("My name is "+ firstName + " " + lastName + " and my age is " + age )

// 2. Create two variables num1 and num2 with values 15 and 8. 
// Calculate and print their sum, difference, product, and quotient.

let num1 = 15;
let num2 = 8;

const sum = num1 + num2;
const diff = num1 - num2;
const prod = num1 * num2;
const quo = num1 / num2;

console.log("The sum of "+ num1+ " + " + num2+ " is " + sum )
console.log("The difference of "+ num1+ " + " + num2+ " is " + diff )
console.log("The product of "+ num1+ " + " + num2+ " is " + prod )
console.log("The quotient of "+ num1+ " + " + num2+ " is " + quo )


// 3. Declare a variable temperature with value 22. 
// Write an if-else statement that prints "It's cold" if temperature is less than 20, 
// otherwise print "It's warm".

const temp = 22;

if (temp < 20){
    console.log(" it is warm");
} else {
    console.log(" it is cold");
}


// 4. Create a variable price with value 50 and another variable discount with value 10.
//  Calculate the final price after discount and print it.
const price = 50;
const discount = 10;

const finalPrice = price - discount
console.log(finalPrice)


// 5. Declare a variable number with any value. Write code to check if the number is 
// positive, negative, or zero, and print the result.

const num = -3

if( num > 0){
    console.log("Number is Positive ")
}else if(num < 0){
        console.log("Number is Negetive ")
}else {
        console.log("number is Zero ")
}


