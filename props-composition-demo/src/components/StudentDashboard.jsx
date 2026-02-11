import StudentProp from "./StudentProp";

const StudentDashboard = ()=>{

  return (<div>
      <h1>Student Dashboard Component</h1>
      <h3>Welcome to Student Dashboard</h3>
      <StudentProp name= "Kala Puvan" age = "22" email = "kala.puvan@example.com" course = "Computer Science"/> 
      <StudentProp name= "Amit Jog" age = "24" email = "amit.jog@example.com" course = "Mathematics"/>
      <StudentProp name= "Sara Lee" age = "21" email = "sara.lee@example.com" course = "Physics"/>
      

  </div>
  )

}
export default StudentDashboard;