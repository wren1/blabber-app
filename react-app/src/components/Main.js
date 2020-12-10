import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadPosts } from '../store/ducks/posts';
import { loadInvites } from '../store/ducks/invites';

const Main = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            await dispatch(loadPosts())
            await dispatch(loadInvites())
        })();
    }, []);

    return (
        <div></div>
    )
}

export default Main;