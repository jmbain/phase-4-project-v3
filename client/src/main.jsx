//Template from Vite
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//JB Added
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import MyApplications from './components/MyApplications.jsx'
import MyStudents from './components/MyStudents.jsx'
import MyHome from './components/MyHome.jsx'
import ApplicationProfile from './components/ApplicationProfile.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/home",
        element: <MyHome/>
      },
      {
        path:"/applications",
        element: <MyApplications/>
      },
      {
        path:"/students",
        element: <MyStudents/>
      },
      {
        path:"/applications/:id",
        element: <ApplicationProfile/>
      },
      // {
      //   path:"/students/:id",
      //   element: <StudentProfile/>
      // },
      // {
      //   path:"/school/:id",
      //   element: <SchoolProfile/>
      // },
      // {
      //   path:"/user/:id",
      //   element: <UserProfile/>
      // },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
