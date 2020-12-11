import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import PostHeader from './PostHeader';
import PostContent from './PostContent';
import PostFooter from './PostFooter';
import Comments from './Comments';

// import { loadComments } from '../../store/ducks/comments';


const Post = ({ post, user }) => {
    const dispatch = useDispatch();

    const [openComments, setOpenComments] = useState(false)

    // let comments =[];
    // useSelector(state => post.comments.forEach(commentId => comments.push(state.comments[`"${commentId}"`])));

    if (post === undefined || user === undefined) return null;

    // useEffect(() => {
    //     (async () => {
    //         await dispatch(loadComments(post.id))
    //     })();
    // }, []);
    
    return (
        <div className='post'>
            <PostHeader post={post} user={user} />
            <PostContent post={post} />
            <PostFooter post={post} user={user} setOpenComments={setOpenComments} openComments={openComments} />
            {/* {!openComments ? null : <Comments comments={comments} />} */}
        </div>
    )
}

export default Post;