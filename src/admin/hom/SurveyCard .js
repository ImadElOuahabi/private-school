import React from 'react';

const SurveyCard = () => {
  return (
    <div className="col-xl-6 col-xxl-6 col-lg-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">University Survey</h3>
        </div>
        <div className="card-body">
          <div id="morris_bar_stalked" className="morris_chart_height" style={{ height: '300px' }}></div>
        </div>
      </div>
    </div>
  );
};
export default SurveyCard;
