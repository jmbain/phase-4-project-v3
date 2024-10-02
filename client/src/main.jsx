//Template from Vite
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//JB Added
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import MyApplications from './components/MyApplications.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/applications",
        element: <MyApplications/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
