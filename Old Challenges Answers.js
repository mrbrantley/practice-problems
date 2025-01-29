// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 35
// var temp = 350
// var temp = 212

//I want to create a if/else if/else conditional that can catch all inputs for the variable "temp", and give the correct output.
if (typeof temp !== "number"){
  console.log("Enter a numerical Fahrenheit temperature")
//This will ensure that the input for the variable "temp" has a "number" data type. This will prevent hackers/bad actors from inputing other data types and breaking the purpose of the conditional. I put it first in the if statement because Boolean and null types can be interpreted as a numerical value. If left as the last "else" condition as a catch all for any data other than numbers < 212, I would get the return that "true degrees Fahrenheit is below the boiling point of water" because the Boolean "true" is stored as a value of 1, "false" as 0, etc. 
} else if (temp === 212) {
  console.log(`${temp} degrees Fahrenheit is at the boiling point of water`)
//This will catch the input of 212 and give the output "212 degrees Fahrenheit is at the boiling point of water". This was put second as a good practice when making conditionals. If an input value meets as "true" for more than one conditional, the more precise conditional is desired. Because javascript computes the code line by line, I put the more precise conditionals first. I chose to use the `${temp}` display method to keep continuity throughout the code for the next series of conditionals. 
} else if (temp > 212) {
  console.log(`${temp} degrees Fahrenheit is above the boiling point of water`)
//This will set the condition to catch all numbers greater than 212 to return the string as "(the input number) degrees Fahrenheit is above the boiling point of water".  
} else {
  console.log(`${temp} degrees Fahrenheit is below the boiling point of water`)
};
//The last else statement is a catch all for all other possible inputs. The input cannot be a value other than a number, equal to 212, or greater than 212, so all remaining possible inputs that satisfy this condition would be numbers below 212. The console log response will display "(the input number) degrees Fahrenheit is below the boiling point of water".  

// --------------------2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]
//Because accessors do not modify the original array, I will have to create a new variable that uses the accessor ".concat" on the provided arrays to combine them. 
var allMyNumbers = myNumbers1.concat(myNumbers2)
console.log(allMyNumbers.length)
// Logging the ".length" property on the new array will display the number of indexes on the new array to the terminal console. 



// --------------------3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"
//Create a new variable to apply the ".split" accessor to myString1, because accessors do not permantly change the variables/arrays. This will put every letter of the myString1 variable into an array. 
var charlieSplit = myString1.split("")
//With the new array that splits every letter of the variable myString1, permanently reverse the order of the letters with the ".reverse" mutator.
charlieSplit.reverse();
//Rejoin the letters of the changed/destructed array into a single string with the ".join" accessor. Becasue an accessor does not permanently change an array, we must create a new variable that contains the new joined string.
var reverseCharlie = charlieSplit.join("");
// Repeat the steps for the variable "myString2"
var deltaSplit = myString2.split("")
deltaSplit.reverse();
var reverseDelta = deltaSplit.join("");
//Combine the two new strings to display as an array by logging the two new variables using array destructoring. 
console.log([reverseCharlie, reverseDelta])



// --------------------4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

var number1 = 42
var number2 = 27

