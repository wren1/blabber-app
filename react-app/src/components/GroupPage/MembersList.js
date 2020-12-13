import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Member from './Member';


const MembersList = ({ openMembersList, setOpenMembersList, members, group }) => {
    
    console.log(members)
    return (
        <div className='group__members-list'>
            {!members.length ? null : members.map(member => (
                <Member member={member} key={member.id} />
            ))}
        </div>
    )
}

export default MembersList;