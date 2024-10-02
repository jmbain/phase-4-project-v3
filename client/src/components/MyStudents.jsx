import StudentList from "./StudentList";
import StudentForm from "./StudentForm";

function MyStudents() {
    return (
        <div>
            <h1 className="header">My Students</h1>
            <StudentList />
            <StudentForm />
        </div>

    )
}

export default MyStudents;