//This will require an if/else if/ else conditional statement. 
if (typeof number1 !== "number" && typeof number2 !== "number") {
  console.log("number1 and number2 must be numbers")
//Starting with the most precise scenario, this will determine if the data types entered into variables "number1" and "number2" are the "number" type. This is done because a String/Boolean/null cannot be subtracted from String/Boolean/null, and subtraction is required in the problem. This && condition is necessary because the console would log only "number1" condition if both variables were not number data types. 
} else if (typeof number1 !== "number"){
  console.log("number1 must be a number")
//This is the next most precise conditional to determine if the variable "number1" is in fact a number data type. This prevents hackers/ nefarious characters from breaking the code with a String/Boolean/null data type while specifying to the user that the specific variable "number1" is not in compliance. This is done because a String/Boolean/null cannot be subtracted from number nor vice/versa.
} else if (typeof number2 !== "number"){
  console.log("number2 must be a number")
//This is the next most precise conditional to determine if the variable "number2" is in fact a number data type. This prevents hackers/ nefarious characters from breaking the code with a String/Boolean/null data type while specifying to the user that the specific variable "number2" is not in compliance. This is done because a String/Boolean/null cannot be subtracted from number nor vice/versa.
} else if (number1 === number2) {
  console.log("number1 and number2 cannot be the same numbers, but if you absolutely must know the answer is 0")
//This deteremines if the values of variables number1 and number2 are equal. Because the problem only asks that variables be evaluated by which is greater and the lesser variable to be subtracted from the greater, this console logged answer explains the the rules and the answer. The answer will always come out to zero because any number minus the same number will equal zero. 
} else if (number1 > number2) {
  console.log(number1 - number2)
//This determines if the variable number1 is larger than variable number2, and logs the smaller number being subtracted from the larger number. 
} else {
  console.log(number2 - number1)
};
//This is the catch all, all possible remaining scenarios are values where number2 is greater than number1, so an additional conditional is not necessary. This scenario subrtracts the smaller number1 from the larger number2 and logs the answer to the console. 

// var number1 = 7
// var number2 = 19



// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"

//It looks like I already did this in the previous problem because I'm weird. So here it is again with the new variable names.

///This will require an if/else if/ else conditional statement. 
if (typeof numberRefactor1 !== "number" && typeof numberRefactor2 !== "number") {
  console.log("numberRefactor1 and numberRefactor2 must be numbers")
//Starting with the most precise scenario, this will determine if the data types entered into variables "numberRefactor1" and "numberRefactor2" are the "number" type. This is done because a String/Boolean/null cannot be subtracted from String/Boolean/null, and subtraction is required in the problem. This && condition is necessary because the console would log only "numberRefactor1" condition if both variables were not number data types. 
} else if (typeof numberRefactor1 !== "number"){
  console.log("numberRefactor1 must be a number")
//This is the next most precise conditional to determine if the variable "numberRefactor1" is in fact a number data type. This prevents hackers/ nefarious characters from breaking the code with a String/Boolean/null data type while specifying to the user that the specific variable "numberRefactor1" is not in compliance. This is done because a String/Boolean/null cannot be subtracted from number nor vice/versa.
} else if (typeof numberRefactor2 !== "number"){
  console.log("numberRefactor2 must be a number")
//This is the next most precise conditional to determine if the variable "numberRefactor2" is in fact a number data type. This prevents hackers/ nefarious characters from breaking the code with a String/Boolean/null data type while specifying to the user that the specific variable "numberRefactor2" is not in compliance. This is done because a String/Boolean/null cannot be subtracted from number nor vice/versa.
} else if (numberRefactor1 === numberRefactor2) {
  console.log("numberRefactor1 and numberRefactor2 cannot be the same numbers, but if you absolutely must know the answer is 0")
//This deteremines if the values of variables numberRefactor1 and numberRefactor2 are equal. Because the problem only asks that variables be evaluated by which is greater and the lesser variable subtracted from the greater, this console logged answer explains the the rules and the answer. The answer will always come out to zero because any number minus the same number will equal zero. 
} else if (numberRefactor1 > numberRefactor2) {
  console.log(numberRefactor1 - numberRefactor2)
//This determines if the variable numberRefactor1 is larger than variable numberRefactor2, and logs the smaller number being subtracted from the larger number. 
} else {
  console.log(numberRefactor2 - numberRefactor1)
};
//This is the catch all, all possible remaining scenarios are values where numberRefactor2 is greater than numberRefactor1, so an additional conditional is not necessary. This scenario subrtracts the smaller numberRefactor1 from the larger numberRefactor2 and logs the answer to the console. 

// var numberRefactor1 = 27
// var numberRefactor2 = 24


// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//Ran jest and it failed as planned

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

