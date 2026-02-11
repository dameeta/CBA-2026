let data = [2,6,7,3,9,10]

let names = ["Hari","Ram","Krishnan","Ruchi"]

console.log(names[2])
names[3]="Jahanvi";
console.log(names[3])
console.log(names.length)
data.push(45) //adding the value to the last
console.log(data)
data.unshift(12)//adding the data to the first index
console.log(data)
data.pop()//remove from the end
console.log(data);
data.shift()//removing from start
console.log(data);
for(let i=0;i<data.length;i++)
{
  console.log(data[i])
}
for (let s of names)
{
  console.log(s);
}
names.forEach((i,index)=>{
  console.log(index,i);
});