import React, { useState } from "react";
import { useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Header from "../copmporent/Header";
import Sidebar from "../copmporent/Sidebar";
function EditStudentPage() {
  const { idst } = useParams()


  const navigate = useNavigate();
  const tokenExists = localStorage.getItem('token');
  
  
    if (!tokenExists) {
      navigate('/');
    }





  const [pin_Masare, setpin_Masare] = useState("");
  const [s_fname, sets_fname] = useState("");
  const [s_lname, sets_lname] = useState("");
  const [email, setemail] = useState("");
  const [academic_year, setacademic_year] = useState("");
  const [date_nessance, setdate_nessance] = useState("");
  const [s_gender, sets_gender] = useState("");
  const [s_phone, sets_phone] = useState("");
  const [classe, setclasse] = useState("");
  const [id_parent, setid_parent] = useState("");
  const [nameParent, setNameParent] = useState("");
  const [type, settype] = useState("");
  const [parent, setparent] = useState("");




  useEffect(() => {
    fetch(`http://localhost:8000/api/students/${idst}`)
      .then((response) => response.json())
      .then((data) => {
        setpin_Masare(data.pin_Masare);
        sets_fname(data.s_fname);
        sets_lname(data.s_lname);
        setemail(data.email);
        setacademic_year(data.academic_year);
        setdate_nessance(data.date_nessance);
        sets_gender(data.s_gender);
        sets_phone(data.s_phone);
        setclasse(data.class);
        setid_parent(data.id_parent);
        setNameParent(data.father_name);
        settype(data.typeSeance);
      })
      .catch((error) => console.log(error));
  }, [idst]);

  


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







  const handleSubmitr = async (event) => {
   
      event.preventDefault();

  
    const formData = new FormData();
    formData.append('avatar', userInfo.file);
  
    try {
      const uploadResponse = await fetch('http://localhost:4000/api/upload', {
        method: 'POST',
        body: formData,
      });
  
      if (!uploadResponse.ok) {
        throw new Error('Failed to upload the file');
      }
  
      const uploadData = await uploadResponse.json();
      console.log(uploadData);
  
  
      const response = await fetch(`http://localhost:8000/api/students/${idst}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          pin_Masare: pin_Masare,
          s_fname: s_fname,
          s_lname: s_lname,
          father_name: nameParent,
          date_nessance: date_nessance,
          class: classe,
          typeSeance: type,
          email: email,
          s_image: uploadData.imageUrl,
          s_gender: s_gender,
          s_phone: s_phone,
          academic_year: academic_year,
          id_parent: id_parent,
        }),
      });
  

      
      const data = await response.json();
      console.log(data);
  
      alert('Modifier l\'étudiant');
      navigate('/all-students');
    } 
    
    catch (error) {
      console.error(error);
      alert('Une erreur s\'est produite lors du traitement de la demande');
    }
  };
  


 

  
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
              <h4>Modifer Étudiants</h4>
            </div>
          </div>

          <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="index.html">Accueil</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">Étudiants</a>
              </li>
              <li className="breadcrumb-item active">
                <a href="javascript:void(0);">Modifer Étudiants</a>
              </li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-xxl-12 col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Informations de base</h5>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmitr}>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Prénom</label>
                        <input
                          type="text"
                          className="form-control"
                          value={s_fname}
                          onChange={(event) => sets_fname(event.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nom</label>
                        <input
                          type="text"
                          className="form-control"
                          value={s_lname}
                          onChange={(event) => sets_lname(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          value={email}
                          onChange={(event) => setemail(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">PIN Massare</label>
                        <input
                          name="datepicker"
                          className="datepicker-default form-control"
                          id="datepicker"
                          value={pin_Masare}
                          onChange={(event) =>
                            setpin_Masare(event.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Gender</label>
                        <select
                          className="form-control"
                          value={s_gender}
                          onChange={(event) => sets_gender(event.target.value)}
                        >
                          <option value="Gender">Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Date de nassence</label>
                        <input
                          type="date"
                          name="datepicker"
                          className="datepicker-default form-control"
                          id="datepicker1"
                          value={date_nessance}
                          onChange={(event) =>
                            setdate_nessance(event.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Mobile Number</label>
                        <input
                          type="text"
                          className="form-control"
                          value={s_phone}
                          onChange={(event) => sets_phone(event.target.value)}
                        />
                      </div>
                    </div>

                  
                    


                   
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Classe</label>
                        <input
                          type="text"
                          className="form-control"
                          value={classe}
                          onChange={(event) => setclasse(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Type Class</label>
                        <input
                          type="text"
                          className="form-control"
                          value={type}
                          onChange={(event) => settype(event.target.value)}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Année scolleér</label>
                        <input
                          type="text"
                          className="form-control"
                          value={academic_year}
                          onChange={(event) =>
                            setacademic_year(event.target.value)
                          }
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        <label className="form-label">Nom de Parent</label>

                        <input
                          type="text"
                          className="form-control"
                          value={nameParent}
                          
                        />
                      </div>
                    </div>

                
                       
                    
                    
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <div className="form-group">
                        
                        <input
                          type="text"
                          className="form-control"
                          value={id_parent}
                          onChange={(event) => setparent(event.target.value)}
                          hidden
                        />
                      </div>
                    </div>

                    



                    
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="form-group fallback w-100 ">
                        <input
                          type="file"
                          className="dropify"
                          onChange={handleInputChange} 
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <button type="submit" className="btn btn-primary">
                        Modifer
                      </button>
                      <span style={{ margin: "0 5px" }}></span>
                      <button type="reset" className="btn btn-light">
                        Annuler
                      </button>
                    </div>
                  </div>
                </form>
                
              </div>


            </div>
            <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
          </div>
        </div>
      </div>
      
    </div>
    
    </div>



  );
}

export default EditStudentPage;
