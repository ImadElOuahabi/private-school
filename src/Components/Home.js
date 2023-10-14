import React, { useState } from 'react'
import { Nav, Tab } from 'react-bootstrap';
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { BiTranslate } from 'react-icons/bi';
import Language from './img/language.png'
import Concores  from './img/concores.png'
import Niveaux  from './img/Niveaux.png'
import Primairecollége  from './img/Primairecollége.png'
import Lycée  from './img/Lycée.png'
import InformatiqueProgrammation  from './img/Informatique Programmation.png'
import "./scss/_header.scss"
import "./style.css"
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar } from 'react-bootstrap'
import "./scss/_home.scss";
function Home() {
    const navigaten = useNavigate();

    const user = localStorage.getItem('token') || '';


    const handleLogout = () => {
       
        localStorage.removeItem('token');
        navigaten('/');
      };

    return (
        <>
         <header className="container-fluid menu-head py-3 text-center">
      <nav>
      <Navbar className="navbar-border" expand="lg" >
      <Link className='logo'><img src="images/WhatsApp_Image_2023-05-12_at_4.33.54_PM-removebg-preview.png" alt="" /></Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='c'>        
                      <Link className='c1 n' to='/'>Accueil</Link>
                     <Link className='c1 n ' to='/about'>À propos de </Link>
                     <Dropdown className='c2' >
                     {!user ? (
               <Dropdown.Toggle className="btn btn-secondary "  id="dropdown-basic">
               Se Connecter
               </Dropdown.Toggle>


                ) : null}

                  
        {!user ? (
               <Dropdown.Menu >
               <Dropdown.Item href="/Slogin">étudiant</Dropdown.Item>
               <Dropdown.Item href="/Plogin">Parent</Dropdown.Item>
               <Dropdown.Item href="/Tlogin">Professeur </Dropdown.Item>
              <Dropdown.Item href="/Alogin">Administration</Dropdown.Item>
              </Dropdown.Menu>


                ) : null}


        {user && (
               <Dropdown.Toggle className="btn btn-secondary " onClick={() =>handleLogout()}  id="dropdown-basic">
               Se Déconnecter
               </Dropdown.Toggle>


                )}

                 
              </Dropdown>
                      </Nav>

                </Navbar.Collapse>
            </Navbar>
      </nav>
    </header>

            {/* Hero section Start */}
            <div className='hero-section'>
                <div className="main-container image">
                    <div className='row text-white justfiy-content-center align-items-center'>
                        <div className="col-12 col-md-7 hero-desc p-5">
                            <h1 className='mb-5 p-2'>Le Centre Scolaire est un site dédié à l'éducation et à l'apprentissage,<br/> offrant un large éventail de services et de ressources aux étudiants,<br/> aux enseignants et aux parents . <br/> <a href="#" className="btn about-btn">En savoir plus</a> </h1>
                        </div>
                    </div >
                </div >
            </div >
            {/* <!-- Services Section End --> */}
            <section className="services-section pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center">
                                <span>Ce que nous faisons</span>
                                <h2>Découvrez nos prestations</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                            <img  src={Language} alt=''className='icon'/>
                                <h4>Les langues</h4>
                                <p>Nous enseignons des langues français, anglais , Allemagne, Espagne avec une attestation a la fin de la formation .</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                            <img  src={Concores} alt=''className='icon'/>
                                <h4>Préparation des concours</h4>
                                <p>préparation au concours d'accès aux école supérieure</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                            <img  src={Niveaux} alt=''className='icon'/>
                                <h4>Les niveux</h4>
                                <p>Notre service comprend tous les niveaux : préscolaire et primaire et collége et lycée et faculté </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                            <img  src={Primairecollége} alt=''className='icon'/>
                                <h4>Primaire/collége</h4>
                                <p>classes Primaire Et collége tout les matiéres . </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                               <img  src={Lycée} alt=''className='icon'/>
                                <h4>Lycée </h4>
                                <p>classes lycée tout les matériaux pour toutes les branches .</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="service-item">
                            <img  src={InformatiqueProgrammation} alt=''className='icon'/>
                                <h4>Informatique /Programmation </h4>
                                <p>Notre service comprennent également du matiere programmation et informatique .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Services Section End --> */}
            <section className="about-section py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-6">
                            <div className="about-text">
                                <div className="section-title">
                                    <h2> Decription de Site Centre franquicia privè</h2><br/>
                                </div>
                                <p className="f-para">Un site web d'heures supplémentaires (Center of Excellence for Support) qui facilite le processus d'inscription des étudiants du centre par leur tuteur et présente les services fournis par le centre et les enseignants.</p>
                                <a href="/about" className="primary-btn about-btn">Read More</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-pic mt-5 mt-md-0">
                                <img src="images/photo1683907143.jpeg" alt="" srcset="" />
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
    )
}

export default Home