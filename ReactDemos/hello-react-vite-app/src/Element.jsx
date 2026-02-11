
const NameDisp = (Person) => {
return Person.name + ' ' + Person.age;
}
const Person ={
  name : "Krishna",
  age  : 24
}

const Element =() => <h1>Hello, {NameDisp(Person)}!</h1>;

export default Element;