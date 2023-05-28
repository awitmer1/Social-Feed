import React from 'react';
import LikeButtons from '../LikeButtons/LikeButtons';

const PostList = (props) => {

    return ( 
        <div className='button-container'>
        {props.addParentEntry.map((entry) => {
            return (
                <><div>
                    <h3>{entry.name}</h3>
                    <p>{entry.socialPost}</p>
                </div>
                <div className='like-buttons'>
                    <LikeButtons />                    
                </div></>                
            )})}                
        </div>
    );
}
 
export default PostList;