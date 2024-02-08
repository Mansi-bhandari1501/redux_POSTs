import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments } from './slices/commentSlice';

const Post = ({ post }) => {
 const [show,setShow] = useState(false);
    const dispatch = useDispatch();

    const handleComments = (id) => {
        setShow(!show);
        dispatch(fetchComments(id));
    }

    const Loading = useSelector((state) => state.comments.isLoading);
    const iserror = useSelector((state) => state.comments.error);
    const comments = useSelector((state) => state.comments.comments[post.id]);
    return (
        <div key={post.id} className='post'>
            <br />
            <h3>TITLE : {post.title} </h3>
            {post.body}
            <br />
            <br />
            <button className="btn-comments" onClick={() => handleComments(post.id)}>Comments</button>
            {show&&comments?.map((com) => (
                <div key={com.id}>
                    <h3>Name : {com.name} </h3>
                    <h3>email : {com.email} </h3>
                    <h3>BODY : {com.body} </h3>
                </div>
            ))}
        </div>
    )
}

export default Post
