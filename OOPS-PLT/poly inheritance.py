class Shape:
  def area(self):
    return 0
class Rectangle(Shape):
  def area(self):
    return 7*3
  
shape = Rectangle()
print(shape.area())