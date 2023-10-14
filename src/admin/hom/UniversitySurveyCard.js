import React from 'react';

const UniversitySurveyCard = () => {
  return (
    <div className="col-xl-3 col-xxl-3 col-sm-6">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">University Survey</h3>
        </div>
        <div className="card-body">
          <div id="morris_area" className="morris_chart_height" style={{ height: '300px' }}></div>
        </div>
      </div>
    </div>
  );
};

export default UniversitySurveyCard;
