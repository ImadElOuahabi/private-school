import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

import './scss/_header.scss';
import './style.css';
import './login/login.css';
import logo from './logo center.png'

export default function Student() {
  const navigate = useNavigate(); 
  const tokenExists = localStorage.getItem('token');


  if (!tokenExists) {
    navigate('/');
  }
  const { id } = useParams();
  const [matieres,setMatieres] = useState([])
  const [exams,setExams] = useState([])


  useEffect(() => {
    // Fetch the matieres data from your first API
    const fetchMatieres = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/students/${id}/matieres`);
        setMatieres(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMatieres();
  }, []);

  const fetchTeacherData = async (matiereId) => {
    try {
      const response = await axios.get(`http://localhost:8000/api/employees/search/${matiereId}`);
      const teacherData = response.data;
      const updatedMatieres = matieres.map(matiere => {
        if (matiere.id_mat === matiereId) {
          return {
            ...matiere,
            teacherName: `${teacherData.e_fname} ${teacherData.e_lname}`,
            teacherImage: teacherData.e_image
          };
        }
        return matiere;
      });
      setMatieres(updatedMatieres);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Call the fetchTeacherData function for each matiere
    matieres.forEach(matiere => {
      fetchTeacherData(matiere.id_mat);
    });
  }, [matieres]);


axios.get(`http://localhost:8000/api/exams/${id}`)
  .then(response => {
    // Process the response data
    setExams(response.data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });





 
 
  const handleLogout = () => { 
    localStorage.removeItem('token'); 
    navigate('/'); 
  }; 


  return (
    <div>
          <header className="container-fluid menu-head py-3">
    
    <nav>
      <Navbar className="navbar-border text-center" expand="lg" >
         <Link className='logo'><img src={logo} alt="" /></Link>
         
              <Navbar.Toggle />
              <Navbar.Collapse>
                  <Nav className='c'>        
                   <Link className='c1 active n' to='/'>Accueil</Link>
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
    <h2 className="text-center mb-4" style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 600, color: 'orange' }}>Matières que vous étudiez</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover custom-table">
          <caption className="text-center font-weight-bold mb-4"> </caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nome de Matière</th>
              <th scope="col">Image de Matière</th>
              <th scope="col">Professeur</th>
              <th scope="col">Image de Professeur</th>
            </tr>
          </thead>
          <tbody>
            {matieres.map((matiere) => (
              <tr key={matiere.id_mat}>
                <td>{matiere.LibelleMat}</td>
                <td>
                  <img
                    src={matiere.image_m}
                    alt={matiere.LibelleMat}
                    className="img-thumbnail"
                    style={{ height: '70px' }}
                  />
                </td>
                <td>{matiere.teacherName}</td>
                <td>
                  <img
                    src={matiere.teacherImage}
                    alt={matiere.teacherName}
                    className="img-thumbnail"
                    style={{ height: '70px' }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>






    <div className="container">
    <h2 className="text-center mb-4" style={{ fontFamily: 'Montserrat', fontSize: '2rem', fontWeight: 600, color: 'orange' }}>Vos Examens</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover custom-table">
          <caption className="text-center font-weight-bold mb-4"> </caption>
          <thead className="thead-dark">
            <tr>
              <th scope="col">Nome Exame</th>
              <th scope="col">Classe</th>
              <th scope="col">Type</th>
              <th scope="col">Semestre</th>
              <th scope="col">Temps</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam) => (
              <tr key={exam.exam_id}>
                <td>{exam.name}</td>
                <td>{exam.class}</td>
                <td>
                  {exam.type}
                </td>
                <td>{exam.semester}</td>
                <td>{exam.time}</td>
                <td>
                  {exam.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
