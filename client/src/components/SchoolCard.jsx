import { Link } from "react-router-dom"

function SchoolCard({school}) {
    
    console.log(school)

    return (
        <li className="card">
            <Link to={`schools/${school.id}`} replace > {school.school_name} </Link>
        </li>
    )
}

export default SchoolCard;