// //I want to write a fuction that contains a conditional statement to meet the condition if an input number is divisible by 3
// const divisibleByThree = (num) => {
//   //This will define the functiion annd give it an input
//   if (num % 3 === 0){
//     //The first condition checks to see if the number is divisible by 3 using the modulo operator. If an input number is divided by 3 and has no remainder it is divisible by three. 
//     return `${num} is divisible by three`
//     //This statement will log to the console if the first condition met evaluates to true.
//   } else {
//     //This else statement catches all other inputs that are not numbers divisible by 3.
//     return `${num} is not divisible by three`
//   }//The return statement if the first condition is not met.
// }


//Refactored code moved above line 39 to make test pass. Function must be defined in order to pass test. See lines 80-87 for refactored code with psuedo code. 
const divisibleByThree = (num) => {
    if (num % 3 === 0) {
      return `${num} is divisible by three`;
    }
    return `${num} is not divisible by three`
  }
  
  var num1 = 15
  
  describe("divisibleByThree", () => {
    it("returns a string of `15 is divisible by three` if a number is divisible by 3 or not based on a number input", () => {
      expect(divisibleByThree(num1)).toEqual(`15 is divisible by three`)
    })
  })
  
  console.log(divisibleByThree(num1))
  // Expected output: "15 is divisible by three"
  
  
  
  var num2 = 0
  console.log(divisibleByThree(num2))
  // Expected output: "0 is divisible by three"
  
  describe("divisibleByThree", () => {
    it("returns a string of `0 is divisible by three` if a number is divisible by 3 or not based on a number input", () => {
      expect(divisibleByThree(num2)).toEqual(`0 is divisible by three`)
    })
  })
  
  var num3 = -7
  console.log(divisibleByThree(num3))
  // Expected output: "-7 is not divisible by three"
  
  describe("divisibleByThree", () => {
    it("returns a string of `-7 is not divisible by three` if a number is divisible by 3 or not based on a number input", () => {
      expect(divisibleByThree(num3)).toEqual(`-7 is not divisible by three`)
    })
  })
  
  
  // b) Create the function that makes the test pass.
  
  // //Refactored function copied to line 35-40
  // const divisibleByThree = (num) => {
  //   if (num % 3 === 0) {
  //     return `${num} is divisible by three`;
  //     //refactored the code to be slightly more concise by adding the ";" to stop the function when the if condition returns true.
  //   }
  //   return `${num} is not divisible by three`
  //   //An else statememt is not needed when using the ";" operator/symbol in the preceding "if" condition. Whenever the if condition is not met, the function will run to the next line of code. 
  // }
  // //Refactored function copied to line 35-40
  
  
  // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.
  
  //Declare a function that iterates over an array
  const capitalPunishment = (array) => {
    //Use the .map higher order function to apply an operation over every value in the array.
    return array.map(value => value.charAt(0).toUpperCase() + value.slice(1))
    //The first index of each string on the array will be the first letter, to change the first letter I used the .charAt(0) and applied the .toUppercase methods to capitalize the first letter. Adding the capitalised letter to the same string I used the .slice method to create a string missing the first index/first letter. .slice(1) on a string will create a string missing the first letter/index. 
  };
  
  
  // a) Create a test with expect statements for each of the variables provided.
  
  var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
  // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
  console.log(capitalPunishment(randomNouns1));
  
  describe("capitalPunishment", () => {
    it("returns a new array with all string elements capitalized", () => {
      expect(capitalPunishment(randomNouns1)).toContain( "Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew" )
    })
  })
  
  var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
  // Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]
  console.log(capitalPunishment(randomNouns2));
  
  
  describe("capitalPunishment", () => {
    it("returns a new array with all string elements capitalized", () => {
      expect(capitalPunishment(randomNouns2)).toContain( "Temperature", "Database", "Chopsticks", "Mango", "Deduction" )
    })
  })
  
  // b) Create the function that makes the test pass.
  
  //From the lecture and notes this seems to be the shortest, most succinct code to return this output. All other examples use more lines of code and more statements. The function is declared on line 93-97 before the test so it recogizes the function. 
  
  
  
  // --------------------3) Create a function that takes in a string and logs the index of the first vowel.
  
  // a) Create a test with expect statements for each of the variables provided.
  
  // //Declare a funtion that takes the input of string
  // const firstVow = (string) => {
  //   //I want this function to operate over the input string to check for the first vowel, so I'll have to define what a vowel is. 
  //   let vowels = 'aeiouAEIOU'
  //   //My new variable tells the function what all of the vowels are, so now we need to make an operation that tests for these specific characters on the input string. Iteration seems like the best way to do this. 
  //   for (i=0; i<string.length; i++) {
  //     //This will iterate over the string at each letter. Because javascript reads a string similar to an array with each letter of the string having an assigned index, I used the same iteration technique that loops over an array. Starting at the first index/letter [0], iterate over the string up until the last index of the string or the .length of the string, and continue to iterate each time one index higher or index + 1 or index ++. 
  //     for (j=0; j<vowels.length; j++) {
  //       //Because I have two strings that I want to compare to each other, I will use the same iteration method over my new variable of vowels alongside the first iteration. 
  //       //I want to find out the first occurence at which index on input string matches any of the letters on  my vowels variable string. A conditional statement can be used to compare the two strings.
  //       if(string[i]===vowels[j]){
  //         //If the iteration is working correctly it should evaluate to true when the index/letter of the input string is equal to an index/letter of the vowels string.
  //         //At the point where these characters match I want to return the index value on the input string.
  //         return string.indexOf(string[i]);
  //       }
  //     }
  //   }
  // };
  
  const firstVow = (string) => {
    let vowels = 'aeiouAEIOU'
    for (i=0; i<string.length; i++) {
      for (j=0; j<vowels.length; j++) {
        if(string[i]===vowels[j]){
          return string.indexOf(string[i]);
        }
      }
    }
  };
  
  var vowelTester1 = "learn"
  // Expected output: 1
  console.log(firstVow(vowelTester1))
  
  describe("firstVow", () => {
    it("returns a number of the index value of the first value from the input string", () => {
      expect(firstVow(vowelTester1)).toEqual(1)
    })
  })
  
  var vowelTester2 = "academy"
  // Expected output: 0
  console.log(firstVow(vowelTester2))
  
  describe("firstVow", () => {
    it("returns a number of the index value of the first value from the input string", () => {
      expect(firstVow(vowelTester2)).toEqual(0)
    })
  })
  
  var vowelTester3 = "challenges"
  // Expected output: 2
  console.log(firstVow(vowelTester3))
  
  describe("firstVow", () => {
    it("returns a number of the index value of the first value from the input string", () => {
      expect(firstVow(vowelTester3)).toEqual(2)
    })
  })
  
  // b) Create the function that makes the test pass.
  
  //Refactoring I will attempt to use the while statement to make the function more concise.
  
  // const firstVow = (string) => {
  //   let vowels = "aeiouAEIOU"
  //   let i = 0
  //   let j = 0
  //   while(i < string.length && j < vowels.length){
  //     if(string[i] === vowels[j]) j++;
  //     i++;
  //   }
  //   return string.indexOf(string[i])
  // };
  
  //My understanding of while statements is still outside of my current skillset. Attempts at using the refactored code continued to return undesireable results that failed the test. So I will stick with my current working version of the code. Refactored without comments on lines 152-161. 


  // ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//Ran the test and it failed as planned.

