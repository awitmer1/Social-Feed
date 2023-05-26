import React from 'react';
// import like from '../images/like.png';
// import dislike from '../images/dislike.png';

const PostList = (props) => {

    return ( 
        <div>
        {props.addParentEntry.map((entry) => {
            return (
                <><div>
                    <h3>{entry.name}</h3>
                    <p>{entry.socialPost}</p>
                </div>
                <div className='like-buttons'>
                    <button class="bi bi-hand-thumbs-up-fill"></button>
                    <button class="bi bi-hand-thumbs-down-fill"></button>                    
                </div></>                
            )})}                
        </div>
    );
}
 
export default PostList;

// Buttons