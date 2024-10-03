//________STARTING WITH APPLICATION PROFILE AS TEMPLATE, NEED TO UPDATE______________

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

    if(application!==null) {
        <div className="applicationProfileContainer">
            <div className="schoolDataContainer">
                <h3>{application.school.school_name}</h3>
                <h5>{application.school.gov_id}</h5>
                <h5>{application.school.city}</h5>
            </div>
            <div className="studentDataContainer">
                <h3>{application.student.first_name} {application.student.last_name}</h3>
                <h5>{application.student.age}</h5>
                <h5>{application.student.expected_grade_level}</h5>
            </div>
            <div className="userDataContainer">
                <h3>{application.user.username} </h3>
            </div>
        </div>
    }
}

export default ApplicationProfile;