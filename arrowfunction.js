const add = (x1,y1) => x1+y1;//function with one line
//function with multiple lines
const getmessage = (name) =>
  { return name + " Welcome to arrow function message"};

console.log(add(3,4))
console.log(getmessage("Radhaji"))

//function with default parameter

function Greet(name = "User"){
  return "Welcome" + " "+ name;
}
console.log(Greet());
console.log(Greet(" Ganeshji"));
//anonymous function
function processData(callback)
{
  callback();
}

processData(()=>{
  console.log("Callback getting executed");
});

const calculateSalary = (basesalary,incentive)=>{
  return basesalary + incentive;
}
console.log("The salary of employee is:",calculateSalary(34000,3000));
