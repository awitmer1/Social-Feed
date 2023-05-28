import React, { useState } from 'react';
import "./LikeButtons.css";
import {BsHandThumbsUpFill} from 'react-icons/bs'
import {BsHandThumbsDownFill} from 'react-icons/bs'

const LikeButtons = (props) => {

    const [likeButton, setLikeButton] = useState('likeButton-inactive')
    const [dislikeButton, setDislikeButton] = useState('dislikeButton-inactive')

    function handleClickLike() {
        
        if(likeButton === 'likeButton-inactive'){
            setLikeButton('likeButton-active');
        }
        else {
            setLikeButton('likeButton-inactive');
        }
    }

    function handleClickDislike() {
        
        if(dislikeButton === 'dislikeButton-inactive'){
            setDislikeButton('dislikeButton-active');
        }
        else {
            setDislikeButton('dislikeButton-inactive');
        }
    }

        return ( 
            <><div>
                <button className={likeButton} onClick={handleClickLike}><BsHandThumbsUpFill /></button>
            </div>
            <div>
                <button className={dislikeButton} onClick={handleClickDislike}><BsHandThumbsDownFill /></button>
            </div></>
         );
}
 
export default LikeButtons;