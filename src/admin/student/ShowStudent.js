import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Header from "../copmporent/Header";
import Sidebar from "../copmporent/Sidebar";

const ShowStudent = () => {
  const { idst } = useParams();


  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }


  const [student, setStudent] = useState(null);
  const [param, setParam] = useState('');

  
  const [isMenuOpen, setMenuOpen] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:8000/api/students/${idst}`)
      .then((response) => response.json())
      .then((data) => setStudent(data))
      .catch((error) => console.log(error));
  }, [idst]);

  if (!student) {
    return <div>Loading...</div>;
  }

  const {
    pin_Masare,
    s_fname,
    s_lname,
    class: studentClass,
    s_gender,
    s_image,
    s_phone,
    date_nessance,
    father_name,
  } = student;






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
              <h4>Étudiant {s_fname} </h4>
            </div>
          </div>
          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Accueil</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">Étudiants</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">{s_fname}</a>
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Afficher étudiant</h4>
                <a href="/add-student" className="btn btn-primary">
                  + Ajouter nouveau
                </a>
              </div>

              <div className="card-body pt-2">

              <div className="text-center">
        <div className="profile-photo">
          <img
            src={s_image}
            width="100"
            className="img-fluid rounded-circle animate__animated animate__zoomIn"
            alt=""
          />
        </div>
        <h3 style={{ marginBottom: "30px" }}>{`${s_fname} ${s_lname}`}</h3>
        <ul className="list-group mb-3 list-group-flush">
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">PIN MASARE :</span>
            <span className="text-primary">{pin_Masare}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">Éducation :</span>
            <span className="text-primary">{studentClass}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">GENRE :</span>
            <span className="text-primary">{s_gender}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">Numéro de téléphone :</span>
            <span className="text-primary">{s_phone}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">DATE DE NAISSANCE:</span>
            <span className="text-primary">{date_nessance}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">NOM DU PÈRE:</span>
            <span className="text-primary">{father_name}</span>
          </li>
        </ul>
        
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

export default ShowStudent;
