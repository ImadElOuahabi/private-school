import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";
import Header from "../copmporent/Header";
import Sidebar from "../copmporent/Sidebar";
const StudentList = () => {


  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }


  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(8);
  const [tableData, setTableData] = useState([]);





  const deleteEtudiant = async (id) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer ce le Étudiant ?');
  
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:8000/api/students/${id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Échec de la suppression du Étudiant');
        }
        window.location.reload();
        const data = await response.json();
        console.log('Étudiant deleted:', data.message);

          


        // Handle success or update the state accordingly
      } catch (error) {
        console.error('Error deleting Étudiant:', error);
        // Handle the error
      }
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






  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [param, setParam] = useState('');

  const handleParamChange = (value) => {
    setParam(value);
  };




  const offset = currentPage * entriesPerPage;
  const pageCount = Math.ceil(tableData.length / entriesPerPage);
  const paginatedData = tableData.slice(offset, offset + entriesPerPage);

  return (



    <div id="main-wrapper" className={isMenuOpen ?'show menu-toggle' : 'show'}>
    
    
    
    
    <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}  />
    <Sidebar/>


 
    <div className="content-body">
      <div className="container-fluid">
        <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
            <div className="welcome-text">
              <h4>Tout Étudiants</h4>
            </div>
          </div>
          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Accueil</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">Étudiants</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">Tout Étudiants</a>
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Liste de tous les étudiants</h4>
                <a href="/add-student" className="btn btn-primary">
                  + Ajouter nouveau
                </a>
              </div>

              <div className="card-body">
                <div className="table-responsive">
                  <table id="example3" className="table table-striped">
                    <thead>
                      <tr>
                        <th>PIN MASAR</th>
                        <th>NOM ET PRÉNOM</th>
                        <th>IMAGE</th>
                        <th>Éducation</th>
                        <th>GENRE</th>
                        <th>TÉLÉPHONE</th>
                        <th>DATE DE NAISSANCE</th>
                        <th>NOM DU PÈRE</th>
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
                              src={student.s_image}
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
                                  deleteEtudiant(student.student_id)
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
                        <span>Affiche</span>
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
                        <span>Entrées</span>
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
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  );
};

export default StudentList;
