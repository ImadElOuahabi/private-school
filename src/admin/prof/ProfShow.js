import React, { useEffect, useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import Header from "../copmporent/Header";
import Sidebar from "../copmporent/Sidebar";

const ProfShow = () => {

  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }



  const { ide } = useParams();
  const [prof, setProof] = useState({});
  const [idmat, setIdmat] = useState('');
  const [param, setParam] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:8000/api/employes/${ide}`)
      .then((response) => response.json())
      .then((data) => {
        setProof(data);
        setIdmat(data.id_mat); // Move this line here
      })
      .catch((error) => console.log(error));
  }, [ide]);



const [mat, setMat] = useState({});


useEffect(() => {
  fetch(`http://localhost:8000/api/matieres/${idmat}`)
    .then((response) => response.json())
    .then((data) => setMat(data))
    .catch((error) => console.log(error));
}, [idmat]);



  if (!prof) {
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
              <h4>Afficher professeur</h4>
            </div>
          </div>
          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Accueil</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">professeur</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">Afficher professeur</a>
              </li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Afficher professeur {`${prof.e_fname} ${prof.e_lname}`}</h4>
                <a href="/add-student" className="btn btn-primary">
                  + Ajouter nouveau
                </a>
              </div>

              <div className="card-body pt-2">

              <div className="text-center">
        <div className="profile-photo">
          <img
            src={prof.e_image}
            width="100"
            className="img-fluid rounded-circle animate__animated animate__zoomIn"
            alt=""
          />
        </div>
        <h3 style={{ marginBottom: "30px" }}>{`${prof.e_fname} ${prof.e_lname}`}</h3>
        <ul className="list-group mb-3 list-group-flush">
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">NOMBER CIN : </span>
            <span className="text-primary">{prof.e_CIN}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">CODE CNSS : </span>
            <span className="text-primary">{prof.code_CNSS}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">ADRESSE :</span>
            <span className="text-primary">{prof.e_address}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">VILLE :</span>
            <span className="text-primary">{prof.city}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">GENRE :</span>
            <span className="text-primary">{prof.e_gender}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">TÉLÉPHONE MOBILE :</span>
            <span className="text-primary">{prof.e_phone}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">E-MAIL :</span>
            <span className="text-primary">{prof.e_email}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">DATE DE NAISSANCE :</span>
            <span className="text-primary">{prof.e_date_nessance}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">STATE :</span>
            <span className="text-primary">{prof.state}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">CLASSE :</span>
            <span className="text-primary">{prof.type}</span>
          </li>
          <li
            style={{ marginBottom: "15px" }}
            className="list-group-item px-0 d-flex justify-content-between"
          >
            <span className="font-weight-bold">MATIÈRE :</span>
            <span className="text-primary">{mat.LibelleMat}</span>
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

export default ProfShow;
