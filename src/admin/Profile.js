import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Profile = () => {
  const { idAdmin } = useParams();
  const [Employe, setEmploye] = useState({});
  const [welcom, setwelcom] = useState("");
  const [idma, setidma] = useState("");
  const [repo, setrepo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/api/admin/${idAdmin}`)
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
  }, [idAdmin]);

  
  if (!Employe) {
    return <div>Loading...</div>;
  }

  
  return (

<>
    

    
    <div className="container-fluid">
      <div className="container-fluid">
        {/* Breadcrumb */}
       
        {/* /Breadcrumb */}
        
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={Employe.e_image} alt="Admin" className="rounded-circle" width="150" />
                  <div className="mt-3">
                    <h4>{Employe.e_fname} {Employe.e_lname} </h4>
                    <p className="text-secondary mb-1">Profeddeur</p>
                    <p className="text-muted font-size-sm"> Niveau {Employe.type} Matiere {repo.LibelleMat} </p>
                    <button className="btn btn-primary" >Edite My Profile</button>
                    
                  </div>
                </div>
              </div>

             
            </div>
           

          </div>
          <div className="col-md-8">
            <div className="card mb-3">
                  <div className="card-header">
                    <h5 className="card-title">Information Perssonnelle</h5>
                  </div>
              <div className="card-body">
                <div className="row">
                
                  <div className="col-sm-3">
                    <h6 className="mb-0">Frist Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {Employe.e_fname}
                  </div>
                </div>
                <hr />

                <div className="row">
        
                  <div className="col-sm-3">
                    <h6 className="mb-0">Last Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.e_lname}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.e_email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Phone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    (+212) {Employe.e_phone}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {Employe.e_address}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
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
                    <h6 className="mb-0">Cin Carte</h6>
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

export default Profile;