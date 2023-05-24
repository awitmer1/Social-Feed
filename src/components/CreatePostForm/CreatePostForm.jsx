import React, { useState } from 'react';

const CreatePostForm = () => {

    const [name, setName] = useState('');
    const [socialPost, setSocialPost] = useState('');

    function onSubmit(formEvent){

        const formValuesObject = {
            name: name,
            socialPost: socialPost
        }

        console.log(formValuesObject);
        // props.submitPost(formValuesObject);
    }


    return (
        <form onSubmit={onSubmit}>
            <label for="">Name</label><br></br>
            <input type="text" value={name} name="name" onChange={(event) => setName(event.target.value)}/><br></br>
            <label for="social-post">Post</label><br></br>
            <input type="textarea" rows="10" name="social-post" value={socialPost} onChange={(event) => setSocialPost(event.target.value)}/><br></br>
            <button type='submit'>Create</button>
        </form>
    );
}

export default CreatePostForm;



