import { useOutletContext } from "react-router-dom"
import StudentCard from "./StudentCard"

function StudentList() {
    const {students} = useOutletContext()

    console.log(students)
    // This displays Student components via a map of the student list
    const studentComponents = students.map(student => {
        return <StudentCard key={student.id} student={student}/>
    })
    
    return (
        <div>
            <h3>Students List!</h3>
             <ol className="application-list">{studentComponents}</ol>
        </div>
       
    )
}

export default StudentList;