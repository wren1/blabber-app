import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

import { createPost, createGroupPost } from '../../store/ducks/posts';


const NewPostForm = ({ openMakePost, setOpenMakePost, user, group }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    if (!user) return null;

    const handleSubmit = (e) => {
        e.preventDefault(e);
        if (group) {
            console.log('grrr oup: ', group)
            dispatch(createGroupPost(user.id, title, content, group.id))
            setOpenMakePost(!openMakePost)
        } else {
            dispatch(createPost(user.id, title, content))
            setOpenMakePost(!openMakePost)
        }
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setOpenMakePost(!openMakePost)
    }

    return (
        <div className='newpostform'>
            <form onSubmit={handleSubmit} className='makepost-form'>
                <input className='makepost-title' 
                placeholder='Title' 
                value={title}
                name='title'
                onChange={(e) => setTitle(e.target.value)}
                />
                <TextareaAutosize className='makepost-textarea' 
                placeholder='Make a new post...' 
                value={content}
                name='content'
                onChange={(e) => setContent(e.target.value)}/>
                <div className='makepost-buttons'>
                    <button onClick={handleCancel} className='button'>Cancel</button>
                    <button type='submit' className='button'>Submit</button>
                </div>
                
            </form>
        </div>
    )
}

export default NewPostForm;