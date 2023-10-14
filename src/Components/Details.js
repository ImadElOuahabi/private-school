import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import "./scss/_header.scss";
import "./scss/_home.scss";
import "./scss/about.scss";
import "./details.css";
import profil2 from "./img/concores.png";

export default function Affichage() {
  return (
    <>
    <header className="container-fluid menu-head py-3">
    <nav>
          <Navbar className="navbar-border" expand="lg">
            <Link className="logo">
              <img
                src="images/WhatsApp_Image_2023-05-12_at_4.33.54_PM-removebg-preview.png"
                alt=""
              />
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="c">
                <Link className="c1 active n" to="/">
                  Accueil
                </Link>
                <Link className="c1 n " to="/about">
                  À propos de{" "}
                </Link>
                <Link to="/" className="btn btn-secondary m-3 mx-2">
                  {" "}
                  log out{" "}
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </nav>
    </header>
      <body>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <div className="cream-bg">
            <div className="container">
                <div className="row g-5 justify-content-evenly">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-6 col-md-5">
                                    <img src={profil2} className="card-img  mb-5 w-100 img-fluid rounded" alt="profil1" />
                                </div>
                                <div className="col-6 col-md-7 ">
                                    <div className="card-body d-flex flex-colum">
                                        <div className="h-100">
                                            <h4 className="card-title mb-4"> Ahmed ALAOUI </h4>
                                            <div className="card-title">
                                                <ul className="list-group list-group-flush mb-5 mx-auto">
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> Pin Masare : </span>
                                                        <strong className='card-text'>P65473</strong>
                                                    </li>
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> Name father : </span>
                                                        <strong className='card-text'>Younnes</strong>
                                                    </li>
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> Enroll year : </span>
                                                        <strong className='card-text'>2023</strong>
                                                    </li>
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> Date naissance : </span>
                                                        <strong className='card-text'>2002/05/05</strong>
                                                    </li>
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> Class : </span>
                                                        <strong className='card-text'>M4</strong>
                                                    </li>
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> Gender: </span>
                                                        <strong className='card-text'>Homme</strong>
                                                    </li>
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> Phone : </span>
                                                        <strong className='card-text'>0735642189</strong>
                                                    </li>
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> Academic year : </span>
                                                        <strong className='card-text'>Centre</strong>
                                                    </li>
                                                    <li className='list-group-item px-0 mb-2 d-flex justify-content-between'>
                                                        <span className="card-text"> id year : </span>
                                                        <strong className='card-text'>204</strong>
                                                    </li>
                                                </ul>
                                                <div>
                                                    <Link to="/Affichage" className="btn btn-primary">Retourner</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
      </body>

      {/* <!-- Services Section End --> */}
      <section className="services-section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
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
      {/*  footer start */}
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
    
      {/*  footer end */}
    </>
  );
}
