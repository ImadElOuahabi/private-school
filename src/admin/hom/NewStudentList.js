import React from 'react';

const NewStudentList = () => {
  return (
    <div className="col-xl-12 col-xxl-12 col-lg-12 col-md-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4 className="card-title">New Student List</h4>
        </div>
        <div className="card-body">
          <div className="table-responsive recentOrderTable">
            <table className="table verticle-middle table-responsive-md">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Assigned Professor</th>
                  <th scope="col">Date Of Admit</th>
                  <th scope="col">Status</th>
                  <th scope="col">Subject</th>
                  <th scope="col">Fees</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>Jack Ronan</td>
                  <td>Airi Satou</td>
                  <td>01 August 2020</td>
                  <td>
                    <span className="badge badge-rounded badge-primary">Checkin</span>
                  </td>
                  <td>Commerce</td>
                  <td>120$</td>
                  <td>
                    <a href="edit-student.html" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>Jimmy Morris</td>
                  <td>Angelica Ramos</td>
                  <td>31 July 2020</td>
                  <td>
                    <span className="badge badge-rounded badge-warning">Panding</span>
                  </td>
                  <td>Mechanical</td>
                  <td>120$</td>
                  <td>
                    <a href="edit-student.html" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>Nashid Martines</td>
                  <td>Ashton Cox</td>
                  <td>30 July 2020</td>
                  <td>
                    <span className="badge badge-rounded badge-danger">Canceled</span>
                  </td>
                  <td>Science</td>
                  <td>520$</td>
                  <td>
                    <a href="edit-student.html" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>04</td>
                  <td>Roman Aurora</td>
                  <td>Cara Stevens</td>
                  <td>29 July 2020</td>
                  <td>
                    <span className="badge badge-rounded badge-success">Checkin</span>
                  </td>
                  <td>Arts</td>
                  <td>220$</td>
                  <td>
                    <a href="edit-student.html" className="btn btn-sm btn-primary">
                      <i className="la la-pencil"></i>
                    </a>
                    <a href="javascript:void(0);" className="btn btn-sm btn-danger">
                      <i className="la la-trash-o"></i>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>05</td>
                  <td>Samantha</td>
                  <td>Bruno Nash</td>
                  <td>28 July 2020</td>
                  <td>
                    <span className="badge badge-rounded badge-success">Checkin</span>
                  </td>
                  <td>Maths</td>
                  <td>130$</td>
                  <td>
                    <a href="edit-student.html" className="btn btn-sm btn-primary">
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

export default NewStudentList;
