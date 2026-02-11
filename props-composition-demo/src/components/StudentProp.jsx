const StudentProp = (props)=>{
    return (<div>
        <h2>Student Data is : </h2>
        <ul>
          <li>Name: {props.name}</li>
          <li>Age: {props.age}</li>
          <li>Email: {props.email}</li>
          <li>Course: {props.course}</li>
        </ul>
    </div>
    )
}
export default StudentProp;
