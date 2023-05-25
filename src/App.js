import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import PostList from './components/PostList/PostList';



function App() {

  const [entries, setEntries] = useState([])


  function addNewEntry(entry){

    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div>
      <CreatePostForm addNewEntryProperty={addNewEntry}/>
      <PostList addParentEntry={entries}/>
    </div>
  );
}

export default App;
