import React, {  useState ,useEffect} from 'react';
import axios from 'axios';
import { Link,useNavigate } from "react-router-dom";
import Header from '../copmporent/Header';
import Sidebar from '../copmporent/Sidebar';




const Courses = () => {
  
  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }


  const [param, setParam] = useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [matieres, setMatieres] = useState([]);


  const [admin, setAdmin] = useState(null);

  
 


  const deleteMatiere = async (id) => {
    const confirmed = window.confirm('Êtes-vous sûr de vouloir supprimer cette Matière ?');
  
    if (confirmed) {
      try {
        const response = await fetch(`http://localhost:8000/api/matieres/${id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          throw new Error('Échec de la suppression du sujet');
        }
  
        const data = await response.json();
        console.log('Matiere deleted:', data.message);

  window.location.reload();
        // Handle success or update the state accordingly
      } catch (error) {
        console.error('Error deleting Matiere:', error);
        // Handle the error
      }
    }
  };
  








  useEffect(() => {
    fetchMatieres();
  }, []);

  const fetchMatieres = () => {
    axios.get('http://localhost:8000/api/matieres')
      .then(response => {
        setMatieres(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

 
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };






  const CourseCard = ({ image, title, date, likes, duration, student ,prof,id}) => {
    return (


      
      <div className="col-xl-3 col-xxl-4 col-lg-4 col-md-6 col-sm-6">
        <div className="card">
          <img className="img-fluid" src={image} alt="" style={{ width: '100%', height: '350px' }} />
          <div className="card-body">
            <h4>{title}</h4>
            <ul className="list-group mb-3 list-group-flush">
              <li className="list-group-item px-0 border-top-0 d-flex justify-content-between">
                <span className="mb-0 text-muted">{date}</span>
                <a href="javascript:void(0);"><i className="la la-heart-o mr-1"></i><strong>{likes}</strong></a>
              </li>
              <li className="list-group-item px-0 d-flex justify-content-between">
                <span className="mb-0">Prix :</span>
                <strong>{duration}  DH</strong>
              </li>
              
  
  
  
  
  
  
              <li className="list-group-item px-0 d-flex justify-content-between"  >
              <span className="mb-0">Professeur :</span>
             
                        
                            
                          
  
                              <strong>{prof}</strong>
                            
                        
                   
  
  </li>
  


              <li className="list-group-item px-0 d-flex justify-content-between">
                <span><i className="fa fa-graduation-cap text-primary mr-2"></i>Étudiant</span>
                <strong>+ {student}</strong>
              </li>
            </ul>

            <Link to={`/coredi/${id}`}  className="btn btn-primary">Modifier</Link>
            {'   '}
            <Link  className="btn btn-danger" onClick={() => deleteMatiere(id)}>Supprimer</Link>
            
          </div>
        </div>
      </div>
    );
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
              <h4>Tous les cours</h4>
            </div>
          </div>
                <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
                    <li className="breadcrumb-item active"><a href="javascript:void(0);">Cours</a></li>
                    <li className="breadcrumb-item active"><a href="javascript:void(0);">Tous les cours</a></li>
                  </ol>
                </div>
          </div>


    <div className="row">
      {matieres.map((course) => (
        <CourseCard
          key={course.id_mat}
          image={course.image_m}
          title={course.LibelleMat}
          date={course.id_mat}
          likes={course.likes}
          duration={course.prix}
          id={course.id_mat}
          prof={course.professor}
          student={course.maxStudent}

          
        />
      ))}
    </div>
    </div> </div>
    </div>
  );
};

export default Courses;