describe("fibSequence", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence", () => {
      expect(fibSequence(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })
  
  // b) Create the function that makes the test pass.
  
  //First I'll need to define a function
  const fibSequence = (num) => {
    //I want my solution to be an array so I will define an array with a value of 2 in the sequnce to push numbers into as the code iterates
    let sequence = [1,1]
    //I will be using iteration because the sequence will run for a specified
    //The task requires numbers greater than 2, so the sequence will start at the index of 2 and iterate the amount of times of the input number. This will only return the existing "sequence" array for any number input that is not greater than 2. 
    for (let i=2; i<num; i++){
        //The fibonacci sequence adds the previous number in the sequence (sequence.length -1) to the number two instances prior (sequence.length -2), and the code will push this calculated number onto our existing array. 
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2])
      }
      return sequence
    }
  
  //Test passed
  
  // Example input: 10
  // Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
  
  // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
  
  // a) Create a test with expect statements for each of the variables provided.
  
  var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
  // Expected output: [-9, 7, 9, 199]
  
  var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
  // Expected output: [-823, 7, 23]
  
  describe("oddNums", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () =>{
        expect(oddNums(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddNums(fullArr2)).toEqual([-823, 7, 23])
    })
  })
  
  // Test failed successfully
  
  // b) Create the function that makes the test pass.
  
  //I want to create a function with an array as an input.
  const oddNums = (arr) => {
    //The function will push the odd number values from the input array onto a new array.
    let newArr = []
    // Use array iteration to run the code over the input array
    for(let i=0; i<arr.length; i++){
      //Create a condition with an && operator to pass only number data types that are also odd. 
      if(typeof arr[i] === "number" && arr[i] % 2 !== 0 ){
        //Push the values onto the new array
        newArr.push(arr[i])
      }
    }
    //Sort the values from smallest to largest using the sort method
    return newArr.sort((a, b) => a - b)
  }
  
  //Test passes
  
  // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
  
  // a) Create a test with expect statements for each of the variables provided.
  
  var numbersToAdd1 = [2, 4, 45, 9]
  // Excpected output: [2, 6, 51, 60]
  
  var numbersToAdd2 = [0, 7, -8, 12]
  // Expected output: [0, 7, -1, 11]
  
  var numbersToAdd3 = []
  // Expected output: []
  
  describe("accumulationStation", () => {
    it("takes in an array and returns an array of the accumulating sum", () =>{
        expect(accumulationStation(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumulationStation(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumulationStation(numbersToAdd3)).toEqual([])
    })
  })
  
  //Test failed successfully
  
  // b) Create the function that makes the test pass.
  
  //I'll want to declare a function with an array as an input
  const accumulationStation = (arr) => {
    //I'll need an empty array to push new values onto
    let newArr = []
    //Array iteration to perform code on each element in the array
    for (i=0; i<arr.length; i++){
      //I only want to push code onto values that sit at a higher index than 0/first on the array, otherwise the code will return NaN. A condition of i>0 will only iterate the and push the code on values on indexes above the 0/first array index. 
      if (i>0){
        //I want to push the sum of the current value at the current index and the accumulating sum of previous values of the previous indexes
        newArr.push(arr[i] += arr[i-1])
        //An else statement will push the original value at the 0/first index of the original array onto the new array in the first place holder, because it will always begin the iteration at index 0. 
        } else {
          newArr.push(arr[0])
        }
      }
      return newArr
    }
  
  //Test passes

  // ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleColors", () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    expect(shuffleColors(colors1)).toContain("yellow" && "blue" && "pink" && "green")
    expect(shuffleColors(colors2)).toContain("saffron" && "aquamarine" && "periwinkle" && "indigo" && "ochre")
  })
})

