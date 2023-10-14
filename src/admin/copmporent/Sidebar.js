import React, { useState } from 'react';


import { useParams ,useNavigate} from 'react-router-dom';
const Sidebar = () => {
  const {idAdmin} = useParams()
console.log(idAdmin)
const cin = localStorage.getItem('cin');

  const [isSelect, setIsSelect] = useState(false);
  const [isSelect2, setIsSelect2] = useState(false);
  const [isSelect3, setIsSelect3] = useState(false);
  const [isSelect4, setIsSelect4] = useState(false);
  const openMenu = () => {
    setIsSelect(!isSelect);
    
  };

  const openMenu2 = () => {
    setIsSelect2(!isSelect2)
    
  };

  const openMenu4 = () => {
    setIsSelect4(!isSelect4)
    
  };

  const openMenu3 = () => {
    setIsSelect3(!isSelect3)
    
  };




 
  return (
 

    
  <div className="dlabnav full-height" >
  <div className="dlabnav-scroll" >
    <ul className="metismenu" id="menu"  >
     
      <li className="nav-label first">Menu Principal</li>
      

      <li>
        <a className="ai-icon" href={`/Admin/home/${cin}`} aria-expanded="false">
          <i className="la la-home"></i>
          <span className="nav-text">Tableau de bord</span>
        </a>
        
      </li>
      
  
   

      <li className={isSelect ?'mm-active' : ''} >
        <a className="has-arrow" onClick={openMenu} aria-expanded={isSelect}>
          <i className="la la-user"></i>
          <span className="nav-text">Professeur</span>
        </a>
        <ul aria-expanded="false"   className={isSelect ?'mm-collapse mm-show' : 'mm-collapse'} >
          <li><a href="/All-Professors">La list Professeur</a></li>
          <li><a href="/Add-Professor">Ajouter professeur</a></li>
          <li><a href="/All-Professors">Modifier professeur</a></li>
          <li><a href="/All-Professors">Profil professeur</a></li>
        </ul>
      </li>
      

      <li className={isSelect2 ?'mm-active' : ''}>
        <a className="has-arrow" onClick={openMenu2} aria-expanded={isSelect2}>
          <i className="la la-users"></i>
          <span className="nav-text">Étudiants</span>
        </a>
        <ul aria-expanded="false" className={isSelect2 ?'mm-collapse mm-show' : 'mm-collapse'}>

          
          <li><a href="/all-students">La list étudiants</a></li>
          <li><a href="/add-student">Ajouter étudiant</a></li>
          <li><a href="/all-students">Modifier étudiant</a></li>
          <li><a href="/all-students">Profil l'étudiant</a></li>
        </ul>
      </li>



      <li className={isSelect3 ?'mm-active' : ''}>
        <a className="has-arrow"  onClick={openMenu3} aria-expanded={isSelect3}>
          <i className="la la-users"></i>
          <span className="nav-text">Parent</span>
        </a>
        <ul aria-expanded="false" className={isSelect3 ?'mm-collapse mm-show' : 'mm-collapse'}>
          <li><a href="/all-parent">La list Parents</a></li>
          <li><a href="/add-parent">Ajouter Parent</a></li>
          <li><a href="/all-parentt">Modifier Parent</a></li>
          <li><a href="/About-parent">Profil Parent</a></li>
        </ul>
      </li>

      <li className={isSelect4 ?'mm-active' : ''}>
        <a className="has-arrow"  onClick={openMenu4}  aria-expanded={isSelect4}>
          <i className="la la-graduation-cap"></i>
          <span className="nav-text">Cours</span>
        </a>
        <ul aria-expanded="false" className={isSelect4 ?'mm-collapse mm-show' : 'mm-collapse'} >
          <li><a href="/all-courses">la list Cours</a></li>
          <li><a href="/add-courses">Ajouter Cours</a></li>
          <li><a href="/all-courses">Modifier Cours</a></li>
          <li><a href="/About-courses">Profil Cours</a></li>
        </ul>
      </li>  
    </ul>
  </div>
</div>
  );
};

export default Sidebar;
