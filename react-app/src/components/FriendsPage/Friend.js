import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Friend = ({ friend }) => {

    return (
        <div>
            {friend.username}
        </div>
    )
}

export default Friend;