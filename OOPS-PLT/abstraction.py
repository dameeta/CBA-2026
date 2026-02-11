from abc import ABC,abstractmethod

class Engine(ABC):
  @abstractmethod
  def start(self):
    pass
  @abstractmethod
  def stop(self):
    pass
    
class CarEngine(Engine):
  def start(self):
    return "Car engine started"
  
  def stop(self):
    return "Car engine stopped "
  
  
CarEngine=CarEngine()
print(CarEngine.start())
print(CarEngine.stop())