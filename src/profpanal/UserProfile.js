import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TeacherProfile from './TeacherProfile';
const UserProfile = () => {
  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');

  if (!tokenExists) {
    navigate('/');
  }
  const { idLoE } = useParams();
  const [Employe, setEmploye] = useState({});
  const [welcom, setwelcom] = useState("");
  const [idma, setidma] = useState("");
  const [repo, setrepo] = useState({});


  useEffect(() => {
    fetch(`http://localhost:8000/api/employes/${idLoE}`)
      .then((response) => response.json())
      .then((data) => {
        setEmploye(data);
        if (data.e_gender === "Male") {
          setwelcom("Bienvenue, monsieur");
        } else {
          setwelcom("Bienvenue, madame");
        }
        setidma(data.id_mat);
      })
      .catch((error) => console.log(error));
  }, [idLoE]);

  useEffect(() => {
    if (idma) {
      fetch(`http://localhost:8000/api/matieres/${idma}`)
        .then((response) => response.json())
        .then((data) => {
          setrepo(data);
        })
        .catch((error) => console.log(error));
    }
  }, [idma]);

  if (!Employe) {
    return <div>Loading...</div>;
  }

  const handleEditProfile = () => {
    navigate(`/editprofil/${idLoE}`);
  };

  return (

<>
    
<TeacherProfile/>
    
    <div className="container-fluid">
      <div className="container-fluid">
        {/* Breadcrumb */}
        <div className="row page-titles mx-0 mt-4">
          <div className="col-sm-6 p-md-0">
            <div className="welcome-text">
            <h3 style={{ color: '#0061f2' }}>{welcom}  {Employe.e_fname}</h3>
            </div>
          </div>
        </div> 
        {/* /Breadcrumb */}
        
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={Employe.e_image} alt="Admin" className="rounded-circle" width="150" />
                  <div className="mt-3">
                    <h4>{Employe.e_fname} {Employe.e_lname} </h4>
                    <p className="text-secondary mb-1">Professeur</p>
                    <p className="text-muted font-size-sm"> Niveau {Employe.type} Matière {repo.LibelleMat} </p>
                    <button className="btn btn-primary" onClick={handleEditProfile}>Modifier Mon Profil</button>
                    
                  </div>
                </div>
              </div>

             
            </div>
           

          </div>
          <div className="col-md-8">
            <div className="card mb-3">
                  <div className="card-header">
                    <h5 className="card-title">Information Personnelle</h5>
                  </div>
              <div className="card-body">
                <div className="row">
                
                  <div className="col-sm-3">
                    <h6 className="mb-0">Prénom</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {Employe.e_fname}
                  </div>
                </div>
                <hr />

                <div className="row">
        
                  <div className="col-sm-3">
                    <h6 className="mb-0">Nom de famille</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.e_lname}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">E-Mail</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.e_email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Téléphone Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {'  '} {Employe.e_phone}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Adresse</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.e_address}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Ville</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.city}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">State</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.state}
                  </div>
                </div>

                <hr />
               
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Date De Nessance</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.e_date_nessance}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Nomber CIN</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.e_CIN}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Code CNSS</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">

                  {Employe.code_CNSS}
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

export default UserProfile;