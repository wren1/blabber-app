import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';


const GroupSearchResult = ({ group }) => {


    return (
        <div className='searchresult-group searchresult'>
            <NavLink to={`/groups/${group.id}`} exact={true} activeClassName="active">
                <div className='search-group-name'>{group.name}</div>
            </NavLink>
            <div>{group.description}</div>
            <div>{group.users.length}</div>
        </div>
    )
}

export default GroupSearchResult;