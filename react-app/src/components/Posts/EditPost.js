import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';

import { updatePost } from '../../store/ducks/posts';
import Comments from './Comments';

import { loadComments } from '../../store/ducks/comments';
import { removePost } from '../../store/ducks/posts';


const EditPost = ({ post, user, setOpenMakePost, openMakePost, group }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    if (!user) return null;

    const handleSubmit = (e) => {
        e.preventDefault(e);
        if (group) {
            dispatch(updatePost(post.id, user.id, title, content, group.id))
            setOpenMakePost(!openMakePost)
        } else {
            dispatch(updatePost(post.id, user.id, title, content))
            setOpenMakePost(!openMakePost)
        }
    }
    const handleCancel = (e) => {
        e.preventDefault();
        setOpenMakePost(!openMakePost)
    }

    return (

    <div className='newpostform editpost'>
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

export default EditPost;