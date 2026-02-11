for (let i=2;i<=20;i++)
{
  if(i%2==0)
{console.log(i,"is even")

}
else{
  console.log(i,'is odd')
}
}
for(let i=1;i<10;i++)
{
  if(i === 3) continue;
  console.log(i);
}
let city = ["delhi","jammu","Kolkata","Chennai"]
for(let c of city)
{
  console.log(c);
}
let userdetails = {name:"Krishna", age:22,city:"Mathura"}

for(let key in userdetails)
{
  console.log(key,userdetails[key]);
}
let i=3
do{
console.log(i);
  //break;
}
while(i<3);

