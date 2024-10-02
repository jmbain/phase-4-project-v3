import {Link} from "react-router-dom"

function ApplicationCard({application}) {
    
    
    return (
        <li className="applicationCard">
            <Link to={`applications/${application.id}`} replace>{application.student} {application.school} </Link>
        </li>
    )
}

export default ApplicationCard;