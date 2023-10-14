import React from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useNavigate, Link, NavLink } from 'react-router-dom';
import "./scss/_home.scss";
import "./scss/about.scss";
import "./scss/_header.scss";
import "./style.css";
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from 'react-bootstrap';

export default function About() {
  const navigate = useNavigate();
  const user = localStorage.getItem('token') || '';

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div>
         <header className="container-fluid menu-head py-3">
      <nav>
      <Navbar className="navbar-border text-center" expand="lg" >
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

             <div className='img-section'>
             <div className="main-container image" >
                    <div className='row text-white justfiy-content-center align-items-center'>
                        <h1 className='img-title'>À propos de nous</h1>
                       
                    </div >
                </div >
            </div >
             {/* <!-- Services Section End --> */}
             <section className="about-section py-5">
                <div className="container">
                <div className="section-title text-center">
                                <span>Ce que nous faisons</span>
                                <h2 className='title'><b>À propos de nous </b></h2>
                            </div>
                            <br/>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-12">
                            <div className="about-text">
                            <p className="f-para"><b>Le Centre franquicia privè</b> est dédié à fournir un environnement éducatif et stimulant pour les heures supplémentaires. Nous sommes spécialisés dans l'enseignement des langues, notamment le français, l'anglais, l'allemand et l'espagnol. Nos programmes sont conçus pour offrir aux étudiants une solide base linguistique, ainsi qu'une attestation à la fin de leur formation.

En plus de nos cours de langues, nous offrons également une préparation au concours d'accès aux écoles supérieures. Nous comprenons l'importance de se préparer adéquatement pour ces examens et nous nous engageons à fournir les ressources nécessaires pour aider nos étudiants à réussir.

Notre centre accueille des élèves de tous les niveaux, de la petite enfance à la faculté. Nous proposons des programmes adaptés à chaque étape de l'éducation, y compris la préscolaire, le primaire, le collège et le lycée. Notre équipe pédagogique expérimentée est qualifiée pour répondre aux besoins spécifiques de chaque élève et les aider à atteindre leurs objectifs académiques.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="about-section py-5">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                            <div className="about-pic mt-5 mt-md-0">
                                <img src="/images/about.jpg" alt="" srcset="" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-text">
                                <p className="f-para">Nous invitons les parents intéressés à visiter notre site web pour obtenir plus d'informations sur nos services, nos tarifs et les modalités d'inscription. Si vous avez des questions supplémentaires ou si vous souhaitez planifier une visite de notre centre, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider et répondre à toutes vos préoccupations.

Nous comprenons que vous pourriez avoir des questions plus spécifiques concernant nos heures supplémentaires. Nous vous encourageons à les poser afin que nous puissions vous fournir les informations dont vous avez besoin. Chez Centre franquicia privè, nous nous efforçons de créer un environnement d'apprentissage positif et favorable où chaque étudiant peut s'épanouir académiquement et atteindre son plein potentiel.</p>

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
    </div>
  )
}
