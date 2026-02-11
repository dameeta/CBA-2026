//shadowing means scope of inner variable shadows or hides the outer variable
let scope = "Global"

function showScope()
{
  let scope = "Local";
  console.log(scope);
}

let counter = 1;
if(true)
{
  let counter =2;
  console.log(counter);
}
console.log("block shadowing the counter",counter);
showScope();
console.log(scope);
