import { useOutletContext } from "react-router-dom"
import ApplicationCard from "./ApplicationCard"

function ApplicationList() {
    const applications = [1,2,3]
    
    
    // This displays Application components via a map of the application list
    // const applicationComponents = applications.map(application => {
    //     return <ApplicationCard key={application.id} />
    // })
    
    return (
        <div>
            <h3>Applications List</h3>
             {/* <ol className="application-list">{applicationComponents}</ol> */}
        </div>
       
    )
}

export default ApplicationList;