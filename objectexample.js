const users = [
  {
    name :"Krishna" ,age :27,city:"Mathura"
  },
  {
    name :"Sai" ,age :25,city:"Pune"
  }
];

const nameofusers=users.map(user=>user.name);
console.log(nameofusers);

const userdetail= {"Adminuser":"Prakash Sahu","city":"Chennai"};

console.log(userdetail);
userdetail["age"] = 23;
console.log(userdetail);