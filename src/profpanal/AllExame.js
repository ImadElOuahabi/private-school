import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Link } from "react-router-dom";


import TeacherProfile from './TeacherProfile';
import UserProfile from "./UserProfile";
const AllExame = () => {



  
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(8);
  const [tableData, setTableData] = useState([]);

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/students/${id}`);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/students");
        setTableData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [entriesPerPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleEntriesPerPageChange = (e) => {
    setCurrentPage(0);
    setEntriesPerPage(Number(e.target.value));
  };

  const offset = currentPage * entriesPerPage;
  const pageCount = Math.ceil(tableData.length / entriesPerPage);
  const paginatedData = tableData.slice(offset, offset + entriesPerPage);

  return (
    <>
    
    <UserProfile/>
    <div className="content-body">
      <div className="container-fluid">
        

        <div className="row">
          <div className="col-lg-12">
            <div className="card">


              <div className="card-body">
                <div className="table-responsive">
                  <table id="example3" className="table table-striped">
                    <thead>
                      <tr>
                        <th>IP MASAR</th>
                        <th>FULL NAME</th>
                        <th>PICTURE</th>
                        <th>Education</th>
                        <th>GENDER</th>
                        <th>MOBILE</th>
                        <th>DATE OF BIRTH</th>
                        <th>FATHER NAME</th>
                        <th>ACTIONS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.map((student, index) => (
                        <tr key={index}>
                          <td>{student.pin_Masare}</td>
                          <td>{`${student.s_fname} ${student.s_lname}`}</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src="images/profile/small/pic1.jpg"
                              alt=""
                            />
                          </td>
                          <td>{student.class}</td>
                          <td>{student.s_gender}</td>
                          <td>{student.s_phone}</td>
                          <td>{student.date_nessance}</td>
                          <td>{student.father_name}</td>

                          <td>
                            <div className="d-flex">
                              <a
                                href={`/edit-student/${student.student_id}`}
                                className="btn btn-primary shadow btn-xs sharp mr-1"
                              >
                                <i className="fa fa-pencil"></i>
                              </a>
                              <button
                                className="btn btn-danger shadow btn-xs sharp ml-1"
                                onClick={() =>
                                  deleteStudent(student.student_id)
                                }
                              >
                                <i className="fa fa-trash"></i>
                              </button>

                              <Link
                                to={`/show-student/${student.student_id}`}
                                className="btn btn-info shadow btn-xs sharp ml-1"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card-footer">
                <div className="pagination-section">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="show-entries">
                        <span>Show</span>
                        <select
                          className="form-control"
                          value={entriesPerPage}
                          onChange={handleEntriesPerPageChange}
                        >
                          <option value="8">8</option>
                          <option value="14">14</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                        <span>entries</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        breakLabel={"..."}
                        breakClassName={"break-me"}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageChange}
                        containerClassName={"pagination justify-content-end"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        activeClassName={"active"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AllExame;
