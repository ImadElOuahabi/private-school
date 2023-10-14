import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Header from "../copmporent/Header";
import Sidebar from "../copmporent/Sidebar";

const ParentShow = () => {



  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }

    
  const { id } = useParams();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [parent, setStudent] = useState({});
  const [param, setParam] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8000/api/parents/${id}`)
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!parent) {
    return <div>Loading...</div>;
  }

  



  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
 

  const handleParamChange = (value) => {
    setParam(value);
  };



  return (


<>
<div id="main-wrapper" className={isMenuOpen ?'show menu-toggle' : 'show'}>
    
    
    
    
    <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}  />
    <Sidebar/>


<div className="content-body">
      <div className="container-fluid">
        <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
            <div className="welcome-text">
              <h4>Afficher Parent</h4>
            </div>
          </div>
          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Accueil</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">Parent</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">Afficher Parent</a>
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Parent {parent.p_fname}   </h4>
                <a href="/add-student" className="btn btn-primary">
                  + Ajouter nouveau étudient
                </a>
              </div>

              <div className="card-body pt-2">

              <div className="text-center">
        <div className="profile-photo">
          <img
            src={parent.p_image} 
            width="100"
            className="img-fluid rounded-circle animate__animated animate__zoomIn"
            alt=""
          />
        </div>
        <h3 style={{ marginBottom: "30px" }}>{`${parent.p_fname}   ${parent.p_lname}`}</h3>
        <ul className="list-group mb-3 list-group-flush">
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">NOMBRE CIN :</span>
            <span className="text-primary">{parent.p_CIN}</span>
          </li>
         
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">PROFESSION :</span>
            <span className="text-primary">{parent.p_occupation}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">GENDER:</span>
            <span className="text-primary">{parent.p_gender}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">Numéro de téléphone : </span>
            <span className="text-primary">{parent.p_phone}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">E-MAIL:</span>
            <span className="text-primary">{parent.p_email}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">DATE DE NAISSANCE:</span>
            <span className="text-primary">{parent.date_nessancee}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">ADRESSE :</span>
            <span className="text-primary">{parent.p_address}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">Nombre d'étudiants :</span>
            <span className="text-primary">{parent.number_of_students}</span>
          </li>
        </ul>

      </div>


                
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
    <br/><br/> 
    </div>
  
    </>
  );
};

export default ParentShow;