// b) Create the function that makes the test pass.

//First I want to define a function that takes in an array
const shuffleColors = (array) => {
  //Next I want to cut the first index off of the input array. I will not need to define a new variable because .shift is a mutator that will permanently alter the input array
  array.shift()
  //Finally I want to randomize the indeces of the remaining array. I had to do research but found a way to randomize using the sort function.
    //.sort iterates over an array evaluating if the current value minus the next value is less than zero, if so, it evaluates to true and places the value at the beginning of the array until all values in the array meet this condition. 
      //Usually .sort applied to an array of strings orders them alphabetically, but that evaluation is moot if we set the method to check numbers instead.
      //Math.random generates a float between 0 and 1. If we set the .sort method to compare it against the exact middle point of this range (0.5), the method will evaluate to true (or the first value minus the second value is less than zero) any time the random float is above 0.5. Any time the evaluation randomly evaluates to true, it will log the element of our input array at that iteration to the beginning of the new array until all values are true.
      //Sorry for the essay but I really wanted to know how this works. 
  return array.sort((a, b) => 0.5 - Math.random())
}

//Test passes

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

//I need to declare a function that takes in an array as a parameter
const minMax = (array) => {
  // I will first create a variable that uses the sort method to sort the input array from smallest value to largest value
  let sortedArr = array.sort((a, b) => a - b)
  //Now that the input array is sorted I want to return the values at the first[0] and last indexes (smallest and largest values from the original input array) into an array with only two elements. I will use some math applied to the .length method to dispalay the value of the last index of the sorted array. 
  return [sortedArr[0], sortedArr[sortedArr.length-1]]
}

