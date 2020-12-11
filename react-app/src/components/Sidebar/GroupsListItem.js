import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const GroupsListItem = ({ group }) => {


    return (
        <div className='sidebar__groupslist-item'>
            {group.id}
        </div>
    )
}

export default GroupsListItem;