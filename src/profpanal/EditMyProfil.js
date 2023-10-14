import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import TeacherProfile from './TeacherProfile';
import { Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import logo from './logo center.png'

const EditMyProfil = () => {


  const navigate = useNavigate();


  const tokenExists = localStorage.getItem('token');


  if (!tokenExists) {
    navigate('/');
  }

    const { idtecher } = useParams();
    const [Employe, setEmploye] = useState({});


    const [e_fname, setE_fname] = useState('');
    const [e_lname, setE_lname] = useState('');
    const [e_address, setE_address] = useState('');
    const [e_phone, setE_phone] = useState('');
    const [e_email, setE_email] = useState('');
    const [password, setPassword] = useState('');
    const [e_image, setE_image] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [type, setType] = useState('');
    const [e_date_nessance, setE_date_nessance] = useState('');
    const [e_gender, setE_gender] = useState('');
  
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [cpassword, setcpassword] = useState('');
  
    const [cc, setcc] = useState('');
    const [welcom, setwelcom] = useState("");


    
    const handleLogout = () => {
      // Clear any stored tokens or user data
      // ...
      localStorage.removeItem('token');
      // Navigate to the login page
      
      navigate('/');
    };
  
    const [userInfo, setUserInfo] = useState({
        file: null,
        filePreview: null,
      });
    
      const handleInputChange = (event) => {
        setUserInfo({
          ...userInfo,
          file: event.target.files[0],
          filePreview: URL.createObjectURL(event.target.files[0]),
        });
      };
    

    useEffect(() => {
      fetch(`http://localhost:8000/api/employes/${idtecher}`)
        .then((response) => response.json())
        .then((data) => {
          setEmploye(data)

          if (data.e_gender === "Male") {
            setwelcom("Bienvenue, monsieur");
          } else {
            setwelcom("Bienvenue, madame");
          }



        })
        .catch((error) => console.log(error));
    }, [idtecher]);
  
    if (!Employe) {
      return <div>Loading...</div>;
    }
  
  





    const handleSubmit = async (event) => {
        event.preventDefault();
      
        const formData = new FormData();
        formData.append('avatar', userInfo.file);
      
        try {
          const uploadResponse = await fetch('http://localhost:4000/api/upload', {
            method: 'POST',
            body: formData,
          });
      
          if (!uploadResponse.ok) {
            throw new Error('Failed to upload the file');
          }
      
          const uploadData = await uploadResponse.json();
          console.log(uploadData);
    
           const response = await fetch(`http://localhost:8000/api/employes/${idtecher}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json",
                },
                body: JSON.stringify({
                  
                  e_fname:Employe.e_fname,
                  e_lname:Employe.e_lname,
                  e_address:Employe.e_address,
                  e_phone:Employe.e_phone,
                  e_email:Employe.e_email,
                 
                  e_image:uploadData.imageUrl,
                  city:Employe.city,
                  state:Employe.state,
                  
                  e_date_nessance:Employe.e_date_nessance,
              
                  
                  
                }),
              });
          
              const data = await response.json();
              if (response.ok) {
                
                alert('techer updated ' + data.e_fname);
          
                setEmploye(data);
                  console.log('Emùplye updated:', data);

                  window.location.reload();
          
              } else {
                console.log('error');
              }
            } 
            
            catch (error) {
              // Handle errors
              console.error(error);
              console.log("gygyy");
            }
          };



          const handleGoBack = () => {
            window.history.back();
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
          {/* Breadcrumb */}
          <form onSubmit={handleSubmit}>

          <div className="row page-titles mx-0">
            <div className="col-sm-6 p-md-0">
              <div className="welcome-text">
                <h4> {welcom} {Employe.e_fname} </h4>
              </div>
            </div>
            
          </div>
          {/* /Breadcrumb */}
          
           
                
       

            <div className="row gutters-sm">
                <div className="col-xl-4">
                
                    {/* Profile picture card */}
                    <div className="card mb-4 mb-xl-0">
                    <div className="card-header">Image de profil</div>
                    <div className="card-body text-center">
                        {/* Profile picture image */}
                        <img className="img-account-profile rounded-circle mb-2" src={Employe.e_image} alt="" />
                        {/* Profile picture help block */}
                        <div className="small font-italic text-muted mb-4">JPG ou PNG ne dépassant pas 5 Mo</div>
                        {/* Profile picture upload button */}

                        
                        <label className="btn btn-primary">
                        Télécharger une nouvelle image
                                    <input type="file" onChange={handleInputChange}   style={{ display: "none" }} />
                        </label>
                    </div>
                    </div>
                </div>

                <div className="col-xl-8">
                    {/* Account details card */}
                    <div className="card mb-4">
                    <div className="card-header">Information Personnelle</div>
                    <div className="card-body">
                        
                        {/* Form Group (username) */}
                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="inputUsername">E-mail (comment votre e-mail apparaîtra aux autres utilisateurs du site)</label>
                            <input className="form-control" id="inputUsername" type="email"
                            
                            value={Employe.e_email} 
                           
                            onChange={e => setEmploye({ ...Employe, e_email: e.target.value })}
                            />
                        </div>
                    
                        {/* Form Row */}
                        <div className="row gx-3 mb-3">
                            {/* Form Group (first name) */}
                            <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputFirstName">Prénom</label>
                            <input className="form-control" id="inputFirstName" type="text" 
                            
                            value={Employe.e_fname} 
                            onChange={e => setEmploye({ ...Employe, e_fname: e.target.value })}
                            />
                            </div>
                    
                            {/* Form Group (last name) */}
                            <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputLastName">Nom de famille</label>
                            <input className="form-control" id="inputLastName" type="text" 
                            value={Employe.e_lname}
                            onChange={e => setEmploye({ ...Employe, e_lname: e.target.value })}
                            />
                            </div>
                        </div>
                    
                        {/* Form Row */}
                        <div className="row gx-3 mb-3">
                            {/* Form Group (organization name) */}
                            <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputOrgName">État</label>
                            <input className="form-control" id="inputOrgName" type="text"
                            
                            value={Employe.state}
                            onChange={e => setEmploye({ ...Employe, state: e.target.value })}
                            />
                            </div>
                    
                            {/* Form Group (location) */}
                            <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputLocation">Ville</label>
                            <input className="form-control" id="inputLocation" type="text"  value={Employe.city} 
                            onChange={e => setEmploye({ ...Employe, city: e.target.value })}
                            />
                            </div>
                        </div>
                    
                        {/* Form Group (email address) */}
                        <div className="mb-3">
                            <label className="small mb-1" htmlFor="inputEmailAddress">Adresse</label>
                            <input className="form-control" id="inputEmailAddress" type="text" value={Employe.e_address}
                            onChange={e => setEmploye({ ...Employe, e_address: e.target.value })}
                            />
                        </div>
                    
                        {/* Form Row */}
                        <div className="row gx-3 mb-3">
                            {/* Form Group (phone number) */}
                            <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputPhone">Numéro de téléphone</label>
                            <input className="form-control" id="inputPhone" type="tel"  
                            value={Employe.e_phone} 
                            onChange={e => setEmploye({ ...Employe, e_phone: e.target.value })}
                            />
                            </div>
                    
                            {/* Form Group (birthday) */}
                            <div className="col-md-6">
                            <label className="small mb-1" htmlFor="inputBirthday">Date De Naissance</label>
                            <input className="form-control" id="inputBirthday" type="text" name="birthday"  
                            
                            value={Employe.e_date_nessance}
                            onChange={e => setEmploye({ ...Employe, e_date_nessance: e.target.value })}
                             />
                            </div>
                        </div>
                    
                        {/* Save changes button */}
                        <button className="btn btn-primary" type="submit">Sauvegarder les modifications</button>
                        {' '}
                        <button className="btn btn-primary" type="button" onClick={handleGoBack}>Aller à l'arrière</button>
                    </div>
                   
                </div>
                </div>
            </div>
            </form>
        </div>
      </div>
        
      </>
    );
}

export default EditMyProfil;
