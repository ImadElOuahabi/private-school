import React from 'react';

const ExamToppers = () => {
  return (
    <div className="col-xl-6 col-xxl-6 col-lg-6 col-md-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">Exam Toppers</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table verticle-middle">
              <thead>
                <tr>
                  <th scope="col">Roll No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>542</td>
                  <td>Jack Ronan</td>
                  <td>
                    <span id="widget_sparklinedash">
                      <canvas></canvas>
                    </span>
                  </td>
                  <td>
                    <a href="javascript:void(0);" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>243</td>
                  <td>Jimmy Morris</td>
                  <td>
                    <div className="ico-sparkline">
                      <div id="widget_spark-bar"></div>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>452</td>
                  <td>Nashid Martines</td>
                  <td>
                    <div className="ico-sparkline">
                      <div id="widget_StackedBarChart"></div>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>124</td>
                  <td>Roman Aurora</td>
                  <td>
                    <div className="ico-sparkline">
                      <div id="widget_tristate"></div>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>234</td>
                  <td>Samantha</td>
                  <td>
                    <div className="ico-sparkline">
                      <div id="widget_composite-bar"></div>
                    </div>
                  </td>
                  <td>
                    <a href="javascript:void(0);" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamToppers;

