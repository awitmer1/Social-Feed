import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import PostList from './components/PostList/PostList';
import './App.css';
import Header from './components/Header/Header';



function App() {

  const [entries, setEntries] = useState([])


  function addNewEntry(entry){

    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
      <><div className='header'>
      <Header />
    </div><div className='container-fluid'>
        <div className='post-form'>
          <CreatePostForm addNewEntryProperty={addNewEntry} />
        </div>
        <div className='display-post'>
          <PostList addParentEntry={entries} />
        </div>
      </div></>
    
  );
}

export default App;
