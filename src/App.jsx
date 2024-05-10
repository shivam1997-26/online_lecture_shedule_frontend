import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
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
      <Routes>
       
        <Route path='/instructorPanel' element={<InstructorMainPage />} />
        {
          token == false &&
          <Route path='/' element={<Login />} />
        }
       
      </Routes>

    </>
  )
}

export default App
