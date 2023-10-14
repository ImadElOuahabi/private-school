import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams , useNavigate } from 'react-router-dom';
import Header from '../copmporent/Header';
import Sidebar from '../copmporent/Sidebar';

function ParentEdit() {

  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }
  const {id} = useParams();
  const [parent, setParent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the parent data from the API
    fetch(`http://localhost:8000/api/parents/${id}`) // Replace "/api/parents/" with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setParent(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);

      

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

  const handleSubmitr = async (event) => {

  if (event) {
    event.preventDefault();
  }



  

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
  
      const response = await fetch(`http://localhost:8000/api/parents/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        p_image: uploadData.imageUrl,
        p_fname: parent.p_fname,
        p_lname: parent.p_lname,
        p_gender: parent.p_gender,
        p_occupation: parent.p_occupation,
        p_address: parent.p_address,
        p_phone: parent.p_phone,
        p_email: parent.p_email,
        date_nessancee: parent.date_nessancee,
        
      }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add parent');
      }
  
      const data = await response.json();
      console.log(data);
      alert('Parent éditer: ' );
      navigate('/all-parent')



    } catch (error) {
      console.error(error);
      alert('Une erreur s est produite lors du traitement de la demande');
    
  }


  }







  

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
              <h4>Modifier le parent</h4>
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
                <a href="javascript:void(0);">Modifier le Parent</a>
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
                <form onSubmit={handleSubmitr}>



               
                    
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Prénom</label>
                        <input
                          type="text"
                          className="form-control"
                          value={parent.p_fname}
                          onChange={e => setParent({ ...parent, p_fname: e.target.value })}
                        />
         </div>

          
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nom de famille</label>


                        
                         <input
                         type="text"
                         className="form-control"
                         value={parent.p_lname}
                         onChange={e => setParent({ ...parent, p_lname: e.target.value })}
                       />
                  
                      </div>                                                         
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">E-mail</label>
                        <input
                          type="email"
                          className="form-control"
                          value={parent.p_email}
                          onChange={e => setParent({ ...parent, p_email: e.target.value })}
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
                          value={parent.p_occupation}
                          onChange={e => setParent({ ...parent, p_occupation: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nombre CIN</label>
                        <input
                          type="text"
                          className="form-control"
                          value={parent.p_CIN}
                
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Genre</label>
                        <select
                          className="form-control"
                          value={parent.p_gender}
                          onChange={e => setParent({ ...parent, p_gender: e.target.value })}
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
                          value={parent.p_phone}
                          onChange={e => setParent({ ...parent, p_phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Date de nessance</label>
                        <input
                          type="date"
                          className="form-control"
                          value={parent.date_nessancee}
                          onChange={e => setParent({ ...parent, date_nessancee: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Adresse</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          value={parent.p_address}
                          onChange={e => setParent({ ...parent, p_address: e.target.value })}
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
                      Modifier
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

export default ParentEdit;
