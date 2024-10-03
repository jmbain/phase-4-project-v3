import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'

//JB Added
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const [applications, setApplications] = useState([])
  const [students, setStudents] = useState([])
  const [schools, setSchools] = useState([])

  useEffect(() => {
    fetch("/api/applications", {
      mode: 'no-cors'})
    .then(r => r.json())
    .then(applData => setApplications(applData))
  },[])

  useEffect(() => {
    fetch("/api/students", {
      mode: 'no-cors'})
    .then(r => r.json())
    .then(studData => setStudents(studData))
  },[])

  useEffect(() => {
    fetch("/api/schools", {
      mode: 'no-cors'})
    .then(r => r.json())
    .then(schoolData => setSchools(schoolData))
  },[])

  return (
    <>
      <div className="appContainer">
        <Header/>
        <NavBar/>
        <Outlet context={{
          applications: applications,
          students: students,
          schools: schools,
        }}/>
      </div>
    </>
  )
}

export default App
