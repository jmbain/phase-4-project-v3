import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function StudentProfile() {
    const [student, setStudent] = useState(null)
    const {id} = useParams()



    useEffect(() => {
        fetch(`/api/students/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then((studData) => setStudent(studData))
            }
        })
    },[])

    console.log(student)

    if(student!==null) {
        return(
            <div className="studentProfileContainer">
                <div className="studentDataContainer">
                    <h3>Student Name:{student.first_name} {student.last_name}</h3>
                    <h5>Student Age: {student.age}</h5>
                    <h5>Student Expected Grade Level: {student.expected_grade_level}</h5>
                </div>
                <div className="userDataContainer">
                    <h5>User Relationship to Student: {student.user_relationship} </h5>

                </div>
            </div>
        )

    }
}

export default StudentProfile;