import React, { useState, useEffect } from 'react';
import logo from './logo center.png'
import { Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
const EditExam = () => {
  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');

  if (!tokenExists) {
    navigate('/');
  }

  const { id_exam ,idLoE} = useParams();

  const [examData, setExamData] = useState({})

  const handleLogout = () => {
    // Clear any stored tokens or user data
    // ...
    localStorage.removeItem('token');
    // Navigate to the login page
    
    navigate('/');
  };

  const [Employee, setEmployee] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/employes/${idLoE}`)
      .then((response) => response.json())
      .then((data) => { 
        setEmployee(data)
      })
      .catch((error) => console.log(error));
  }, [idLoE]);
    
 

  useEffect(() => {
    // Fetch the existing exam data based on the examId and update the state
    fetch(`http://localhost:8000/api/exam/${id_exam}`)
      .then(response => response.json())
      .then(data => {
        setExamData(data)
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching exam data:', error);
        // Handle the error
      });
  }, [id_exam]);



  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Perform the API call to update the exam
    fetch(`http://localhost:8000/api/exams/${id_exam}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(examData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Exam updated:', data.exam);
  
        // Handle the response or update the state accordingly
      })
      .catch(error => {
        console.error('Error updating exam:', error);
        // Handle the error
      });
  };



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
                    <NavDropdown.Item className='nav-link' as={NavLink}  to={`/proff/${Employee.e_CIN}`} >
                    Accueil
                    </NavDropdown.Item>
                    <NavDropdown.Item  className='nav-link' as={NavLink}  to={`/addexam/${Employee.e_CIN}`} >
                    Ajouter un examen
                    </NavDropdown.Item>
                    <NavDropdown.Item  className='nav-link' as={NavLink} to={`/list/${Employee.id_mat}/${Employee.e_CIN}`}>
                    Liste des étudiants
                    </NavDropdown.Item>
                    <NavDropdown.Item  className='nav-link' as={NavLink} to={`/listNot/${Employee.id_mat}/${Employee.employe_id}/${Employee.e_CIN}`} >
                    Les examens
                    </NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li className="nav-item dropdown header-profile">
                  <Dropdown alignRight>
                    <Dropdown.Toggle variant="link" id="dropdown-profile">
                      <img src={Employee.e_image} width="20" alt="" />
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


    <div className="container-fluid d-flex justify-content-center mt-5">
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Exam Details</h4>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Nom de l'examen:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={examData.name}
                      onChange={(e) =>
                        setExamData({ ...examData, name: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Type d'examen:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={examData.type}
                      onChange={(e) =>
                        setExamData({ ...examData, type: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Classe:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={examData.class}
                      onChange={(e) =>
                        setExamData({ ...examData, class: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Semestre:</label>
                    <input
                      type="text"
                      className="form-control"
                      value={examData.semester}
                      onChange={(e) =>
                        setExamData({ ...examData, semester: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Temp:</label>
                    <input
                      type="time"
                      className="form-control"
                      value={examData.time}
                      onChange={(e) =>
                        setExamData({ ...examData, time: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Date:</label>
                    <input
                      type="date"
                      className="form-control"
                      value={examData.date}
                      onChange={(e) =>
                        setExamData({ ...examData, date: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Enregistrer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default EditExam;
