import React from 'react';
import { useSelector } from 'react-redux';
import { Adminnavbar } from '../components/Navbar/admin_navbar';

export const Adminpage = () => {
    const state = useSelector((state) => state.admin.data);
    console.log(state)
    return (
        <div>
            <Adminnavbar />
            <h1>{state.email}</h1>
            <h1>This is admin page</h1>
        </div>
    )
}
