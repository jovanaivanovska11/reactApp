import React, { useState, useEffect } from 'react';
import './style.css';
import jsonData from './data.json';
import Panel from './panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const MainPage = () => {
  const [data, setData] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false); 

  useEffect(() => {
    setData(jsonData);
    setOriginalData(jsonData);
  }, []);

  const updateData = (title, description) => {
    const newData = [
      { title: title, description: description, image: data[0].image },
      ...data.slice(1),
    ];
    setData(newData);
  };

  const resetData = () => {
    setData(originalData);
    const inputTitle = document.getElementById('title');
    const inputDesc = document.getElementById('description');
    inputTitle.value = originalData[0].title;
    inputDesc.value = originalData[0].description;
  };
  

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen); 
  };

  if (data === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <button onClick={togglePanel} className="panel-button">
          <FontAwesomeIcon icon={faBars} />
        </button>
        {isPanelOpen && (
          <div className="panel-wrapper">
            <Panel updateData={updateData} resetData={resetData} image={data[0].image} />
          </div>
        )}
      <div className="container">
        <div className="image-container">
          <img src={data[0].image} alt="Watch" className="image" />
        </div>
        <div className="text-container">
          <h1>{data[0].title}</h1>
          <p>{data[0].description}</p>
        </div>
      </div>
      <div className="container">
        <div className="text-container1">
          <h1>{data[1].title}</h1>
          <p>{data[1].description}</p>
        </div>
        <div className="image-container1">
          <img src={data[1].image} alt="Watch" className="image" />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
