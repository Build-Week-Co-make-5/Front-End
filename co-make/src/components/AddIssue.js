import React, { useState, useContext } from 'react';
import { IssueContext } from '../IssueContext';

const AddIssue = () => {

  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [issues, setIssues] = useContext(IssueContext);

  const updateTitle = (e) => {
    setTitle(e.target.value);
  };

  const updatePriority = e => {
    setPriority(e.target.value);
  };

  const addIssue = e => {
    e.preventDefault();
    setIssues(prevIssues => [...prevIssues, { title: title, priority: priority }]);
  };

  return (
    <form onSubmit={addIssue}>
      <input
        type="text"
        title="title"
        value={title}
        onChange={updateTitle}
        placeholder="Add Title"
        key={title.id}
      />
      <input
        type="text"
        title="priority"
        value={priority}
        onChange={updatePriority}
        placeholder="Add Priority"
        key={priority.id}
      />
      <button>Submit</button>
    </form>
  );
}

export default AddIssue;