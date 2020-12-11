import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const GroupSearchResult = ({ group }) => {


    return (
        <div className='searchresult-group searchresult'>
            <div>{group.name}</div>
            <div>{group.description}</div>
            <div>{group.users.length}</div>
        </div>
    )
}

export default GroupSearchResult;