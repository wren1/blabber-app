import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';

import NewPostForm from './NewPostForm';


const MakePostBlock = ({ user, group }) => {
    const [openMakePost, setOpenMakePost] = useState(false)

    // if (!user) return null;

    const makePostButton = () => {
        return (
            <div className='feed__makepost' onClick={() => setOpenMakePost(!openMakePost)}>
                <AddIcon className='makepost__icon'></AddIcon>
                <div className='makepost__des'>Make a new post</div>
            </div>
        )
    }

    return (
        <div>
            {!openMakePost ? makePostButton() : <NewPostForm openMakePost={openMakePost} setOpenMakePost={setOpenMakePost} user={user} group={group}/>}
        </div>
    )
}

export default MakePostBlock;