import React, { useState } from 'react';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';



function App() {

  const [entries, setEntries] = useState('')


  function addNewEntry(entry){

    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div>
      <CreatePostForm addNewEntryProperty={addNewEntry}/>
    </div>
  );
}

export default App;
