// Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

// Make sure you try different options and change the variables to ensure properly working code.

//1.     Write a statement that takes a variable of item and logs "in budget" if a price is $100 or less.
var item = 10
    if (item < 100){
        console.log("1. In budget")
    } else {
        console.log("1. Not in budget")
    };

//2.     Write a statement that takes a variable of hungry and logs "eat food" if you are hungry and "keep coding" if you are not hungry.
var hungry = false
    if (hungry === true){
        console.log("2. Eat food")
    } else {
        console.log("2. Keep coding")
    };

//3.     Write a statement that takes a variable of trafficLight and logs "go" if the light is green, "slow down" if the light is yellow and "stop" if the light is red.
var trafficLight = "yellow"
    if (trafficLight === "green"){
        console.log("3. Go")
    } else if (trafficLight === "yellow"){
        console.log("3. Slow down")
    } else if (trafficLight === "red"){
        console.log("3. Stop")
    };

//4.     Write a statement that takes two variables that are numbers and outputs the larger number. If the numbers are equal, output "the numbers are the same".
var num1 = 123
var num2 = 456
    if (num1 > num2){
        console.log("4. "+num1)
    } else if (num2 > num1){
        console.log("4. "+num2)
    } else if (num1 === num2){
        console.log("4. The numbers are the same")
    };

//5.     Write a statement that takes a variable of a number and logs whether the number is odd, even, or zero.
var num3 = 789
    if (num3 === 0){
        console.log("5. "+num3+" is zero")
    }
    else if (num3 % 2 === 1){
        console.log("5. "+num3+" is odd")
    } else {
        console.log("5. "+num3+" is even")
    };

// STRETCH Challenges

//6.     Write a statement that takes a variable of a grade percentage and logs the letter grade for that percentage, if the grade is 100% log "perfect score", if the grade is zero log "no grade available."

//7.     Write a statement that takes a variable of a boolean, number, or string data type and logs the data type of the variable. HINT: Check out the JavaScript typeof operator.

//8.     Create a password checker using a single conditional statement. If a user inputs a password with 12 or more characters AND the password includes !, then log "That is a mighty strong password!" If the user’s password is 8 or more characters OR includes !, then log "That password is strong enough." Log "That is not a valid password." for every other input.
