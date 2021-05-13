import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { updatePost } from '../../store/ducks/posts';

import { removePost } from '../../store/ducks/posts';


const EditPost = ({ post, user, setOpenMakePost, openMakePost, group }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    if (!user) return null;

    const handleDelete = () => {
        dispatch(removePost(post.id))
    }

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
                        <DeleteIcon onClick={handleDelete} className='post-header__delete' />
                        <button onClick={handleCancel} className='button'>Cancel</button>
                        <button type='submit' className='button'>Submit</button>
                    </div>
                </form>
            </div>
        )
}

export default EditPost;