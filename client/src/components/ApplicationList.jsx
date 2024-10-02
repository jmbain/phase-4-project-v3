import { useOutletContext } from "react-router-dom"
import ApplicationCard from "./ApplicationCard"
import { useEffect } from "react"

function ApplicationList() {
    const {applications} = useOutletContext()
    
    // console.log(applications)
    // applications.map(application => {console.log(application.id)})

    // This displays Application components via a map of the application list
    const applicationComponents = applications.map(application => {
        return <ApplicationCard key={application.id} application={application}/>
    })
    
    return (
        <div>
            <h3>Applications List!</h3>
             <ol className="application-list">{applicationComponents}</ol>
        </div>
       
    )
}

export default ApplicationList;