import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Feed = () => {
    const dispatch = useDispatch();

    const user = useSelector(state => state.currentUser)
    const posts = useSelector(state => state.posts)

    return (
        <div>

        </div>
    )
}

export default Feed;