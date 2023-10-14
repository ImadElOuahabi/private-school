import React, { useState } from 'react';
import { useEffect} from 'react';
import {useNavigate } from "react-router-dom";
import Header from '../copmporent/Header';
import Sidebar from '../copmporent/Sidebar';
function AddProfessorForm() {
  
  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }
  
  const [e_CIN, setE_CIN] = useState('');
  const [code_CNSS, setCode_CNSS] = useState('');
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
  if (password !== cpassword){
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
  
      const response = await fetch('http://localhost:8000/api/employes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
             e_CIN:e_CIN,
             code_CNSS:code_CNSS,
             e_fname:e_fname,
             e_lname:e_lname,
             e_address:e_address,
             e_phone:e_phone,
             e_email:e_email,
             password:password,
             e_image:uploadData.imageUrl,
             city:city,
             state:state,
             type:cc,
             e_date_nessance:e_date_nessance,
             e_gender:e_gender,
             id_mat:id_mat,
        }),
      });

  
      const data = await response.json();
      if (response.ok) {
        setMessage('Professeur créé avec succès');
        console.log(data);
        alert(message);
        navigate('/All-Professors')
        setE_CIN('')
        setCode_CNSS('')
        setcpassword('')
        setE_gender('')
        setE_date_nessance('')
        setType('')
        setState('')
        setCity('')

        setPassword('')

        setE_email('')
        setE_phone('')
        setE_lname('')
  
        setE_fname('')



      } else {
        setError('Erreur lors de la création Professeur');
        console.log('error');
        alert(message);

      }
    } catch (error) {
      console.error(error);
      setError('Erreur lors de la création Professeur');
      console.log('Erreur lors de la création Professeu');
      alert(message);
    }

  }

  };




  const [nivo, setnivo] = useState([]);
  useEffect(() => {
    {
      fetch('http://localhost:8000/api/years')
        .then(response => response.json())
        .then(data => setnivo(data))
        .catch(error => console.error(error));
    }
  }, []);


  const [id_mat, setId_mat] = useState('');
  const [mateir, setmateir] = useState([]);
  useEffect(() => {
    {
      fetch('http://localhost:8000/api/matieres')
        .then(response => response.json())
        .then(data => setmateir(data))
        .catch(error => console.error(error));
    }
  }, []);


 
  const [nh,setMatts] = useState([]);
  
  useEffect(() => {
    if (type) {
      fetch(`http://localhost:8000/api/selecte2/${type}`)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            setMatts(data);
          } else if (data && Array.isArray(data.matieres)) {
            setMatts(data.matieres);
          } else {
            setMatts([]);
          } 
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }, [type]);



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
              <h4>Ajouter un professeur</h4>
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
                <a href="javascript:void(0);">Ajouter professeur</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-xxl-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Informations de base</h5>

                {message && <div>{message}</div>}
                       {error && <div>{error}</div>}
              </div>

              <div className="card-body">

                      
                <form onSubmit={handleSubmit}>
                  <div className="row">



                  <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nomber CIN</label>
                        <input
                          type="text"
                          className="form-control"
                          value={e_CIN} 
                          onChange={(e) => setE_CIN(e.target.value)}
                          required 
                        />
                      </div>
                    </div> 
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Code CNSS</label>
                        <input
                          type="text"
                          className="form-control"
                          value={code_CNSS} 
                          onChange={(e) => setCode_CNSS(e.target.value)} 
                          required 
                        />
                      </div>
                    </div>




                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Prénom</label>
                        <input
                          type="text"
                          className="form-control"
                          value={e_fname} 
                          onChange={(e) => setE_fname(e.target.value)}
                          required 
                        />


                      </div>
                    </div>


                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nom de famille</label>
                        <input
                          type="text"
                          className="form-control"
                          value={e_lname} 
                          onChange={(e) => setE_lname(e.target.value)}
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
                          value={e_email} 
                          onChange={(e) => setE_email(e.target.value)}
                          
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
                          onChange={(e) => setPassword(e.target.value)}
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
                        <label className="form-label">State</label>
                        <input
                          type="text"
                          name="datepicker"
                          className="datepicker-default form-control"
                          value={state} 
                          onChange={(e) => setState(e.target.value)}
                          required 
                        />
                      </div>
                    </div>
                   
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Genre</label>
                        <select
                        className="form-control"
                          value={e_gender} 
                          onChange={(e) => setE_gender(e.target.value)}
                        >
                          <option value="Gender">Genre</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Numéro de portable</label>
                        <input
                          type="text"
                          className="form-control"
                          value={e_phone} 
                          onChange={(e) => setE_phone(e.target.value)}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Date de nessance</label>
                        <input
                          type="date"
                          className="form-control"
                          value={e_date_nessance} 
                          onChange={(e) => setE_date_nessance(e.target.value)}
                        />
                      </div>
                    </div>



                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Ville</label>
                        <input
                          type="text"
                          className="form-control"
                          value={city} 
                          onChange={(e) => setCity(e.target.value)}
                          required 
                        />
                      </div>
                  </div>



                    <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Classe</label>
                    <select 
                    className="form-control"
                    as="select"
                    value={type}
                   
                    onChange={(event) => {
                      setType(event.target.value);
                      const selectedIndex = event.target.selectedIndex;
                      const selectedOption = event.target.options[selectedIndex];
                      setcc(selectedOption.text);
                    }}
                    >
                      <option >__ sélectionner __</option>
                            {nivo.map(mat => (
                        <option key={mat.id_year} name={mat.name_year} value={mat.id_year}>{mat.name_year}</option>
                      ))}
                    </select>
                  </div>
                </div>


                    <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Matières</label>
                    <select 
                    className="form-control"
                    as="select"
                    value={id_mat}
                    onChange={(event) => setId_mat(event.target.value)}
                    
                    >
                      <option >__ sélectionner __</option>
                            {nh.map(mat => (
                        <option key={mat.id_mat} value={mat.id_mat}>{mat.LibelleMat}</option>
                      ))}
                    </select>
                  </div>
                </div>


           

              

                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Adresse</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          
                          value={e_address} 
                          onChange={(e) => setE_address(e.target.value)}
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
                      <button type="reset" className="btn btn-light">
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

export default AddProfessorForm;
