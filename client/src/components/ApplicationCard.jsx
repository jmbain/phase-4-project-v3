import {Link} from "react-router-dom"

function ApplicationCard({application}) {
    
    console.log(application)
    // if (application.school) {

    // }
    return (
        <li className="applicationCard">
            <Link to={`applications/${application.id}`} replace> {application.student.first_name} {application.student.last_name} applied to {application.school.school_name} </Link>
        </li>
    )
}

export default ApplicationCard;