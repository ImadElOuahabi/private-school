import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./scss/_header.scss";
import "./scss/_home.scss";
import "./scss/about.scss";
import "./parent.css";
import profil3 from "./img/concores.png";
import logo from './logo center.png'
import { useNavigate } from 'react-router-dom'; 
export default function Affichage() {
  const navigate = useNavigate(); 
  const tokenExists = localStorage.getItem('token');
  if (!tokenExists) {
    navigate('/');
  }

  const handleLogout = () => { 
    localStorage.removeItem('token'); 
    navigate('/'); 
  };
  const {idPar} = useParams()

  const [parent, setParent] = useState(null);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/parents_show/${idPar}`);
        setParent(response.data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, []);

  if (!parent) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <header className="container-fluid menu-head py-3">
        <nav>
        <Navbar className="navbar-border text-center" expand="lg" >
        <Link className='logo'><img src={logo} alt="" /></Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="c">
                <Link className="c1  n" to="/">
                  Accueil
                </Link>
                <Link className="c1 n " to="/about">
                  À propos de
                </Link>
                <Link className='c1 active n' to={`/Parent/${idPar}`} >Profil</Link>
                <input type='button' onClick={handleLogout} className='btn btn-secondary m-3' value='Se Déconnecter'/>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
      </header>
      <body>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card text-center transparent-card">
            <div style={{ marginTop: '10px', overflow: 'hidden' }}>
              <img
                src={parent.p_image}
                className="card-img-top mx-auto"
                alt=""
                style={{ height: '150px', width: 'auto' }}
              />
            </div>
            <div className="card-body">
              <h3 className="card-title title">Parent</h3>
              <p className="card-text">Page d'information du parent dans le Centre franquicia privè</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">CIN:</span>
                  <strong className="information">{parent.p_CIN}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Prénom:</span>
                  <strong className="information">{parent.p_fname}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Nom De Famille:</span>
                  <strong className="information">{parent.p_lname}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Date De Naissance:</span>
                  <strong className="information">{parent.date_nessancee}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Genre</span>
                  <strong className="information">{parent.p_gender}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Adresse:</span>
                  <strong className="information">{parent.p_address}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Numéro De Téléphone</span>
                  <strong className="information">{parent.p_phone}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">E-mail</span>
                  <strong className="information">{parent.p_email}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
           
      </body>
      <br /><br /><br />
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
      <br />
      <br />
      <br />
      <br />
      <br />

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