//Test passes


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("cleanCombine", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    expect(cleanCombine(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

// //First I want to create a function with two arrays as inputs
// const cleanCombine = (array1, array2) => {
//   //I will combine the two arrays using the spread operator when defining a new variable
//   let combined = [...array1, ...array2]
//   //Now that my input arrays are combined into a single array I want to filter out repeating values using the .filter higher order function
//   return combined.filter((value, index) => {
//      //I want to filter out any values where the value at an index is equal to the first index of the same value using .indexOf method
//     return combined.indexOf(value) === index
//    })
//  }

//Test passes

//Stretch refactor!

//Define a function that takes in an undefined number of arrays using the spread operator
const cleanCombine = (...arrays) => {
  let empty = []
  // In order to concat all of the arrays, the starting array must be empty, so I defined an empty array. Because .concat is an accessor and not a mutator, and I want to apply other methods to this combined array, I will define a new array (that can be used later) that concatenates the empyty array to the unknown amount of input arrays
  let combined = empty.concat(...arrays)
  //Use same methods from first attempt to filter out repeating values across the combined input arrays
  return combined.filter((value,index) => {
    return combined.indexOf(value) === index
  })
}

//Test passes!

// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("eliteCode", () => {
  it("takes in a string and returns a coded message that converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.", () => {
    expect(eliteCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(eliteCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(eliteCode(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

//Test failed successfully

// b) Create the function that makes the test pass.

//First I want to create function that takes in a string
const eliteCode = (string) => {
  //I want the input string to change characters a,e,i,o to 4,3,1,0 repspectively. I want to map over the string and change values, but because .map can only take an input of an array I will have to split the string into an array. Then I can map over the array at each index to check witha  conditinonal and change the values.
  let changedArray = string.split('').map(value => {
    if (value === 'a' || value === 'A'){
      return value = '4'
    } else if (value === 'e' || value === 'E'){
        return value = '3'
    } else if (value === 'i' || value === 'I' ){
        return value = '1'
    } else if (value === 'o' || value === 'O' ){
        return value = '0'
        //If the values checked aren't the ones we want to change, then leave the value as-is and continue mapping over the array
    } else {
      return value
    }
  })
  //Join the changed array back into a string
  return changedArray.join('')
}

//Test passes

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("letterFinder", () => {
  it("takes in an array of words and a single letter and returns all the words that contain that particular letter.", () => {
    expect(letterFinder(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(letterFinder(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})

//Test fails successfully

// b) Create the function that makes the test pass.

//First I want to define a function that takes in an array and a letter. All letters are represented as strings so it will take in a an array and a string.
const letterFinder = (array, string) => {
  //I want to filter out anything that doesnt contain the input string value.
  let solution = array.filter(value => {
    //If the value of at the index the input array includes the secondary input string the filter will keep it in the "solution" array. Also any instance of the input string capitalized will be included using the "or" operator and the .toUpperCase method. 
      //Deeper dive: Filter only keeps truthy values, and the .includes method only returns true if the string it is evaluating contains what it is searching for. If either of the conditions that string or uppercased string are in the value at that index of the array, the filter will evaluate to true and keep the value.
    return value.includes(string) || value.includes(string.toUpperCase())
  })
  //Because "solution" was only stored as a variable, the function "letterFinder" still needs to run and store "solution" with a return statement.
  return solution
}

//Test passes

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouse", () => {
  it("takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

//Test fails successfully

// b) Create the function that makes the test pass.

//First I want to define a function that takes in array
const fullHouse = (array) => {
  //The input array is limited to 5 values, but can be any value in any order. Sorting the array from smallest to largest will fix the positions of a full house to only two outcomes. The sorth method is a mutator so a variable doesn't need to be declared. 
  array.sort((a,b)=>a-b);
  //The first outcome of a fullhouse is if the sorted array has three smaller equal values and two larger different equal values (ex: [2,2,2,5,5]). 
  if (array[0]===array[1] && array[0]===array[2] && array[3]===array[4] && array[4]!==array[0]){
    //If the first possible fullouse condition is met, return true.
    return true
    //The second possible outcome of a fullhouse if if the sorted array has two smaller equal values and three larger different equal values (ex: [2,2,5,5,5]) 
  } else if (array[0]===array[1] && array[2]===array[3] && array[2]===array[4] && array[4]!==array[0]){
    //If the second possible fullouse condition is met, return true
    return true
    //If neither fullhouse condition is met, return false
  } else {
    return false
  }
}

//Test passes

// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
  
  describe("dontPanic", () => {
    it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
      expect(dontPanic(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
    })
  })
  
  //Test failed successfully
  
  // b) Create the function that makes the test pass.
  
  //First I want to create a function that takes in an array of objects
  const dontPanic = (array) => {
    //Create a variable that turns a string of a first and last name into Proper Casing
    var properCase = (string) => {
      //Split the input string of a single string of 2 words, into an array of two elements each containing a single string/word
        return string.split(' ').map(value => {
          //Return/store the value that uses the split string, and maps across the new array applying the .toUppercase to the first character and adds it to the remaining string that has been sliced of it's first character
          return value.charAt(0).toUpperCase() + value.slice(1)
        //Re-join the split string array back into a single string
        }).join(' ') 
    }
    //Create a variable that gives us the output sentence for each element of the input array of objects. 
    var sentence = (obj) => {
      //Using the properCase variable and string interpolation with dot notation, this will store a single instance of the sentence using return. 
        //Deeper Dive: Object.values(obj) creates an array of all of the values on the input object(obj). Object.values(obj)[index] displays the value of the key:value pair at that instance on the object, like indexes on an array. This makes the code more dynamic to take in other arrays of objects that may have diffrenetly named key:value pairs. 
      return `${properCase(Object.values(obj)[0])} is ${Object.values(obj)[1]}.`
    }
    //Finally we will return a map of the sentence variable across each element of the array and store into our desired output array.
    return array.map(value => {
      return sentence(value)
    })
  }
  
  //Test passes
  
  // var persons = [
  //   { goesBy: "ford prefect", job: "a hitchhiker" },
  //   { goesBy: "zaphod beeblebrox", job: "president of the galaxy" },
  //   { goesBy: "arthur dent", job: "a radio employee" }
  // ]
  // console.log(dontPanic(persons))
  
  // --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
  
  // a) Create a test with an expect statement using the variables provided.
  
  var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
  
  describe("onlyRemainders", () => {
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
      expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
      expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
    })
  })
  
  //Test failed successfully
  
  // b) Create the function that makes the test pass.
  
  //First I want to create a function that takes in an array
  const onlyRemainders = (array) => {
    //Next I want to filter out any values that are not data type of 'number' from the array
    var numFilter = array.filter(value => {
      return typeof value === 'number'
    })
    //Finally I want to return/store the values of mapping modulo 3 to every element in the filtered array of only numbers
    return numFilter.map(value => {
      return value % 3
    })
  }
  
  //Test passes
  
  // --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
  
  // a) Create a test with an expect statement using the variables provided.
  
  var cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  var cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  
  describe("arraySum", () => {
    it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
      expect(arraySum(cubeAndSum1)).toEqual(99)
      expect(arraySum(cubeAndSum2)).toEqual(1125)
    })
  })
  
  //Test failed successfully
  
  // b) Create the function that makes the test pass.
  
  //Frist I want to create a function that takes in an array
  const arraySum = (array) => {
    //Next I will create a variable that cubes each element of the input array using map
    var cubedValues = array.map(value => {
      return value**3
    })
    //Finally I will return/store the value of adding each element of the cubedValues array to get the sum using the reduce method
    return cubedValues.reduce((a,b) => a + b)
  }
  
  //Test passes