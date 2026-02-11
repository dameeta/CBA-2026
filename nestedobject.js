const employee ={
  name : 'Raj Sonawane',
  department : {
    id : 101,
    dept_name : 'Sales',
    }
}
console.log(employee.department.id);
console.log(employee.department.dept_name);
console.log(employee['department']['id']);
console.log(employee['department']['dept_name']);