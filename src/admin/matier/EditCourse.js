
import React,{useState} from 'react';
import axios from 'axios';


import {useEffect} from 'react';

import { useParams,useNavigate } from 'react-router-dom';
import Header from '../copmporent/Header';
import Sidebar from '../copmporent/Sidebar';



const EditCourse = () => {

  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }
  const {idc} = useParams();

  


  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the parent data from the API
    fetch(`http://localhost:8000/api/matieres/${idc}`) // Replace "/api/parents/" with your actual API endpoint
      .then(response => response.json())
      .then(data => {
        setCourseData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, []);








  const [userInfo, setUserInfo] = useState({
    file: null,
    filePreview: null,
  });

  const handleInputChange = (e) => {
    setUserInfo({
      ...userInfo,
      file: e.target.files[0],
      filePreview: URL.createObjectURL(e.target.files[0]),
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('avatar', userInfo.file);
  
    axios
      .post('http://localhost:4000/api/upload', formData)
      .then((uploadResponse) => {
        if (uploadResponse.status !== 200) {
          throw new Error('Failed to upload the file');
        }
        console.log(uploadResponse); // Log the response to inspect its structure
        return uploadResponse.data; // Use the data property instead of calling .json()
      })
      .then((uploadData) => {
        const updatedCourseData = {
          ...courseData,
          image_m: uploadData.imageUrl,
        };
  
        axios
          .put(`http://localhost:8000/api/matieres/${idc}`, updatedCourseData) // Use updatedCourseData instead of courseData
          .then((response) => {
            console.log(response.data);
            alert('Matière modifier avec succès');
            navigate('/all-courses')
          })
          .catch((error) => {
            console.error(error.response.data);
            // Handle error response
          });
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
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

    <div className="content-body">
      <div className="container-fluid">
        <div className="row page-titles mx-0">
          <div className="col-sm-6 p-md-0">
            <div className="welcome-text">
              <h4>Modifier le cours</h4>
            </div>
          </div>
          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="index.html">Accueil</a></li>
              <li className="breadcrumb-item active"><a href="javascript:void(0);">Cours</a></li>
              <li className="breadcrumb-item active"><a href="javascript:void(0);">Modifier le cours</a></li>
            </ol>
          </div>
        </div>
  
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Détail du cours</h4>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} >
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nom du cours</label>
                        <input 
                        type="text" 
                        className="form-control"
                        value={courseData.LibelleMat} 
                        onChange={e => setCourseData({ ...courseData, LibelleMat: e.target.value })} 
                        
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Code de cours</label>
                        <input 
                        type="number" 
                        className="form-control"
                        value={courseData.CoedfMat} 
                        onChange={e => setCourseData({ ...courseData, CoedfMat: e.target.value })} 
                        
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Description du cours</label>
                        <textarea 
                        className="form-control" 
                        rows="5"
                        value={courseData.description} 
                        onChange={e => setCourseData({ ...courseData, description: e.target.value })} 
                        
                        
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Prix du cours</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={courseData.prix} 
                        onChange={e => setCourseData({ ...courseData, prix: e.target.value })} 
                        
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nombre maximum d'étudiants</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        value={courseData.maxStudent} 
                        onChange={e => setCourseData({ ...courseData, maxStudent: e.target.value })} 
                        
                        />
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
                      <option >__ sélectionner __</option>
                            {filer.map(ma => (
                        <option key={ma.id} value={ma.liby}>{ma.liby}</option>
                      ))}
                    </select>
                  </div>
                </div>








                   
            <div className="col-lg-6 col-md-6 col-sm-12">
                  <div className="form-group">
                  <label className="form-label">nnée scolaire</label>
                    <select
                      className="form-control"
                      value={courseData.id_year} 
                        onChange={e => setCourseData({ ...courseData, id_year: e.target.value })} 
                        
                    >
                      <option >__ sélectionner __</option>
                      {fil.map(city => (
                        <option key={city.id_year} value={city.id_year}>
                          {city.name_year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                   
                    
                



                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group fallback w-100">
                        <label className="form-label d-block">Photo du cours</label>
                        <input 
                        type="file" 
                        className="dropify"
                       
                        onChange={handleInputChange} 
                         />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" className="btn btn-primary">Modifier</button>
                      <button type="reset" className="btn btn-light">Annuler</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    
    </div>
    </div>
  );
}

export default EditCourse;
