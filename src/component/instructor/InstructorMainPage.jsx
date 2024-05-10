import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '../../config/apiUrls'
import { getRequest } from '../../config/httpRequest'

const InstructorMainPage = () => {

    const [lectureData, setLectureData] = useState([])
    const userData = JSON.parse(localStorage.getItem('userData'));
    const Navigate = useNavigate()
    useEffect(() => {
        const url = apiUrl.lecture.getaLecture
        getRequest(`${url}/${userData._id}`).then((data) => {
            setLectureData(data.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])



    const logout = () => {
        localStorage.removeItem('userData')
        localStorage.removeItem('token')
        Navigate('/')
    }
    return (
        <>


            <div className='container mt-5'>
                <div className='text-center mb-4'>
                    <h5>Hello {userData.name} </h5>
                    <h6> Please find your lecture </h6>

                    <button className='btn btn-danger' onClick={logout}>Logout</button>
                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Course Name</th>
                            <th scope="col">Instructor Name</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            lectureData?.map((item, id) => (
                                <tr key={id}>
                                    <th scope="row">{id}</th>
                                    <td>{item.course.name}</td>
                                    <td>{item.instructor.name}</td>
                                    <td>{item.date}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

            </div>
        </>
    )
}

export default InstructorMainPage