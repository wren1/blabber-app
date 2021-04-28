import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import { createGroup } from '../../store/ducks/groups';


const NewGroupForm = ({ user }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [isPrivate, setIsPrivate] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    if (!user) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createGroup(user.id, name, description, isPrivate))
        history.push('/')
    }
    const handleCancel = () => {
        history.push('/')
    }

    return (
        <div className='newgroup__container'>
            <form onSubmit={handleSubmit} className='newgroup-form'>
                <input className='newgroup-name' 
                placeholder='Name' 
                value={name}
                name='name'
                onChange={(e) => setName(e.target.value)}
                />
                <div className='newgroup-private'>
                    <input 
                    type='checkbox' 
                    checked={isPrivate}
                    onChange={() => setIsPrivate(!isPrivate)}
                    name='isPrivate' />
                    <label htmlFor='isPrivate'>Private</label>
                </div>
                <TextareaAutosize className='newgroup-desc' 
                placeholder='Describe what your group is about.' 
                value={description}
                name='description'
                onChange={(e) => setDescription(e.target.value)}/>
                <div className='newgroup-buttons'>
                    <button onClick={handleCancel} className='button'>Cancel</button>
                    <button type='submit' className='button'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default NewGroupForm;