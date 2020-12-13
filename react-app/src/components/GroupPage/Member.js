import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Member = ({ member }) => {

    if (!member) return null;

    return (
        <div className='group__members-list-item'>
            {member.name}
        </div>
    )
}

export default Member;