import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Comments from './Comments';

import { loadComments } from '../../store/ducks/comments';


const PostFooter = ({ post, user, setOpenComments, openComments }) => {
    const dispatch = useDispatch();
    // let comments = [];
    // console.log(post.comments)
    // const allComments = useSelector(state => state.comments)
    // const comments = useSelector(state => post.comments.map(commentId => state.comments[`"${commentId}"`]));
    // console.log('all c: ', allComments)
    let commentIds = post.comments

    const handleClick = () => {
        (async () => {
            await dispatch(loadComments(post.id))
            setOpenComments(!openComments)
        })()
    }

    // useEffect(() => {
    //     (async () => {
    //         if (openComments) {
    //             dispatch(loadComments(post.id))
    //         }
    //     })();
    // }, []);

    return (
        <>
            <div className='post-footer'>
                {!post.comments.length ? null :
                <div onClick={handleClick} className='show-comments__button'>
                    <div>comments</div>
                    </div>
                     }
            </div>
            {!openComments ? null : <Comments commentIds={commentIds} />}
        </>
    )
}

export default PostFooter;