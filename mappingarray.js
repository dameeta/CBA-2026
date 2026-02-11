const numbers = [3,6,7,9,10]
const squared = numbers.map(i=>i*i)
for(let i=0;i<squared.length;i++)
{
  console.log(squared[i]);
}
for(let i=0;i<numbers.length;i++)
{
  console.log(numbers[i]);
}
const colors = ["Blue","Orange","Green","Red"];

const indexedcolors =colors.map((color,i)=>`${i+1} : ${color}`);
console.log(indexedcolors);