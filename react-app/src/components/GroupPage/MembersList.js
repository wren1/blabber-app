import React from 'react';


import Member from './Member';


const MembersList = ({ setOpenMembersList, members, group }) => {
    
    console.log(members)
    return (
        <div className='backdrop' onClick={() => setOpenMembersList(false)} >
            <div className='group__members-list' onClick={(e) => e.stopPropagation()} >
                <div>
                {!members.length ? null : members.map(member => (
                    <Member member={member} group={group} key={member.id} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MembersList;