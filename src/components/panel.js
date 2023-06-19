import React, { useState } from 'react';

const Panel = ({ updateData, resetData }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(title, description);
    setTitle('');
    setDescription('');
  };

  const handleReset = () => {
    resetData();
    setTitle('');
    setDescription('');
  };

  return (
    <div className="panel">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <div>
          <button type="submit">Submit</button>
          <button onClick={resetData}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Panel;
