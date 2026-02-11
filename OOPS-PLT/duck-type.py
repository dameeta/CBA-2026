class Person:
  def swim(self):
    return "Person is swimming"
  
class Boat:
  def swim(self):
    return "Boat is swimming"
  
def make_swim(obj):
  print(obj.swim())
  
make_swim(Person())
make_swim(Boat())