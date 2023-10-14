import React from 'react';

const EmailForm = () => {
  return (
    <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12">
      <div className="card">
        <div className="card-body">
          <form action="#" method="post">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">To</span>
                </div>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">Subject</span>
                </div>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="form-group">
              <div className="summernote"></div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="fallback w-100">
                  <input type="file" className="dropify" data-default-file="" />
                </div>
              </div>
              <div className="col-lg-6">
                <button type="button" className="btn btn-primary float-right">
                  Send <i className="fa fa-paper-plane-o"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;
