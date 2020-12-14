import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const SignoutOption = ({ user }) => {

    return (
        <div className='profilenav__dropdown-option'>
            Sign out
        </div>
    )
}

export default SignoutOption;