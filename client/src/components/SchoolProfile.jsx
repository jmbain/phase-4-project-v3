//________STARTING WITH APPLICATION PROFILE AS TEMPLATE, NEED TO UPDATE______________

import { useState, useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";

function SchoolProfile() {
    const [school, setSchool] = useState(null)
    const {id} = useParams()

    console.log(school)

    useEffect(() => {
        fetch(`/api/schools/${id}`)
        .then(r => {
            if(r.ok) {
                r.json().then((schoolData) => setSchool(schoolData))
            }
        })
    },[])

    if(school!==null) {
        return(
            <div className="schoolProfileContainer">
                <div className="schoolDataContainer">
                    <h3>School Name: {school.school_name}</h3>
                    <h5>School Gov ID: {school.gov_id}</h5>
                    <h5>School City: {school.city}</h5>
                </div>
            </div>
        )

    }
}

export default SchoolProfile;