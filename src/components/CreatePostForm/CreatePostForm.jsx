import React, { useState } from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const CreatePostForm = (props) => {

    const [name, setName] = useState('');
    const [socialPost, setSocialPost] = useState('');

    function handleSubmit(event){

        event.preventDefault();

        let newEntry = {
            name: name,
            socialPost: socialPost
        };

        console.log(newEntry);
        props.addNewEntryProperty(newEntry);    
    }


    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label for="name">Name</Form.Label>
                <Form.Control type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label for="social-post">Post</Form.Label>
                <Form.Control as="textarea" rows={3} name="social-post" value={socialPost} onChange={(event) => setSocialPost(event.target.value)}/>     
            </FormGroup>
            <Button variant="primary" type='submit'>Create</Button>
        </Form>
    );
}

<Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
  <Form.Label>Email address</Form.Label>
  <Form.Control type="email" placeholder="name@example.com" />
</Form.Group>
<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
  <Form.Label>Example textarea</Form.Label>
  <Form.Control as="textarea" rows={3} />
</Form.Group>
</Form>

export default CreatePostForm;



