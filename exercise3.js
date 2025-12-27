// 11. Write code that takes a variable marks (value 85) and assigns a grade 
// based on: 90-100: A, 80-89: B, 70-79: C, 60-69: D, below 60: F. Print the grade.

let mark = 85

if(mark >=90 && mark >= 100){
    console.log("A")
}else if(mark >=80 && mark <=89){
     console.log("B")
}else if(mark >=70 && mark <=79){
     console.log("C")
}else if(mark >=60 && mark <=69){
     console.log("D")
}  else {
    console.log("F")
}  

// 12. Create variables for length and width of a rectangle (values 5 and 10).
//  Calculate and print both the area and perimeter.
let lenght = 5;
let width = 10;

const area = lenght * width;
const peri = 2* (lenght + width);

console.log("Area for "+ lenght+ " and "+width+ " is "+ area)
console.log("Perimeter for "+ lenght+ " and "+width+ " is "+ peri)
// 13. Write code with a variable year (value 2024). Check if it's a leap year or not. 
// (Leap year: divisible by 4, but if divisible by 100, must also be divisible by 400).
//  Print the result.

let year = 2024; 

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}
// 14. Create a variable number with value 47. Write code that checks if the 
// number is divisible by both 3 AND 5, just by 3, just by 5, or by neither. 
// Print appropriate messages for each case.

const num = 47;

if(num % 3=== 0) {
    console.log(true)
}else if(num % 3=== 0 && num % 5=== 0){
    console.log(true)
}else if(num % 5=== 0) {
    console.log(true)
}else {
    console.log(false)
}

// 15. Write code with three variables: subject1, subject2, subject3 
// containing marks (values 78, 85, 92). Calculate the average and print "Excellent" 
// if average >= 90, "Good" if >= 75, "Average" if >= 60, otherwise "Needs improvement".

let subject1 = 78;
let subject2 = 85;
let subject3 = 93;

const avg = subject1 + subject2 + subject3 /3;

if (avg >=90){
    console.log("Excelent")
} else if(avg >= 75){
    console.log("Good")
} else if(avg >= 60){
    console.log("Average")
} else {
    console.log("Need improvement")
}
