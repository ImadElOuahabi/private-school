import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";

import Header from '../copmporent/Header';

import Sidebar from '../copmporent/Sidebar';

function ParentAdd() {
  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }
  

  const [dateDeNes, setdateDeNes] = useState('');
  const [cin, setCin] = useState('');
 
  const [password, setpassword] = useState('');
  const [p_email, setp_email] = useState('');
  const [p_gender, setp_gender] = useState('');
  const [p_occupation, setp_occupation] = useState('');
  const [p_address, setp_address] = useState('');
  const [p_phone, setp_phone] = useState('');

  const [p_fname, setp_fname] = useState('');
  const [p_lname, setp_lname] = useState('');
  const [cpassword, setcpassword] = useState('');


  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};
  
    // Validate p_fname
    if (!p_fname) {
      formIsValid = false;
      newErrors.p_fname = 'First name is required';
    }
  
    // Validate p_lname
    if (!p_lname) {
      formIsValid = false;
      newErrors.p_lname = 'Last name is required';
    }
  
    // Validate p_email
    if (!p_email) {
      formIsValid = false;
      newErrors.p_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(p_email)) {
      formIsValid = false;
      newErrors.p_email = 'Email is invalid';
    }
  
    // Validate password
    if (!password) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formIsValid = false;
      newErrors.password = 'Password should be at least 6 characters long';
    }
  
    // Validate cpassword
    if (password !== cpassword) {
      formIsValid = false;
      newErrors.cpassword = 'Passwords do not match';
    }
  
    // Validate p_occupation
    if (!p_occupation) {
      formIsValid = false;
      newErrors.p_occupation = 'Occupation is required';
    }
  
    // Validate cin
    if (!cin) {
      formIsValid = false;
      newErrors.cin = 'CIN is required';
    }
  
    // Validate p_gender
    if (!p_gender || p_gender === 'Gender') {
      formIsValid = false;
      newErrors.p_gender = 'Gender is required';
    }
  
    // Validate p_phone
    if (!p_phone) {
      formIsValid = false;
      newErrors.p_phone = 'Mobile number is required';
    }
  
    // Validate dateDeNes
    if (!dateDeNes) {
      formIsValid = false;
      newErrors.dateDeNes = 'Date is required';
    }
  
    // Validate p_address
    if (!p_address) {
      formIsValid = false;
      newErrors.p_address = 'Address is required';
    }
  
    setErrors(newErrors);
    return formIsValid;
  };
  



  const [img, setImg] = useState({});







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


  const handleSubmit = async (event) => {
    event.preventDefault();
  if (password !== cpassword) {
alert('Veuillez vérifier le mot de passe')


  }
  else{
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
  
      const response = await fetch('http://localhost:8000/api/parents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          p_CIN: cin,
          p_image: uploadData.imageUrl,
          p_fname: p_fname,
          p_lname: p_lname,
          p_gender: p_gender,
          p_occupation: p_occupation,
          p_address: p_address,
          p_phone: p_phone,
          p_email: p_email,
          password: password,
          date_nessancee: dateDeNes,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add parent');
      }
  
      const data = await response.json();
      console.log(data);
      alert('Parent ajouté: ' + data.p_fname);
      navigate('/all-parent')
    } catch (error) {
      console.error(error);
      alert('Une erreur s est produite lors du traitement de la demande');
    }
  }
  };
  







  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  const [param, setParam] = useState('');

  const handleParamChange = (value) => {
    setParam(value);
  };









  

    
   
   


    
  


  return (

    <div id="main-wrapper" className={isMenuOpen ?'show menu-toggle' : 'show'}>
    
    
    
    
    <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}  />
    <Sidebar/>



    <div className="content-body">
      <div className="container-fluid">
        <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
            <div className="welcome-text">
              <h4>Ajouter un parent</h4>
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
                <a href="javascript:void(0);">Ajouter un parent</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-xxl-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Informations de base</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Prénom</label>
                        <input
                          type="text"
                          className="form-control"
                          value={p_fname}
                          onChange={(event) => setp_fname(event.target.value)}
                          required 
                        />

{errors.p_fname && (
      <span className="text-danger">{errors.p_fname}</span>
    )}
                      </div>

          
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nom de famille</label>
                        <input
                          type="text"
                          className="form-control"
                          value={p_lname}
                          onChange={(event) => setp_lname(event.target.value)}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">E-mail</label>
                        <input
                          type="email"
                          className="form-control"
                          value={p_email}
                          onChange={(event) => setp_email(event.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Mot de passe</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(event) =>
                            setpassword(event.target.value)
                          }
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Confirmez le mot de passe</label>
                        <input
                          type="password"
                          className="form-control"
                          value={cpassword}
                          onChange={(event) =>
                            setcpassword(event.target.value)
                          }
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Profession</label>
                        <input
                          type="text"
                          name="datepicker"
                          className="datepicker-default form-control"
                          value={p_occupation}
                          onChange={(event) =>
                            setp_occupation(event.target.value)
                          }
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nombre CIN</label>
                        <input
                          type="text"
                          className="form-control"
                          value={cin}
                          onChange={(event) => setCin(event.target.value)}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Genre</label>
                        <select
                          className="form-control"
                          value={p_gender}
                          onChange={(event) =>
                            setp_gender(event.target.value)
                          }
                        >
                          <option value="Gender">Genre</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Numéro de téléphone</label>
                        <input
                          type="text"
                          className="form-control"
                          value={p_phone}
                          onChange={(event) =>
                            setp_phone(event.target.value)
                          }
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Date</label>
                        <input
                          type="date"
                          className="form-control"
                          value={dateDeNes}
                          onChange={(event) =>setdateDeNes(event.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Adresse</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          value={p_address}
                          onChange={(event) =>
                            setp_address(event.target.value)
                          }
                          required 
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group fallback w-100">
                        <input
                          type="file"
                          className="dropify"
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" className="btn btn-primary">
                      Enregistrer
                      </button>
                      <button type="submit" className="btn btn-light">
                      Annuler
                      </button>
                    </div>
                  </div>
                </form>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ParentAdd;
