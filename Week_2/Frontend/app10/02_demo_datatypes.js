//String data types
let user="Mayukh"
let user1='Mayukh'
let user2=`Mayukh`
console.log("Type of user is: ");
console.log(typeof user);
console.log("Type of user1 is: ");
console.log(typeof user1);
console.log("Type of user2 is: ");
console.log(typeof user2);

let userThings="Mayukh's"
console.log(userThings);
console.log("This is "+"Javascript Language");

// Number Datatype
let age=10;
let quantity=23.5678
let expoNumber=23.56e08
let hexNumber=0x23
let years=123443435354
let someNumber=112324323435456446n

console.log(age);
console.log(typeof age);
console.log(typeof quantity);
console.log(years);
console.log(someNumber);
console.log(typeof someNumber);
console.log(expoNumber);
console.log(typeof expoNumber);
console.log(hexNumber);
console.log(typeof hexNumber);

// boolean datatype
let isNumber=true;
let isGreater=5>6;
console.log(isNumber);
console.log(isGreater);

let price;
console.log(price);
console.log(typeof price);

let cost=undefined;
console.log("Value of cost "+cost);
console.log("Type of cost "+typeof cost);

// null
let maxYears = null;
console.log(maxYears);
console.log(typeof maxYears);

let op = 5/0;
console.log(op);

let op1 = 'a'/2;
console.log(op1);

let op2 = Infinity;
console.log(op2);
console.log(typeof op2);

let op3 = NaN;
console.log(op3);


// Defining numbers
let sharePrice = 10_00_000
console.log(sharePrice);
console.log(typeof sharePrice);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);


console.log(23.5 * 9.6 + 25 / 3) //233.933
console.log(45 + (96 % 2) * 54 / 5) //45
console.log(2**4+25/10) // 18.5