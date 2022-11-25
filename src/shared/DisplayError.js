import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const DisplayError = () => {
    const error = useRouteError();
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () =>{
        logOut()
            .then(() => {
                navigate('/login')
             })
        .catch((err)=>console.log(err))
    }
    return (
        <div>
            <p className='text-error text-center'> Something went wrong!!</p>
            <p className='text-error text-center'>{error.statusText || error.message}</p>
            <p className='text-3xl '>Please <button className='btn btn-primary' onClick={handleLogout}>Log out</button> and log back in.</p>
        </div>
    );
};

export default DisplayError;