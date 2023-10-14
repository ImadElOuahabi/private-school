import React from 'react';
import { Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

import EditMyProfil from './EditMyProfil';

import avatar from './6.jpg';
import './prof.css';
import UserProfile from './UserProfile';
import AllExame from './AllExame';
import AddExame from './AddExame';
import { useEffect } from 'react';
import { useState } from 'react';
import logo from './logo center.png'
export default function Student() {

  const navigate = useNavigate();


  const tokenExists = localStorage.getItem('token');


if (!tokenExists) {
  navigate('/');
}



  const handleLogout = () => {
    // Clear any stored tokens or user data
    // ...
    localStorage.removeItem('token');
    // Navigate to the login page
    
    navigate('/');
  };





  const { idLoE } = useParams();
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
  );
}
