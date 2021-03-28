import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const Username = ({ currentUSer, user }) => {
    

    return (
        <div className='group__invite-username' >
            {user.username}
        </div>
    )
}

export default Username;