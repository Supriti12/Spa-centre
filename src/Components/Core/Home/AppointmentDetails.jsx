import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { ColorRing } from 'react-loader-spinner'
import { FetchAppointment, deleteAppointment } from '../../../redux/Slice/AppointmentSlice';


export const AppointmentDetails = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate()

    const {A_data} = useSelector((state) => state?.appointment);

    useEffect(() => {
        dispatch(FetchAppointment());
    }, [dispatch]);

    const deleteAppointmentData = async id => {
        await deleteAppointment(id)
        dispatch(FetchAppointment());
    }
    
    return (
        <>
            <div className='container-fluid'>
                <table className="table mt-2">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Spa</th>
                            <th scope="col">Time</th>
                            <th scope="col">Date</th>
                            <th scope="col">Message</th>
                            <th colSpan={2}>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {A_data !== null ? (
                            <>
                                {A_data?.map((student, key) => {
                                    return (
                                        <tr key={key}>
                                            <th>{student.name}</th>
                                            <td>{student.email}</td>
                                            <td>{student.phone}</td>
                                            <td>{student.spa}</td>
                                            <th>{student.time}</th>
                                            <td>{student.date}</td>
                                            <th>{student.message}</th>
                                            <td><Link to={`/editappointment/${student.id}`} className='btn btn-warning'>Edit</Link></td>
                                            <td><button onClick={() => deleteAppointmentData(student.id)} className='btn btn-danger'>Delete</button></td>
                                        </tr>
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <ColorRing
                                    visible={true}
                                    height="80"
                                    width="80"
                                    ariaLabel="blocks-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="blocks-wrapper"
                                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                                />
                            </>

                        )}



                    </tbody>
                </table>
            </div>

        </>
    )
}

