import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './scss/_header.scss';
import './style.css';
import './login/login.css';
import log from './logo center.png'

export default function StudentProfile() {
  const navigate = useNavigate(); 
  const tokenExists = localStorage.getItem('token');

  if (!tokenExists) {
    navigate('/');
  }
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/students/${id}`);
        setStudent(response.data);
      } catch (error) {
        console.log('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, [id]);


 
 
  const handleLogout = () => { 
    // Clear any stored tokens or user data 
    // ... 
    localStorage.removeItem('token'); 
    // Navigate to the login page 
     
    navigate('/'); 
  }; 

  if (student === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
          <header className="container-fluid menu-head py-3">
    
    <nav>
      <Navbar className="navbar-border text-center" expand="lg" >
         <Link className='logo'><img src={log} alt="" /></Link>
         
              <Navbar.Toggle />
              <Navbar.Collapse>
                  <Nav className='c'>        
                   <Link className='c1  n' to='/'>Accueil</Link>
                   <Link className='c1 n ' to='/about'>À propos de </Link>
                   <Link className='c1 n ' to={`/Profile/${id}`}>Profil</Link>
                   <input type='button' onClick={handleLogout} className='btn btn-secondary m-3' value='Se Déconnecter'/>
                   </Nav>
              </Navbar.Collapse>
       </Navbar>
    </nav>
  </header>
  <br/><br/><br/><br/> <br/><br/><br/>
  
  <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card text-center transparent-card">
        <div style={{ marginTop: '10px', overflow: 'hidden' }}>
          <img src={student.s_image} className="card-img-top mx-auto" alt="" style={{ height: '150px', width: 'auto' }} />
        </div>
        <div className="card-body">
          <h3 className="card-title title">Étudiant</h3>
          <p className="card-text">Page d'information de l'étudiant dans le Centre franquicia privè</p>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
              <span className="fw-bold">Pin Masare:</span>
              <strong className="information">{student.pin_Masare}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="fw-bold">Prénom:</span>
              <strong className="information">{student.s_fname}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="fw-bold">Nom De Famille:</span>
              <strong className="information">{student.s_lname}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="fw-bold">Nom Du Père:</span>
              <strong className="information">{student.father_name}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="fw-bold">Date De Naissance:</span>
              <strong className="information">{student.date_nessance}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="fw-bold">Classe:</span>
              <strong className="information">{student.class}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="fw-bold">Genre:</span>
              <strong className="information">{student.s_gender}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span className="fw-bold">Téléphone Mobile:</span>
              <strong className="information">{student.s_phone}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>



          {/* <!-- Services Section End --> */}
          <section className="services-section pt-5">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="section-title text-center">
                              <h2 className='cc'>Droit interne de centre </h2>
                          </div>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-lg-4 col-sm-6">
                          <div className="service-item Droit ">
                              <h4 style={{color: "orange" , fontWeight:"bold"}}>Règles de conduite</h4>
                              <p style={{ fontWeight:"bold"}}> Les étudiants doivent adopter un comportement respectueux envers les enseignants, le personnel administratif, les autres étudiants et les locaux du centre scolaire.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="service-item">
                              <h4  style={{color: "orange" , fontWeight:"bold"}}>Utilisation des équipements et des locaux</h4>
                              <p style={{ fontWeight:"bold"}}>Les étudiants sont tenus de faire un usage responsable des équipements et des locaux du centre scolaire. Toute détérioration volontaire ou négligente des équipements ou des locaux fera l'objet de sanctions disciplinaires. </p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="service-item">
                              <h4 style={{color: "orange" , fontWeight:"bold"}}>Tenue vestimentaire</h4>
                              <p style={{ fontWeight:"bold"}}> Les étudiants doivent se conformer à une tenue vestimentaire appropriée, propre et décente. Les tenues provocantes, offensantes ou contraires aux valeurs éthiques du centre scolaire ne sont pas autorisées.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="service-item">
                              <h4 style={{color: "orange" , fontWeight:"bold"}}>Respect le Temps</h4>
                              <p style={{ fontWeight:"bold"}}>Tout acte de violence physique ou verbale, de harcèlement, de discrimination ou de vandalisme est strictement interdit.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="service-item">
                              <h4 style={{color: "orange" , fontWeight:"bold"}}>Comportement et discipline </h4>
                              <p style={{ fontWeight:"bold"}}>Les étudiants doivent respecter les règles de politesse et de courtoisie en tout temps.Les actes de violence, d'intimidation, de harcèlement ou de discrimination sont strictement interdits.</p>
                          </div>
                      </div>
                      <div className="col-lg-4 col-sm-6">
                          <div className="service-item">
                             <h4 style={{color: "orange" , fontWeight:"bold"}}>Assiduité et ponctualité </h4>
                              <p style={{ fontWeight:"bold"}}> En cas d'absence, les étudiants doivent fournir un justificatif dans les délais spécifiés par le centre .</p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          


<footer className="footer-section">
<div className="container">
    <div className="footer-text">
        <div className="row">
            <div className="col-lg-4">
                <div className="ft-about">
                <div className="ft-contact">
                    <h6>Contact </h6>
                    <ul className='p-0'>
                        <li>06-00-30-49-23</li>
                        <li>centre.franquicia.prive@gmail.com</li>
                        <li>Q.Gzenaya Lot 5637 Etage N°5 TANGER</li>
                    </ul>
                </div>

                    <div className="fa-social">
                        <a href="https://www.facebook.com/CentreFranquicia?mibextid=ZbWKwL"><i className="fa fa-facebook"></i></a>
                        <a href="06-75-79-43-90"><i className="fa fa-whatsapp"></i></a>
                        <a href="https://instagram.com/centro_franquicia?igshid=NTc4MTIwNjQ2YQ=="><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
            <div className="ft-contact">
                    <h6>Pages</h6>
                    <ul className='p-0 '>
                        <a href="/src/Components/Home.js" className='footer-link'>Accueil</a><br/>
                        <a href="/src/Components/Home.js" className='footer-link'>About</a>
                    </ul>
                   </div>
            </div>
            <div className="col-lg-3 offset-lg-1">
                <div className="ft-newslatter">
                    <h6>NOUVEAU DERNIER</h6>
                    <p>Recevez les dernières mises à jour et offres.</p>
                    <form action="#" className="fn-form">
                        <input type="text" placeholder="Email" />
                        <button type="submit"><i className="fa fa-send"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

</footer>
    </div>
  );
}
