import React from 'react';

const CourseCard3 = () => {
  return (
    <div className="col-xl-3 col-xxl-4 col-lg-6 col-md-6">
      <div className="card">
        <img className="img-fluid" src="images/courses/pic3.jpg" alt="" />
        <div className="card-body">
          <h4><a href="about-courses.html">Five Things Nobody Told You About</a></h4>
          <ul className="list-group mb-3 list-group-flush">
            <li className="list-group-item px-0 border-top-0 d-flex justify-content-between">
              <span className="mb-0 text-muted">April 23</span>
              <a href="javascript:void(0);">
                <i className="la la-heart-o mr-1"></i><strong>230</strong>
              </a>
            </li>
            <li className="list-group-item px-0 d-flex justify-content-between">
              <span className="mb-0">Duration :</span><strong>12 Months</strong>
            </li>
            <li className="list-group-item px-0 d-flex justify-content-between">
              <span className="mb-0">Professor :</span><strong>Konne Backfield</strong>
            </li>
            <li className="list-group-item px-0 d-flex justify-content-between">
              <span>
                <i className="fa fa-graduation-cap text-primary mr-2"></i>Student
              </span>
              <strong>+120</strong>
            </li>
          </ul>
          <a href="about-courses.html" className="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard3;
