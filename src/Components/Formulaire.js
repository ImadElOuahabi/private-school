import React, { useEffect, useState } from "react";


import axios from "axios";  
import { Link, useParams } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import logo from './logo center.png'


import "./scss/_header.scss";
import "./style.css";
import "./scss/_home.scss";
import "./scss/about.scss";
import { useNavigate } from 'react-router-dom'; 

export default function Formulaire() {

  const navigate = useNavigate(); 
  const tokenExists = localStorage.getItem('token');
  if (!tokenExists) {
    navigate('/');
  }

  const handleLogout = () => { 
    localStorage.removeItem('token'); 
    navigate('/'); 
  };

  const {idParent,idPar} = useParams()
  const [students, setStudents] = useState([]);


 






  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/parents/${idParent}/students`);
        setStudents(response.data);
        console.log(response.data)
        console.log(students)
        
        

      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, [idParent]);


  const [pin_Masare, setpin_Masare] = useState('')
  const [s_image,sets_image] = useState('')
  const [password, setpassword] = useState('')
  const [passwordco, setpasswordco] = useState('')
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


  const [info, setinfo] = useState({});
  useEffect(() => {
  if(idParent)  {
      fetch(`http://localhost:8000/api/select/${idParent}`)
        .then(response => response.json())
        .then(data => setinfo(data))
        .catch(error => console.error(error));
    }
  }, [idParent]);

console.log(idParent)
console.log(info.p_fname)
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
  
