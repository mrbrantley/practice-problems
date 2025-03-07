// Challenges

// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.

//1.     Write the code that will log the outcome of 34 added to 71.
var myNum1 = 34+71;
console.log("1. "+myNum1)

//2.     Write the code that will log the outcome of 67 subtracted from 123.
var myNum2 = 123-67
console.log("2. "+myNum2)

//3.     Write the code that will log the outcome of 56 multiplied by 23.
var myNum3 = 56*23;
console.log("3. "+myNum3)

//4.     Write the code that will log the outcome of 45 divided by 5.
var myNum4 = 45/5;
console.log("4. "+myNum4)

//5.     Write the code that will log the outcome of 5 to the power of 7.
var myNum5 = 5**7;
console.log("5. "+myNum5)

//6.     Write the code that will log the whole number remainder of 33 divided by 6.
var myNum6 = 33%6;
console.log("6. "+myNum6)

//7.     Write the code that will log the length of a string containing your name.
var myString1 = "Ross";
console.log("7. Length of the string is "+myString1.length)

//8.     Write the code that will log whether your string includes the letter "e"?
console.log("8. "+myString1.includes("e"))

//9.     Write the code that will log the character at the first index of the string.
console.log("9. "+myString1[0])

//10.    Write the code that will log the string in all uppercase letters.
console.log("10. "+myString1.toUpperCase())

// Write the code that will log true or false for the following:

//11.     Is 34 divided by 3 greater than 67 divided by 2?
var myBool1 = ((34/3) > (67/2));
console.log("11. "+myBool1)

//12.     Does 5 evaluate to the same as "5"?
var myBool2 = (5 == "5");
console.log("12. "+myBool2)

//13.     Does 5 strictly equal "5"?
var myBool3 = (5 === "5");
console.log("13. "+myBool3)

//14.     Does !3 strictly equal 3?
var myBool4 = (!3 === 3);
console.log("14. "+myBool4)

//15.     Does "LEARN".length strictly equal 5 AND "Student".length strictly equal 7?
var learn = "LEARN";
var student = "Student";
console.log("15. "+(learn.length === 5 && student.length === 7))

//16.     Does "LEARN".length strictly equal 5 OR "Student".length strictly equal 10?
console.log("16. "+(learn.length === 5 || student.length === 10))

//17.     Does "LEARN" contain the subset "RN"?
console.log("17. "+learn.includes("RN"))

//18.     Does "LEARN" contain the subset "rn"?
console.log("18. "+learn.includes("rn"))

//19.     Does "LEARN"[0] strictly equal "l"?
console.log("19. "+(learn[0]==="l"))

//20.     Modify the code from the previous question to return true.
console.log("20. "+(learn[0]==="L"))


// Consider the variables:

var theQuestion = "life, the universe, and everything"
var theAnswer = 42

//21.     Write the code that will log theAnswer divided by 2.
console.log("21. "+theAnswer/2)

//22.     Write the code that will log the length of theQuestion.
console.log("22. "+theQuestion.length)

//23.     Write the code that will log the index of the character "f" in the theQuestion.
console.log("23. "+theQuestion.indexOf("f"))

//24.     Write the code that will log the concatenation of the two variables.
console.log("24. "+(theQuestion+theAnswer))

//25.     Write the code that will log "the universe".
console.log("25. "+theQuestion.slice(6,18))

//26.     Write the code that will log the character "l" from theQuestion.
console.log("26. "+theQuestion.charAt(0))

//27.     Write the code that will log whether theQuestion.length is greater than theAnswer.
console.log("26. "+(theQuestion.length>theAnswer))
