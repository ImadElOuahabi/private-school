import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";

import TeacherProfile from './TeacherProfile';


import { Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

import logo from './logo center.png'
const ListStudent = () => {

  const navigate = useNavigate();

  const tokenExists = localStorage.getItem('token');


if (!tokenExists) {
  navigate('/');
}


  const { idmater} = useParams();
  const { idLoE} = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(8);
  const [tableData, setTableData] = useState([]);





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/studentsO/${idmater}`);
        setTableData(response.data);
        console.log(response.data)
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


  const handleGoBack = () => {
    window.history.back();
  };




  
  const handleLogout = () => {
    // Clear any stored tokens or user data
    // ...
    localStorage.removeItem('token');
    // Navigate to the login page
    
    navigate('/');
  };





 
  const [Employe, setEmploye] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/employes/${idLoE}`)
      .then((response) => response.json())
      .then((data) => setEmploye(data))
      .catch((error) => console.log(error));
  }, [idLoE]);

  if (!Employe) {
    return <div>Loading...</div>;
  }









  return (
<>
<div className="teacher-page">
      <div className="nav-header">
   
    </div>
      <div id="preloader"></div>
      <div className="nav-header">
        <a href="index.html" className="brand-logo">
          <img className="logo-abbr" src={logo} alt="" style={{ marginLeft: '130px' }} />
          
        </a>
      </div>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">

              </div>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown header-profile">
                  <NavDropdown title="Menu" id="responsive-nav-dropdown">
                    <NavDropdown.Item className='nav-link' as={NavLink}  to={`/proff/${Employe.e_CIN}`} activeClassName="active">
                    Accueil
                    </NavDropdown.Item>
                    <NavDropdown.Item  className='nav-link' as={NavLink}  to={`/addexam/${Employe.e_CIN}`} activeClassName="active">
                    Ajouter un examen
                    </NavDropdown.Item>
                    <NavDropdown.Item  className='nav-link' as={NavLink} to={`/list/${Employe.id_mat}/${Employe.e_CIN}`} activeClassName="active">
                    Liste des étudiants
                    </NavDropdown.Item>
                    <NavDropdown.Item  className='nav-link' as={NavLink} to={`/listNot/${Employe.id_mat}/${Employe.employe_id}/${Employe.e_CIN}`} activeClassName="active">
                    Les examens
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li className="nav-item dropdown header-profile">
                  <Dropdown alignRight>
                    <Dropdown.Toggle variant="link" id="dropdown-profile">
                      <img src={Employe.e_image} width="20" alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item  onClick={handleLogout}>
                        <svg
                          id="icon-logout"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-log-out"
                        >
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        <span className="ml-2">Se déconnecter</span>
                      </Dropdown.Item>


                    </Dropdown.Menu>
                  </Dropdown>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    




    </div>

    <div className="container-fluid mt-5">
      <div className="container-fluid">
       

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Liste de tous les étudiants</h4>
                <a onClick={handleGoBack} className="btn btn-primary">
                  Aller à l'arrière
                </a>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table id="example3" className="table table-striped">
                    <thead>
                      <tr>
                        <th>IPN MASARE</th>
                        <th>PRÉNOM</th>
                        <th>NOM DE FAMILLE</th>
                        <th>IMAGE</th>
                        <th>Éducation</th>
                        <th>GENRE</th>
                        <th>NUMÉRO DE PORTABLE</th>
                        <th>E-MAIL</th>
                        <th>DATE DE NAISSANCE</th>
                       
                       
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedData.map((student, index) => (
                        <tr key={index}>
                          <td>{student.pin_Masare}</td>
                          <td>{`${student.s_fname} `}</td>
                          <td>{`${student.s_lname}`}</td>
                          <td>
                            <img
                              className="rounded-circle"
                              width="35"
                              src={student.s_image}
                              alt=""
                            />
                          </td>
                          <td>{student.class}</td>
                          <td>{student.s_gender}</td>
                          <td>{student.s_phone}</td>
                          <td>{student.email}</td>
                          <td>{student.date_nessance}</td>
                          

                          
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
                        <span>Montrer</span>
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
                        <span>entrées</span>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <ReactPaginate
                        previousLabel={"← Précédent"}
                        nextLabel={"Suivant →"}
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

export default ListStudent;
