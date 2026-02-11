class IdCard:
  def __init__(self,empId,emp_name):
    self.__empId=empId #private
    self.emp_name=emp_name #open
    
  def getEmpInfo(self):
    return self.__empId
  
id_card= IdCard(1101,'Vikas Sharma') # type: ignore
print(id_card.emp_name)
id_card.__empId=888
print(id_card.__empId)
print(id_card.getEmpInfo())
            
    

    

    
    