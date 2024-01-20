import React, { useState } from 'react';
import CandidateInfo from './components/CandidateInfo';
import Rectangles from './components/Rectangles';

const App = () => {
  const [isRectanglesVisible, setRectanglesVisible] = useState(false);

  const handleButtonClick = () => {
    setRectanglesVisible(!isRectanglesVisible);
  };

  return (
    <div style={styles.container}>
      <CandidateInfo />
      <button onClick={handleButtonClick}>Take a Look</button>
      <div style={isRectanglesVisible ? styles.rectangles : { display: 'none' }}>
        <Rectangles />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', 
  },
  rectangles: {
    opacity: 1,
    visibility: 'visible',
    marginTop: '20px', 
    transition: 'opacity 0.3s ease-in-out', 
  },
  hidden: {
    opacity: 0,
    visibility: 'hidden',
    marginTop: 0,
    transition: 'opacity 0.3s ease-in-out', 
  },
};

export default App;