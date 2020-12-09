import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadPosts } from '../store/ducks/posts';
import { setCurrentUser } from '../store/ducks/currentUser';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(loadPosts())
        })();
    }, []);

    return (
        <div></div>
    )
}

export default Main;