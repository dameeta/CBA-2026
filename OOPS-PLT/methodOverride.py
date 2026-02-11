class Vehicle:
  def move(self):
    pass
class Bicycle(Vehicle):
  def move(self):
    return "Cycle moves by two wheels"
  
class Bike(Vehicle):
  def move(self):
    return "bike is faster than cycle"
  
vehicles = [Bicycle(),Bike()]

for v in vehicles:
  print(v.move())
  