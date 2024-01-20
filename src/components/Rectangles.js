import React, { useState } from 'react';
import data from './data';
import '../styling/Rectangles.css';

const Rectangles = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isListVisible, setListVisible] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setListVisible(!isListVisible);
  };

  return (
    <div className="container">
      <div className='summaryBlock'>
        <div className='summary' onClick={() => handleOptionClick('techStack')}>
          <h3>Tech Stack</h3>
          <ul>
            <li>React</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML5</li>
          </ul>
        </div>

        <div className='summary' onClick={() => handleOptionClick('graphicApps')}>
          <h3>Graphic Apps</h3>
          <ul>
            <li>InDesign</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
            <li>Lightroom</li>
          </ul>
        </div>

        <div className='summary' onClick={() => handleOptionClick('documentLifeCycle')}>
          <h3>Document LifeCycle</h3>
          <ul>
            <li>Attention to the details</li>
            <li>Client`s documents confidentiality</li>
            <li>Ensuring document importance for inspections</li>
            <li>Awareness of the importance of prepared documents</li>
          </ul>
        </div>
      </div>

      <div className='moreInfoBlock'>
        {isListVisible && (
          <div className='moreInfo'>
            <ul>
              {(() => {
                switch (selectedOption) {
                  case 'techStack':
                    return data.techStack.map((item, index) => <li key={index}>{item}</li>);
                  case 'graphicApps':
                    return data.graphicApps.map((item, index) => <li key={index}>{item}</li>);
                  case 'documentLifeCycle':
                    return data.documentLifeCycle.map((item, index) => <li key={index}>{item}</li>);
                  default:
                    return null;
                }
              })()}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Rectangles;