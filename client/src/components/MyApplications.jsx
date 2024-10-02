import ApplicationList from './ApplicationList';
import ApplicationForm from './ApplicationForm';

function MyApplications() {
    return (
        <div>
            <h1 className="header">My Applications</h1>
            <ApplicationList />
            <ApplicationForm />
        </div>

    )
}

export default MyApplications;