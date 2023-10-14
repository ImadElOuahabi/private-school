import React from 'react';

const DonutChartCard = () => {
  return (
    <div className="col-xl-3 col-xxl-3 col-sm-6">
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">Donut Chart</h3>
        </div>
        <div className="card-body">
          <div id="morris_donught_2" className="morris_chart_height" style={{ height: '300px' }}></div>
        </div>
      </div>
    </div>
  );
};
export default DonutChartCard;