if(passwordco !== password){

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
          id_parent: idPar,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to add student');
      }
  
      const data = await response.json();
      console.log(data);
      setid_sss(data.student_id);
  
      alert('Étudiant ajouté' + data.s_fname + 'avec succès' );
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
            window.history.back();
          }
        }

        // Do something with the response
      } catch (error) {
        console.error(error);
        alert('Ghoisir un autre matériau !!!!!!!!');
      }
    };
    const handleGoBack = () => {
      window.history.back();
    };
  

  return (
    <>
      <header className="container-fluid menu-head py-3">
      <nav>
        <Navbar className="navbar-border text-center" expand="lg" >
        <Link className='logo'><img src={logo} alt="" /></Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='c'>        
                     <Link className='c1 active n' to='/'>Accueil</Link>
                     <Link className='c1 active n' to='/about'>À propos de</Link>
                     <Link className='c1 active n' to={`/Parent/${idPar}`} >Profil</Link>
                     <Link to="/" className="btn btn-secondary m-3 mx-2"> Déconnecter</Link>
                    
                     </Nav>
                </Navbar.Collapse>
         </Navbar>
      </nav>
    </header>

    
    <body >
                  <br /><br /><br /><br /><br /><br />
 
          
      
 
<div className="container-fluid mt-5">
<div className="row m-4">
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
                    <label className="form-label">Nom</label>
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
                    required
                    />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">PIN Massare</label>
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
                            onChange={(event) => setpassword(event.target.value)}   />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Confirmez le mot de passe</label>
                    <input type="password" 
                    className="form-control"
                    value={passwordco}

                    onChange={(event) => setpasswordco(event.target.value)}   
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
                  <label className="form-label">CIN Parent</label>
                  <input type="text"
                        className="form-control" 
                        value={idParent}
                        onChange={(event) => setparent(event.target.value)}
                        required
                        />
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                    <label className="form-label">Name Parent</label>
                   
                        <input type="text" 
                        className="form-control"
                        value={info.p_fname+''+info.p_lname}
                        onChange={(event) => setinfo.p_fname+''+setinfo.p_lname(event.target.value)}
                        readOnly
                        required
                        />
                     
                  </div>
                </div>


                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="form-group">
                      {/* {<label className="form-label">Id Parent</label>} */}
                      <input
                        type="number"
                        className="form-control"
                        value={info.id_parent}
                        onChange={(event) => setinfo.id_parent(event.target.value)}
                        hidden
                      />
                    </div>
                </div>



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
                    <label className="form-label">Type de séance</label>
                    <select className="form-control"value={type} onChange={(event) => settype(event.target.value)}>
                      <option value="Gender">Type</option>
                      <option value="Individually">Individually</option>
                      <option value="Cllective">Cllective</option>
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
                      <option >__ select __</option>
                            {filer.map(ma => (
                        <option key={ma.id} value={ma.liby}>{ma.liby}</option>
                      ))}
                    </select>
                  </div>
                </div>


                <div className="col-lg-12 col-md-12 col-sm-12">
                 
                  <label className="btn btn-primary">
                  Ajouter une image
                                    <input type="file" onChange={handleInputChange}   style={{display: "none" }} />
                        </label>
                </div>
              
                <div className="col-lg-12 col-md-12 col-sm-12 m-4">
                  <button type="submit" className="btn btn-primary">Enregistrer</button>
                  {' '}
                  <button className="btn btn-light">Annuler</button>
                </div>
    

              </div>


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
                      <option >__ select __</option>
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
            <label className="form-label">Matière</label>
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

            
          </div>
        </div>
      </div>
    </div>
        
      </div>
  
</body>



      <br />
      <br />
      <br />
      <br />
          
      {/* <!-- Services Section End --> */}
      <section className="services-section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2 className='cc text-center'>Droit interne de centre </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item Droit ">
                                <h4 style={{color: "orange" , fontWeight:"bold"}}>Responsabilités financières</h4>
                                <p style={{ fontWeight:"bold"}}> Le père peut avoir l'obligation de payer les frais de scolarité et autres dépenses liées à l'éducation de son enfant dans le centre scolaire privé. Les modalités de paiement, les échéances et les politiques de remboursement peuvent être régies par des contrats ou des accords spécifiques</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <h4  style={{color: "orange" , fontWeight:"bold"}}>Participation et implication</h4>
                                <p style={{ fontWeight:"bold"}}>Le père peut avoir le droit d'être informé et de participer aux réunions, aux activités et aux événements organisés par le centre scolaire privé. Cela peut inclure des réunions parents-enseignants, des rencontres avec l'administration de l'école ou des événements sociaux. </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                                <h4 style={{color: "orange" , fontWeight:"bold"}}>Prise de décision</h4>
                                <p style={{ fontWeight:"bold"}}>Le père peut être impliqué dans la prise de décisions concernant l'éducation de son enfant, notamment en ce qui concerne les choix de programme scolaire, les activités parascolaires, les voyages scolaires, etc. Ces décisions peuvent être prises en concertation avec l'administration de l'école ou les enseignants.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

      {/* <!-- About Us Section Begin --> */}

      {/*  footer start */}
      <footer className="footer-section">
        <div className="container">
          <div className="footer-text">
            <div className="row">
              <div className="col-lg-4">
                <div className="ft-about">
                  <div className="ft-contact">
                    <h6>Contact </h6>
                    <ul className="p-0">
                      <li>06-00-30-49-23</li>
                      <li>centre.franquicia.prive@gmail.com</li>
                      <li>Q.Gzenaya Lot 5637 Etage N°5 TANGER</li>
                    </ul>
                  </div>

                  <div className="fa-social">
                    <a href="https://www.facebook.com/CentreFranquicia?mibextid=ZbWKwL">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="06-75-79-43-90">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                    <a href="https://instagram.com/centro_franquicia?igshid=NTc4MTIwNjQ2YQ==">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="ft-contact">
                  <h6>Pages</h6>
                  <ul className="p-0 ">
                    <a href="/src/Components/Home.js" className="footer-link">
                      Accueil
                    </a>
                    <br />
                    <a href="/src/Components/Home.js" className="footer-link">
                      About
                    </a>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1">
                <div className="ft-newslatter">
                  <h6>NOUVEAU DERNIER</h6>
                  <p>Recevez les dernières mises à jour et offres.</p>
                  <form action="#" className="fn-form">
                    <input type="text" placeholder="Email" />
                    <button type="submit">
                      <i className="fa fa-send"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/*  footer end */}
    </>
  );
}
