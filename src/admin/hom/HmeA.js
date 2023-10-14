import React from 'react'
import WidgetStats from './WidgetStats '
import SurveyCard from './SurveyCard '
import DonutChartCard from './DonutChartCard'
import UniversitySurveyCard from './UniversitySurveyCard'
import CourseCard from './CourseCard'
import CourseCard2 from './CourseCard2'
import CourseCard3 from './CourseCard3'
import CourseCard4 from './CourseCard4'
import EmailForm from './EmailForm'

import NewStudentList from './NewStudentList'
import Header from '../copmporent/Header'
import Sidebar from '../copmporent/Sidebar'
import { useState } from 'react'
import { useParams ,useNavigate} from 'react-router-dom'
import { useEffect } from 'react'




export default function HmeA() {
  
  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  const image = localStorage.getItem('image');
  const cin = localStorage.getItem('cin');
    if (!tokenExists) {
      navigate('/');
    }
  

  

const {idAdmin} = useParams()







const [admin, setAdmin] = useState({});

useEffect(() => {
   
  const fetchAdminDetails = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/admin/${cin}`);
      const data = await response.json();
      setAdmin(data);
    } catch (error) {
      console.error('Error fetching admin details:', error);
    }
  };

  fetchAdminDetails();



}, [cin]);




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


  

      <div class="content-body">
                    
            <div class="container-fluid">
                  <div class="row">
                        <WidgetStats/>
                        <>
    

    
    <div className="container-fluid">
      <div className="container-fluid">
        {/* Breadcrumb */}
       
        {/* /Breadcrumb */}
        
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img src={admin.a_image} alt="Admin" className="rounded-circle" width="150" />
                  <div className="mt-3">
                    <h4>{admin.a_First_Name} {admin.a_Last_Name} </h4>
                    <p className="text-secondary mb-1">Admin</p>
                    <p className="text-muted font-size-sm">Centro Franquicia Privé </p>
                    
                    
                  </div>
                </div>
              </div>

             
            </div>
           

          </div>
          <div className="col-md-8">
            <div className="card mb-3">
                  <div className="card-header">
                    <h5 className="card-title">Information Personnelle</h5>
                  </div>
              <div className="card-body">
                <div className="row">
                
                  <div className="col-sm-3">
                    <h6 className="mb-0">Prénom</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    {admin.a_First_Name}
                  </div>
                </div>
                <hr />

                <div className="row">
        
                  <div className="col-sm-3">
                    <h6 className="mb-0">Nom</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {admin.a_Last_Name}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {admin.a_email}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Telephone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    (+212) 675794390
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Adresse</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  G.Gzenaya Lot 5637 Etage 3 N° 5 TANGER 
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">City</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  Tanger
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Telephone</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {admin.a_N_Telephone}
                  </div>
                </div>

                <hr />
               
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Date De Nessance</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                          1986/02/20
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Nombre CIN</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                  {admin.admin_CIN}
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">IDE Entreprise</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">

                  {admin.a_IDE_entreprise}
                  </div>

                </div>
              </div>

            </div>
          
          </div>
        </div>
      </div>
    </div>
    </>
                        
                  </div>
            </div>     
      </div>
 
      
      </div> 
       

  )
}




