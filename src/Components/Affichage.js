import React, { useEffect, useState } from "react";


import axios from "axios";  
import { Link, useParams } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; 
import logo from './logo center.png'


import "./scss/_header.scss";
import "./style.css";
import "./scss/_home.scss";
import "./scss/about.scss";


export default function Affichage() {
  const navigate = useNavigate(); 
  const tokenExists = localStorage.getItem('token');


  if (!tokenExists) {
    navigate('/');
  }


  const {idPar,idParent} = useParams()
  const [students, setStudents] = useState([]);


  // Function to handle delete button click






  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/parents/${idPar}/students`);
        setStudents(response.data);
        console.log(response.data)
        console.log(students)
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
  }, [idPar]);

  
  const handleDelete = async (studentId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this student?');
    if (!confirmDelete) {
      return; // Cancel the deletion if the user clicked "Cancel"
    }

    try {
      const response = await axios.delete(`http://localhost:8000/api/students/${studentId}`);
      if (response.status === 204) {
        console.log('Student deleted successfully');
        window.location.reload(); // Refresh the page
        // Perform any additional actions if needed
      } else if (response.status === 404) {
        console.log('Student not found');
        // Handle the case where the student with the specified ID was not found
      } else {
        console.log('An error occurred');
        // Handle other status codes or error cases
      }
    } catch (error) {
      console.error('Error:', error);
      // Handle the error case
    }
  };


  const handleLogout = () => { 
    localStorage.removeItem('token'); 
    navigate('/'); 
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
   
          
  <div className="container-fluid" >
    <div className="row">
      <div className="col-lg-12">
        <div className="card">
        <div className="card-header d-flex justify-content-between align-items-center">
          <h4 className="card-title">Liste de tous les étudiants</h4>
          <a href={`${idParent}/Formulaire`} className="btn btn-primary">
          + Ajouter Nouveau
          </a>
          </div>

          <div class="card-body  m-4">
            <div class="table-responsive">
              <table class="table table-bordered table-hover">
                <thead class="bg-warning text-white">
                  <tr>
                    <th>PIN Masare</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Image</th>
                    <th>Pin Masare</th>
                    <th>Classe</th>
                    <th>année scolaire</th>
                    <th>type Séance</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((item, index) => {
                    return (
                      <tr key={item.student_id}>
                        <td>{item.pin_Masare}</td>
                        <td>{item.s_fname}</td>
                        <td>{item.s_lname}</td>
                        <td>
                          <img src={item.s_image} alt="Student" style={{ height: '100%', width: '100px' }}/>
                        </td>
                        <td>{item.pin_Masare}</td>
                        <td>{item.class}</td>
                        <td>{item.academic_year}</td>
                        <td>{item.typeSeance}</td>
                        <td class="text-center">

                          <button onClick={() => handleDelete(item.student_id)} class="btn btn-danger m-1">
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <hr />
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
                            <div className=" section-title text-center">
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
