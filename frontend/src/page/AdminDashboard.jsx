import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';

const AdminDashboard = () => {

    const api = import.meta.env.VITE_BASE_URL
    const token = localStorage.getItem("token")

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        try {
            const res = await axios.get(`${api}/user`, {
                headers: {
                    Authorization: token
                }
            })
            if (res?.data?.status) {
                setUsers(res?.data?.users)
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        fetchUsers()
    }, [])

    return (
        <div className='flex min-h-screen min-w-full' >
            <div className='w-[20%] bg-teal-600 ' >
                <p>Users</p>
            </div>
            <div className='w-[80%]' >
                <h2>Users</h2>
                <div>
                    {
                        users?.length > 0 && users?.map((ele) =>
                            <div key={ele?._id} className='border p-3 shadow my-2' >
                                <h2>Full Name :-{ele?.fullName}</h2>
                                <p>Email :-{ele?.email}</p>
                                <p>Role :-{ele?.role}</p>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
