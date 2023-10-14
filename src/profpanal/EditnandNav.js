import React from 'react';
import { Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';

import EditMyProfil from './EditMyProfil';
import TeacherProfile from './TeacherProfile';


import avatar from './6.jpg';
import './prof.css';
import UserProfile from './UserProfile';
import AllExame from './AllExame';
import AddExame from './AddExame';
import { useEffect } from 'react';
import { useState } from 'react';

export default function EditnandNav() {




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





  const { idma } = useParams();
  const [Employe, setEmploye] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/api/employes/${idma}`)
      .then((response) => response.json())
      .then((data) => setEmploye(data))
      .catch((error) => console.log(error));
  }, [idma]);

  if (!Employe) {
    return <div>Loading...</div>;
  }







  return (
    <div className="teacher-page">

      

   

   
      <EditMyProfil/>




    </div>
  );
}
