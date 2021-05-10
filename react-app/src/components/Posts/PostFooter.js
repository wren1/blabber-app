import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import Comments from './Comments';

import { loadComments } from '../../store/ducks/comments';
import { like, unlike } from '../../store/ducks/likes';


const PostFooter = ({ post, user, setOpenComments, openComments }) => {
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.currentUser)
    let commentIds = post.comments
    let isLiked = currentUser.likes.includes(post.id);
    const [liked, setLiked] = useState(isLiked)
    const [numLikes, setNumLikes] = useState(post.users_liked.length);


    const handleClick = () => {
        (async () => {
            await dispatch(loadComments(post.id))
            setOpenComments(!openComments)
        })()
    }

    const handleLike = () => {
        if (!liked) {
            setNumLikes(numLikes + 1)
            dispatch(like(post.id))
        } else {
            setNumLikes(numLikes - 1)
            dispatch(unlike(post.id))
        }
        setLiked(!liked)
    }


    return (
        <>
            <div className='post-footer'>
                <div onClick={handleClick} className='show-comments__button'>
                    <div className='comments-icon'>
                        <ChatBubbleOutlineIcon />
                    </div>
                    <div className='post-footer__comments-button'>
                            {!commentIds.length ? 0 : commentIds.length} Comments
                    </div>
                </div>
                <div className='post-footer__buttons'>
                    <div className='post-footer__likes'>{numLikes} likes</div>
                    {!liked ? <FavoriteBorderIcon onClick={handleLike} className='post-like-icon' /> : <FavoriteIcon onClick={handleLike} className='post-like-icon' />}
                </div>
            </div>
            {!openComments ? null : <Comments post={post} commentIds={commentIds} />}
        </>
    )
}

export default PostFooter;