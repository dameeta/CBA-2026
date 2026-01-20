class Person:
  def __init__(self,age,name):
    self.age=age
    self.name=name
    print('Inside Person Super class')
    print('The age of person is:',self.age,'The name is: ',self.name)
    
class Employee(Person):
  def __init__(self, age, name):
    super().__init__(age, name)
    self.age=age
    self.name=name
    print('Inside Employee sub class')
    print('The age of employee is:',self.age,'The name is: ',self.name)
    
    
emp=Employee(30,'Krishna')
#print(emp.age,emp.name)