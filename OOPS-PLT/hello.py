class Person:
  #init is constructor which is used to build object
  def __init__(self,age,name):
    self.name=name
    self.age=age

  def details(self,name,age):
    self.name=name
    self.age=age
    return self.name , self.age
PersonObj=Person(17,"Hari")
print(PersonObj.age)
print(PersonObj.name)
print('The details of a Persons are:',PersonObj.details('Sheetal',22))
