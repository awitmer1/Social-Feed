import React from 'react';
import CreatePostForm from '../CreatePostForm/CreatePostForm';


const PostList = (props) => {

    return ( 
       <div>
        {props.addParentEntry.map((entry) => {
            return (
                <div>
                    <h3>{entry.name}</h3>
                    <p>{entry.socialPost}</p>
                </div>                
            )})}                
        </div>
            );
}
 
export default PostList;

// Buttons