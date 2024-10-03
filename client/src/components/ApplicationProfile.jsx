import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function ApplicationProfile() {
    const [application, setApplication] = useState(null)
    const {id} = useParams()



    useEffect(() => {
        fetch(`/api/applications/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then((applData) => setApplication(applData))
            }
        })
    },[])

    console.log(application)

    if(application!==null) {
        return(
            <div className="applicationProfileContainer">
            <div className="schoolDataContainer">
                <h3>School Name: {application.school.school_name}</h3>
                <h5>School Gov ID: {application.school.gov_id}</h5>
                <h5>School City: {application.school.city}</h5>
            </div>
            <div className="studentDataContainer">
                <h3>Student Name:{application.student.first_name} {application.student.last_name}</h3>
                <h5>Student Age: {application.student.age}</h5>
                <h5>Student Expected Grade Level: {application.student.expected_grade_level}</h5>
            </div>
            <div className="userDataContainer">
                <h3>Parent Applicant Username: {application.user.username} </h3>
            </div>
        </div>
        )

    }
}

export default ApplicationProfile;