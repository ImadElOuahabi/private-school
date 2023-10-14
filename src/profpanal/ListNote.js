import React, { useState, useEffect,useRef } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

import { Link, useNavigate, NavLink,useParams } from "react-router-dom";
import TeacherProfile from './TeacherProfile';
import logo from './logo center.png'
const ListNote = () => {
  
  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');

  if (!tokenExists) {
    navigate('/');
  }


  const formRef = useRef(null);

  const { idmater,idTicher,idLoE} = useParams();
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(8);
  const [tableData, setTableData] = useState([]);

  const [exams, setExams] = useState([]);


  const [noteInput, setNoteInput] = useState('');
  const [selectedRow, setSelectedRow] = useState(null);













  const handleSubmit = async (e, examId, studentId) => {
    e.preventDefault();
  

  
    try {
      const response = await fetch('http://localhost:8000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: currentDate ,
          note: noteInput,
          exam_id: examId,
          student_id: studentId,
        }),
      });
    
      if (response.ok || response.status === 201) {
        const data = await response.json();
        console.log(data);
        // Handle the response as needed
        // Reset the form fields
       setNoteInput('')
      
      } else {
        console.error('Error:', response.status);
        // Handle errors
      }
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };
  





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
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/exams/employee/${idTicher}`);
        setExams(response.data);
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

  const currentDate = new Date().toISOString().split('T')[0];
  



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


  const deleteExam = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this exam?');
  
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:8000/api/exams/${id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Exam deletion failed');
        }
  
        const data = await response.json();
        console.log('Exam deleted:', data.message);
  
        // Handle success or update the state accordingly
      } catch (error) {
        console.error('Error deleting exam:', error);
        // Handle the error
      }
    }
  };
  



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
        
        {exams.map((cc, index) => (
                        
                          

                          
                     
                     




        <div className="row" key={index}>
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">liste de Examen  {cc.name} </h4>

                <div>
                <a href={`/edite_note/${cc.exam_id}/${idLoE}`} className="btn btn-primary">
                  Détails
                </a>
                {' '}
                <a onClick={() => deleteExam(cc.exam_id)} className="btn btn-danger">
                  Supprimer
                </a>
                

                </div>
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
                        <th>ClASSE</th>
                        <th>GENRE</th>
                        <th>DATE</th>
                        <th>NOTE</th>
                        <th>SAISIE DE NOTES</th>
                        <th>AJOUTER</th>
                       
                       
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
                          <td>

                              <input 
                                type="date" 
                                className="form-control btn"
                                defaultValue={currentDate}
                                name="date"
                            
                            />

                          </td>
                          <td>
                          <button
                        type="button"
                        className="btn btn-warning"
                        onClick={() => setSelectedRow(index)}
                      >
                        Note
                      </button>

                      </td>
                            {selectedRow === index && (
                                   <td>

                                                          
                                                                                    
                                                <input 
                                                  type="text" 
                                                  className="form-control btn"
                                                  name="note"
                                                  value={noteInput}
                                                  onChange={(e) => setNoteInput(e.target.value)}


                                                />
                                                                  

                                    </td>
                                        )}
                          




                          <td>
                      <button
                        type="submit"
                        className="btn btn-warning"
                        onClick={(e) => handleSubmit(e, cc.exam_id, student.student_id)}
                      >
                        AJOUTER
                      </button>
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
                        <span>entries</span>
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


))}


        
      </div>

      
    </div>
    </>
  );
};

export default ListNote;
