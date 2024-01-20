import React from 'react';
import '../styling/CandidatesInfo.css'; 

const CandidateInfo = () => (
  <div className="container">
      <h2 className="candidate"><span className="nameTitle">Candidate:</span> Name Last Name</h2>
      <h2 className="position"><span className="positionTitle">Position:</span> Developer</h2>
  </div>
);

export default CandidateInfo;