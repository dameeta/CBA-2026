//=,+= ,-=,*=,/=,%=,**= compound assignment operator
//==,===strict equal checking value+ type
//!= not equal
//!== strict not equal
//> < >= <= 

//Logical operator

//&& AND || OR  NOT !
console.log(true && false)
console.log(!true)
//BITWISE OPERATORS: & and,| OR , ^ XOR ,~ not ,<< left shift ,>> right shift
//unary operators: ++ , -- typeof , delete
//ternary operator : (condition?v1 : v2)
let x= 10;
let score = x>10 ? "Pass":"Fail"
console.log(score)
let a="Hello"
let b=" Krishna"
console.log(a+b)
console.log(a+=b);
let city = null;
console.log(city ?? "Delhi");
let person = {};

let day="Monday";

  switch(day){
case "Monday" :
  console.log("Its Monday");
  break;
case "Tuesday":
  console.log('Tuesday');
  break;

case "Saturday":
  console.log('Saturday')
  break;
  default:
  console.log('Not a valid day');
}

console.log(person?.address?.city)


