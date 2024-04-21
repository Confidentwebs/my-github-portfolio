import React, { useState } from 'react';

function Modal({ onClose }) {
  const [repoName, setRepoName] = useState('');
  const [description, setDescription] = useState('');
  const [visibility, setVisibility] = useState('public');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the form and create a new repository
    // Send an API request to create the repository using repoName, description, and visibility
    console.log('Submitting form:', { repoName, description, visibility });
    // Close the modal
    onClose();
  };

  const handleCancel = () => {
    // Close the modal without submitting the form
    onClose();
  };

  

  return (
    <div className="modal" style={{padding: '10px', display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
      <form onSubmit={handleSubmit}>
        <label style={{color: 'white'}}>
          Repo Name:
          <input type="text" value={repoName} onChange={(e) => setRepoName(e.target.value)} />
        </label><br></br>
<br></br>
        <label style={{color: 'white'}}>
          Description:
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </label><br></br>
<br></br>
        <label style={{color: 'white'}}>
          Visibility:
          <select value={visibility} onChange={(e) => setVisibility(e.target.value)}>
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </label>
        <button type="submit">Create Repository</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default Modal;
