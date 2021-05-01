import React from 'react';
import { useHistory } from 'react-router-dom';


const ProfileIcon = ({ user, size, group }) => {
    const history = useHistory();

    if (!user && !group) return null;

    const icon = !group ? user.icon_url : group.icon_url;

    return (
        <div className='icon' onClick={() => history.push(!group ? `/users/${user.id}` : `/groups/${group.id}`)} >
            {!icon ? 
            <img src={require('../images/cutewhaler.png')} className={`${size}-icon border-icon-${size}`} /> : 
            <img src={icon} className={`${size}-icon`} />}
        </div>
    )
}

export default ProfileIcon;