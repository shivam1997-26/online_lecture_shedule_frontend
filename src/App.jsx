import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminMainPage from './component/admin/AdminMainPage'
import Login from './component/auth/Login'
import InstructorMainPage from './component/instructor/InstructorMainPage'

function App() {
  const [token, setToken] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setToken(true)
    } else {
      setToken(false)
    }
  }, [])
  return (
    <>
      {
        token == false && <> <h5 className='text-center mt-4'>Login</h5>
          <div className='container'>
            <Login />
          </div> </>
      }
      
      <Routes>
        <Route path='/adminPanel' element={<AdminMainPage />} />
        <Route path='/instructorPanel' element={<InstructorMainPage />} />
        {/* <ProtectedRoute path="/adminDashboard" component={AdminMainPage} /> */}
      </Routes>

    </>
  )
}

export default App
