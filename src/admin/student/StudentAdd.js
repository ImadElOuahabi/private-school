import React, { useState } from 'react';
import  { useEffect } from 'react';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import Header from '../copmporent/Header';
import Sidebar from '../copmporent/Sidebar';


function StudentAdd() {


  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }





  const [pin_Masare, setpin_Masare] = useState('')
  const [s_image,sets_image] = useState('')
  const [password, setpassword] = useState('')
  const [s_fname, sets_fname] = useState('')
  const [s_lname, sets_lname] = useState('')
  const [email,setemail] = useState('');
  const [ academic_year, setacademic_year] = useState(0)
  const [ date_nessance, setdate_nessance] = useState('')
  const [ s_gender, sets_gender] = useState('')
  const [ s_phone, sets_phone] = useState('')
  const [ classe, setclasse] = useState('')
  const [id_sss, setid_sss] = useState('')
  const [nameParent,setNameParent] = useState('');
  const [type,settype] = useState('');

  const [cpassword,setcpassword] = useState('');
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
  if(password !== cpassword) {
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
  
      const response = await fetch('http://localhost:8000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          pin_Masare: pin_Masare,
          password: password,
          s_image: uploadData.imageUrl,
          s_fname: s_fname,
          s_lname: s_lname,
          father_name: info.p_fname + ' ' + info.p_lname, // corrected concatenation
          date_nessance: date_nessance,
          class: mat,
          typeSeance: type,
          email: email,
          s_gender: s_gender,
          s_phone: s_phone,
          academic_year: academic_year,
          id_parent: info.id_parent,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add student');
      }
  
      const data = await response.json();
      console.log(data);
      setid_sss(data.student_id);
  
      alert('Étudiant ajouté: ' + data.s_fname);
      
    } catch (error) {
      console.error(error);
      alert('An error occurred while processing the request');
    }
  }
  };
  





  const [mat,setmat] = useState('');
  const [filer, setfiler] = useState([]);
  useEffect(() => {
    {
      fetch('http://localhost:8000/api/mate')
        .then(response => response.json())
        .then(data => setfiler(data))
        .catch(error => console.error(error));
    }
  }, []);
  



  const [parent,setparent] = useState('');




  


  const [info, setinfo] = useState({});
  useEffect(() => {
  if(parent)  {
      fetch(`http://localhost:8000/api/select/${parent}`)
        .then(response => response.json())
        .then(data => setinfo(data))
        .catch(error => console.error(error));
    }
  }, [parent]);



  








  const [fil, setfil] = useState([]);

  useEffect(() => {
   if(mat) {
      fetch(`http://localhost:8000/api/matbb/${mat}`)
        .then(response => response.json())
        .then(data => setfil(data))
        .catch( 
          console.log('error'));
    }
  }, [mat]);



  
  const [selectedCity, setSelectedCity] = useState('');
  const [nh,setMatts] = useState([]);
  
  useEffect(() => {
    if (selectedCity) {
      fetch(`http://localhost:8000/api/select002/${selectedCity}`)
        .then(response => response.json())
        .then(data => {
          if (Array.isArray(data)) {
            setMatts(data);
          } else {
            setMatts([]);
          }
        })
        .catch(error => {
          console.log('Error:', error);
        });
    }
  }, [selectedCity]);







  const [step, setStep] = useState(1);



  const handleNext = (event) => {
      event.preventDefault();
      switch (step) {
        case 1:
         
            setStep(2);
            handleSubmit(event);
                
          break;
        case 2:
         
            
          
          break;
          default:
            break;
         
      }
    };


    const handlePrev = () => {
      setStep(step - 1);
    };

    const [selectedSubjects, setSelectedSubjects] = useState('');
  

    const handleSubmit2 = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('http://localhost:8000/api/objects', {
          id_mat: selectedSubjects, // Assuming you want to pass the selected subjects as an array
          student_id: id_sss,
        });
        if (response.status >= 200 && response.status < 300) {
          console.log(response.data);
          
          const confirmResult = window.confirm('Le matériau a été ajouté avec succès. Que souhaitez-vous faire ?');
    
          if (confirmResult) {
            alert('veuillez choisir un autre matériau');
          } else {
            navigate('/all-students')
          }
        }

      } catch (error) {
        console.error(error);
        alert('Cet article a été ajouté par vous, veuillez ajouter un autre article');
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
      {/* row */}
      <div className="container-fluid">
        <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
            <div className="welcome-text">
              <h4>Ajouter un étudiant</h4>
            </div>
          </div>


          
          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
              <li className="breadcrumb-item active"><a href="javascript:void(0);">Étudiants</a></li>
              <li className="breadcrumb-item active"><a href="javascript:void(0);">Ajouter un étudiant</a></li>
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





          {step === 1 && (  





            
            <form onSubmit={handleNext}>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Prénom</label>
                    <input type="text" 
                    className="form-control" 
                    value={s_fname} 
                    onChange={(event) => sets_fname(event.target.value)}
                    required 
                    
                    />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Nom de famille</label>
                    <input type="text" 
                    className="form-control" 
                    value={s_lname}  
                    onChange={(event) => sets_lname(event.target.value)} 
                    required 
                    
                    />
                  </div>


                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">E-mail</label>
                    <input type="text" 
                    className="form-control"
                    value={email}  
                    onChange={(event) => setemail(event.target.value)}
               
                    /> 
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">PIN Masare</label>
                    <input        
                      name="datepicker"
                      className="datepicker-default form-control"
                      id="datepicker"
                      value={pin_Masare} 
                      onChange={(event) => setpin_Masare(event.target.value)}
                      required 

                    />
                  </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Mot de pass</label>
                    <input type="password" 
                            className="form-control"
                            value={password}  
                            onChange={(event) => setpassword(event.target.value)}
                            required 
                            
                            />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Confirmez le mot de passe</label>
                    <input type="password" 
                    className="form-control" 
                    
                    value={cpassword}  
                    onChange={(event) => setcpassword(event.target.value)}
                    required 
                    
                    />
                  </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Genre</label>
                    <select className="form-control" value={s_gender}   onChange={(event) => sets_gender(event.target.value)}>
                      <option value="Gender">Genre</option>
                      <option value="Male">Male</option>
                      <option value="Female" >Female</option>
                    </select>
                  </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Date de naissance</label>
                    <input
                      type='date'
                      name="datepicker"
                      className="datepicker-default form-control"
                      id="datepicker1"
                      value={date_nessance}
                      onChange={(event) => setdate_nessance(event.target.value)}
                      required 
                    />
                  </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Numéro de téléphone</label>
                    <input type="text" 
                    className="form-control"
                    value={s_phone}  
                    onChange={(event) => sets_phone(event.target.value)} 
                    required 
                    
                    />
                  </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                  <label className="form-label">Numéro CIN du parent</label>
                  <input type="text"
                        className="form-control" 
                        value={parent}
                        onChange={(event) => setparent(event.target.value)}
                        
                        required 
                        
                        />

                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Nom Parent</label>
                   
                        <input type="text" 
                        className="form-control"
                        value={info.p_fname+''+info.p_lname}
                        onChange={(event) => setinfo.p_fname+''+setinfo.p_lname(event.target.value)}
                       
                        />
                     
                  </div>
                </div>


                
                    
                     
                      <input
                        type="number"
                        className="form-control"
                        value={info.id_parent}
                        onChange={(event) => setinfo.id_parent(event.target.value)}
                        hidden
                      />
                 



                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Année académique</label>
                    <input type='number' 
                    className="form-control"
                    value={academic_year}
                    onChange={(event) => setacademic_year(event.target.value)}
                    required 
                    />
                  </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Type de classe</label>
                    <select className="form-control"value={type} onChange={(event) => settype(event.target.value)}>
                      <option value="Gender">Type</option>
                      <option value="Male">Classe individuel</option>
                      <option value="Female">Classe collectif</option>
                    </select>
                  </div>
                </div>



                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Spécialité</label>
                    <select 
                    className="form-control"
                    as="select"
                    value={mat}
                    onChange={(event) => setmat(event.target.value)}
                    
                    >
                      <option >__ sélectionner __</option>
                            {filer.map(ma => (
                        <option key={ma.id} value={ma.liby}>{ma.liby}</option>
                      ))}
                    </select>
                  </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group fallback w-100">
                    <input type="file" className="dropify"  onChange={handleInputChange}    />
                  </div>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">Enregistrer</button>
                  <button className="btn btn-light">Annuler</button>
                </div>
    

              </div>

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            </form>

)}
         


         {step === 2 && (  





               
          

            <form onSubmit={handleSubmit2}>

  
            <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                  <label className="form-label">Année scolaire</label>
                    <select
                      className="form-control"
                      value={selectedCity}
                    onChange={(event) => setSelectedCity(event.target.value)}
                    >
                      <option >__ sélectionner __</option>
                      {fil.map(city => (
                        <option key={city.id_year} value={city.name_year}>
                          {city.name_year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="form-group">
            <label className="form-label">Matiéres </label>
            {nh.map(ci => (
              <ul key={ci.id}>
                <input
                  type="checkbox"
                  value={ci.id_mat}
                  name=""
                  id=""
                  onChange={(event) =>  setSelectedSubjects(event.target.value)
                  }
                />
                <label htmlFor="">{ci.LibelleMat}</label>
              </ul>
            ))}
          </div>
        </div>

              
                <div className="col-lg-12 col-md-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">Enregistrer</button>
                  <button onClick={handlePrev}  className="btn btn-light">Annuler</button>
                </div>

            </form>

           
)}

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            
          </div>
        </div>
      </div>
    </div>
        
      </div>
    </div>
    </div>
  );
}

export default StudentAdd;
