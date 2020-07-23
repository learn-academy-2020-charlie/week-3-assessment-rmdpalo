// ASSESSMENT 3: Coding Practical Questions


// --------------------1) Create a function that returns the first 10 numbers of the Fibonacci sequence in an array. Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

const fibonacci = () => {
    //declare an array that will hold the numbers of the sequence, containing the first two already for something to work with.
    let fibArr = [0,1]
    let num1 = fibArr [0]
    let num2 = fibArr [1]
    let next = 
    //we're starting the count at 2 because we already have the first 2 numbers.
    count = 2;
    //create a loop that will continue to run until we reach 10 iterations.
    while (count <= 10){
        //add the first two numbers of the sequence (index 0 and 1)
        //the next number in the sequence is the sum of the first 2 numbers.
        next = num1 + num2
        //reassigning num1 to be the next number1 in the equation.
        num1 = num2
        //reassigning the new sum to be the next number2 in the equation.
        num2 = next
        //push the sum onto the array
        fibArr.push(next)
        //increment our number count
        count++
    }
    return fibArr
}

// console.log(fibonacci());

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 9, 7, 199]
var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//create a function that takes in an array
const orderedOdds = (array) => {
    //filter through the array and return only odd numbers
    return array.filter(value => {
        return typeof value === "number" && value % 2 !== 0
    //return the odd numbers sorted from least to greatest, the argument in sort is the compare function and the method in which it's being sorted.
    }).sort((a,b) => a - b)
}

// console.log(orderedOdds(fullArr1));
// console.log(orderedOdds(fullArr2));

// --------------------3) Create a function that takes in a string of a single word and returns the middle letter of the word. If the word is an even number of letters, return the two middle letters.

var middleLetters1 = "hello"
// Expected output: “l”
var middleLetters2 = "rhinoceros"
// Expected output: “oc”

//create a function that takes in a string of a single word
const middleLetter = (string) => {
    //split the string into an array to use in the if else chain
    let tempArr = string.split("")
    //check length of string
    if (string.length % 2 !== 0) {
        //weird workaround but it worked, I set the amount of letters I want left to be the initial value of i, in this case it's 1
        for (let i = 1; i < string.length; i = i + 2 ){
            //shift and pop a letter until 1 is left
            tempArr.shift()
            tempArr.pop()
    //join the array to return back into a string and return that as the result
    } return tempArr.join("")
    } else if (string.length % 2 === 0){
        //I want the last two letters left, so i initialize i with value of 2.
        for (let i = 2; i < string.length; i = i + 2 ){
            //shift and pop until 2 is left
            tempArr.shift()
            tempArr.pop()
    //join the array to return back into a string and return that as the result
    } return tempArr.join("")
}
}
// console.log(middleLetter(middleLetters1));
// console.log(middleLetter(middleLetters2));




// --------------------4) Create a CLASS to get the area of a sphere. Create three spheres with different radi as test cases. Area of a sphere =  4πr^2 (four pi r squared)

//created a class called Sphere with the constructor radius, the value is taken as an argument.
class Sphere {
    constructor(radius){
        this.radius= radius;
    }
    //the get syntax binds a property to a function that will be called when that property is looked up.
    get area() {
        return this.calcArea();
    }
    //this method is called by the get syntax and calculates the area by plugging in the radius into the equation.
    calcArea() {
        return 4 * 3.14 * (this.radius * this.radius);
    }
}

//here we create three new instances of spheres with the radius plugged in as an argument and in the console log we look up the area of these new spheres, which triggers the get syntax in the class.
var ball = new Sphere(10);
// console.log(ball.area);
//google says expected result ~1256.64, we get 1256

var marble = new Sphere(2);
// console.log(marble.area);
//expected ~ 50.26, we get 50.24

var bearing = new Sphere(0.5);
// console.log(bearing.area);
//expected ~3.14, we get 3.14


// --------------------5) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

var numbersToAdd1 = [2, 4, 45, 9]
// Expected output: [2, 6, 51, 60]
var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]
var numbersToAdd3 = []
// Expected output: []

//create a function that takes in an array
// const addEmAll = (array) => {
//     //we want a new array to return the added numbers.
//     let addedArr = []
//     //loop through every element in the array
//     //get the sum of an accumulating sum
//     for (i = 0; i < 2; i++){
//         //starting value is 0 and add array[i]
//         let num1= i
//         let num2= array[i]
//         let newNum = num1 + num2
//         // console.log(newNum);
//         // console.log(num1);
//         // console.log(num2);
//         num1 = newNum
//         console.log(num1);
//         addedArr.push(newNum)
//     }
//     return addedArr
// }

const addEmAll = (array) => {
    //create an array the will hold the sums 
    let sumArr = []
    for (let i = 0; i < array.length, i++)
}

//I'm struggling hard with this challenge
//PSEUDO CODE
// I am starting at 0
// I want to add 0 and the first value of the array (2)
//I want to push that value on to the array of sums
//take that new value and add the next value of the array (4)
//push and repeat
// console.log(addEmAll(numbersToAdd1));