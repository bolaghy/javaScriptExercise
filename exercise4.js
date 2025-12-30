// 16. Create a variable character with value "A". Write code to check 
// if it's an uppercase letter, lowercase letter, or neither (you can assume 
// it's a single character). Print the result.

let character = "A";

if( character <= "A" && character <= "Z"){
    console.log("The Character is a uppercase");
}else if(character >= "a" && character <="z"){
    console.log("The Character is a uppercase");
} else{
     console.log("The Character is a uppercase or lowercase");
}

// 17. Write code with variables age (value 25) and hasLicense (value true). 
// A person can drive only if they are 18 or older AND have a license. 
// Print whether they can drive or not.

const AGE = 25;
let hasLicence = true;

if (AGE >=18 && hasLicence == true){
    console.log("The user is eligible to drive")
} else{
    console.log("The user is not eligible to drive")
}


// 18. Create a variable totalAmount with value 1000 and isMember with value true.
//  If the person is a member, apply a 20% discount, otherwise 5% discount. 
// Calculate and print the final amount.

 let totalAmount = 1000;
 let isMember = true;
 let memberDiscount =   1000 - (0.2 * 1000)
 let notMemberDiscount =   1000 - (0.05 * 1000)

if(isMember == true){
    console.log("checkout " + memberDiscount )
} else{
    console.log("checkout " + notMemberDiscount )
}


// 19. Write code with a variable number (value 15). 
// Print all numbers from 1 to that number, but only print numbers divisible by 3
let num = 15;

for(i = 1; i<= num; i++){
    if( i %3 == 0){
        console.log(i)
    }
 }

// 20. Create variables hour (value 14) representing time in 24-hour format. 
// Write code that prints "Good morning" (5-11), "Good afternoon" (12-17),
//  "Good evening" (18-21), or "Good night" (22-4).

let hour = 14;

if (hour >= 5 && hour <= 11) {
  console.log("Good morning");
} else if (hour >= 12 && hour <= 17) {
  console.log("Good afternoon");
} else if (hour >= 18 && hour <= 21) {
  console.log("Good evening");
} else {
  console.log("Good night");
}