import React from 'react';
import LikeButtons from '../LikeButtons/LikeButtons';
import Post from '../Post/Post';

const PostList = (props) => {

    return ( 
        <div className='button-container'>
        {props.addParentEntry.map((post) => {
            return (
                <>             
                <Post post={post}/>
                <div className='like-buttons'>
                    <LikeButtons />                    
                </div></>                
            )})}                
        </div>
    );
}
 
export default PostList;