const { json } = require("express/lib/response");

const accountId = 13333;
let accountEmail = "abc@gmail.com";
var accountPassword = 12344;
accountCity = "delhi";
var accountState;
//accountId = 2 // not allowed

accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([
  accountEmail,
  accountId,
  accountPassword,
  accountCity,
  accountState,
]);

("use strict"); // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Hitesh");

let name = "hitesh";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined =>
// symbol => unique

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

let score = "hitesh";

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score);
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLggedIn = "hitesh";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello";
let str2 = " hitesh";

let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===

console.log("2" === 2);
const nae = "hitesh";
const repoCount = 50;

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("hitesh-hc-com");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("t"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20", "-"));

console.log(url.includes("sundar"));

console.log(gameName.split("-"));
function multiply(a, b) {
  let ans = a * b;
  return ans;
}
console.log(multiply(5, 8));

// unlimited arguements
function unlimitedadd() {
  console.log(arguments);
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
    ans += arguments[i];
  }
  return ans;
}
console.log(unlimitedadd(1, 2, 3, 4, 4));

// using spead operator
function unlimitedadd(...numbers) {
  //spread operator
  let ans = 0;
  for (let i = 0; i < numbers.length; i++) {
    ans += numbers[i];
  }
  return ans;
}

// ****************** Arrow Functions *********************//

// 1. syntax
const sayHello = () => { // Arrow functions 
  console.log("say hello ")
}
const add = (a, b) => {
  return a + b;
}

const addV2 = () => a + b // One Liner and Directly returns

// 2. 'arguemnets' keyword

// const addnumbers = () => {
//   console.log(arguments);
// }

// arguements keyword is only for normal function not for arrow functions 

// ---------> use spread operator <-------------
const addnumbers = (...nums) => {
  console.log(nums);
}
addnumbers(1, 2, 3, 4, 5);
 
// 3. Hoisting 

sayHey();

function sayHey(){
  console.log("Say heyy ");
}
// above normal funtion will work because functions are firstly stored this is called hoisting 

// but in arrow this will not work 
sayHello4();

const sayHello4 = () => {
  console.log("Say hello");
}

// 4. THis  Keyword 
const obj = {
  value : 20,
  myFunction: function () {
    console.log("this is function", this.value);
  }
}
obj.myFunction();

const thisINarrow = {
  value : 80, 
  myFunction : () => {
    console.log(this);
    // Here this Keyword refers to global window 
    // console refers to window 
    // this not refering to object 
  }
}

// ************** High Order and Callback ******************** //
// function that takes a function as an arguements 

function addnum(a,b){
  return a + b;
}

function addnumber(a, b, cb){
  let result = a + b;
  cb(result); // passs result in cb --> call back
}
addnumber(2, 4, function(val){
  console.log(val);
})

function showResult(result){
  console.log(result);
}
addnumber(2,4,showResult); // pass the function show result 
// parameter me resukt daal diya 
// cb call hua usne result daal diya show result fn me ans print hogaya 
// addnumber --> cb(result) ---> showresult 

function addv3(a,b, cb){
  let result = a + b;
  cb(result);
}
addv3(2,4, (val)=>console.log(val));
function addV4(a, b, cb){
  let result = a + b;
  return () => console.log(result);
}
let newResult = addV4(4004,2, ()=>{});
newResult();

// Arrays 
const students = ["Gunjan", "Vidya", "Sagar"]
const marks = [16,16,16];

const myArray = [1,true, "gunjan" ]
students.push("soft");
students.push("emotional fool");

students[0] = "SDE-1";
// you can change value of array but cannots me full array change likeh 
// students = ["poiyus"]

console.log(students);

// Homogenous / Hetrogenous 
// array are hetro in js 
console.log(students.indexOf("gunjan"));
students.pop();
students.reverse();

const numbers = [1,2,3,4,5];
let newArray =[];
numbers.forEach((num)=>newArray.push(num * 2));
console.log(newArray);

// for each doesnt return anything 

function double(n){
  return n * 2; 
}

let newarray = numbers.map(double);
console.log(newarray);


// ---------> Objects <--------------//

// singleton 
// Object.create

// object literals
// constructor se banta h toh woh singelton ha
// if constructor is modify Arguement Object.crete this is singleton

const mySym = Symbol("key1")

const JsUser = {
  name : "Gunjan",
  "full name" : "Gunjan Vs", //U cant access using . no chance use""

  [mySym] : "myKey1",
  age: 18,
  location:" delhi",
  email: "gsgsg@gmail.com",
  isLoggedIN: false,
  lastLoginDays :["Monday", "Tuesday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(typeof JsUser.mySym) // if [] not used it is string 
// but if u want to use as symbol in obj then use []
console.log(JsUser[mySym])
JsUser.email = "gunjangoogle.com";
Object.freeze(JsUser); // no change after that if use freeze

JsUser.greeting = function(){
  console.log("Hello  Js User ");
}
console.log(JsUser.greeting());
JsUser.greetingTwo = function(){
  console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetingTwo());

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } creates two objects inside not combinign

// const obj3 = Object.assign({}, obj1, obj2, obj4)  //use this method for combining
// use spread operator 
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
  {
      id: 1,
      email: "h@gmail.com"
  },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course // apne hisaab se naam de le 


// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
  {},
  {},
  {}
]

function sayMyName(){
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

  // let result = number1 + number2
  // return result
  return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
  if(!username){
      console.log("PLease enter a username");
      return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
  return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
  username: "hitesh",
  prices: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "sam", // Direct object is passed in function
  price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
 


// Immediately Invoked Function Expressions (IIFE)


(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')



// ->>>>  control flow <--------//
// if
const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")


const books = [
    {title : "book one",
      author : "Y",
      year : 2020,
    },
    {
      title : " book two ",
      author : "Z",
      year : 2011,
    },
    {
      title : "Book three",
      author : "X",
      year : "405BC"
    }

];
books.forEach((item) =>{
  console.log(item);
})

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// const newNums = []

// myNums.forEach( (num) => { NO value returned if u use {} then it return object 
// use return keyword 
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);