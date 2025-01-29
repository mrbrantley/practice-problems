// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// ----------------------------------------------------------
// 1.1) Create a statement that determines if a temperature is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit.

// Create the code and test each of the variables provided. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp = 35
// var temp = 350
// var temp = 212 
    if (temp === '212'){
        console.log(`${temp} is the boiling point`)
    }
    else if temp > '212'
        return "temp is above boiling point"
    else 



// ----------------------------------------------------------
// 1.2) Create the code that will combine two arrays and return the length using the variables provided below. Expected output: 10

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]



// ----------------------------------------------------------
// 1.3) Create the code that will reverse the letters of a string using the test variables provided below. Expected output: "eilrahc", "atled"

var myString1 = "charlie"
var myString2 = "delta"



// ----------------------------------------------------------
// 1.4) Create a statement that evaluates two numbers and subtracts the smaller number from the larger number using the two sets of test variables provided below. Expected output: 15, 12

var number1 = 42
var number2 = 27



// ----------------------------------------------------------
// 1.5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable is not a number using the two sets of test variables provided below. Expected output: "Your input is not a number", 3

var numberRefactor1 = 42
var numberRefactor2 = "hello"



// ASSESSMENT 2: Coding practical questions with Jest

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ----------------------------------------------------------
// 2.1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.


    // a) Create a test with expect statements for each of the variables provided.


    // b) Create the function that makes the test pass.



// ----------------------------------------------------------
// 2.2) Create a function that takes in an array of words and returns an array with all the words capitalized.


    // a) Create a test with expect statements for each of the variables provided.


    // b) Create the function that makes the test pass.

  
  
// ----------------------------------------------------------  
// 2.3) Create a function that takes in a string and logs the index of the first vowel.


    // a) Create a test with expect statements for each of the variables provided.


    // b) Create the function that makes the test pass.



// ASSESSMENT 3: Coding practical questions with Jest

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ---------------------------------------------------------- 
// 3.1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


    // a) Create a test with expect statements for each of the variables provided.
  

    // b) Create the function that makes the test pass.



// ----------------------------------------------------------  
// 3.2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

    // a) Create a test with expect statements for each of the variables provided.


    // b) Create the function that makes the test pass.


// ---------------------------------------------------------- 
// 3.3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

    // a) Create a test with expect statements for each of the variables provided.


    // b) Create the function that makes the test pass.



// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ---------------------------------------------------------- 
// 4.1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

var colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

    // a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray


    // b) Create the function that makes the test pass.



// ---------------------------------------------------------- 
// 4.2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

var nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

    // a) Create a test with expect statements for each of the variables provided.


    // b) Create the function that makes the test pass.



// ---------------------------------------------------------- 
// 4.3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

var testArray1 = [3, 7, 10, 5, 4, 3, 3]
var testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

    // a) Create a test with an expect statement using the variables provided.


    // b) Create the function that makes the test pass.



//Stretch refactor!

//Define a function that takes in an undefined number of arrays using the spread operator



// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ---------------------------------------------------------- 
// 5.1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

    // a) Create a test with expect statements using the variables provided.


    // b) Create the function that makes the test pass.



// ---------------------------------------------------------- 
// 5.2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
var letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
var letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

    // a) Create a test with expects statement using the variable provided.


    // b) Create the function that makes the test pass.


// ---------------------------------------------------------- 
// 5.3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

    // a) Create a test with expect statements using the variable provided.


    // b) Create the function that makes the test pass.



// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// ---------------------------------------------------------- 
// 6.1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

var people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    { name: "arthur dent", occupation: "a radio employee" }
  ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

    // a) Create a test with an expect statement using the variable provided.

    
    // b) Create the function that makes the test pass.

// ---------------------------------------------------------- 
// 6.2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

    // a) Create a test with an expect statement using the variables provided.


    // b) Create the function that makes the test pass.



// ----------------------------------------------------------
// 6.3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

    // a) Create a test with an expect statement using the variables provided.


    // b) Create the function that makes the test pass.
