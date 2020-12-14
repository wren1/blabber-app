import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink } from 'react-router-dom';


const GroupSearchResult = ({ group }) => {


    return (
        <NavLink to={`/groups/${group.id}`} exact={true} activeClassName="active">
            <div className='searchresult-group searchresult'>
                <div className='searchgroup-td'><div className='search-group-name'>{group.name}</div>
            <div>{group.description}</div></div>
            <div className='seach-group-members'>{group.users.length} members</div>
            </div>
        </NavLink>
    )
}

export default GroupSearchResult;