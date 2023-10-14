import React, { useEffect, useRef, useState } from 'react';
import Vivus from 'vivus';
import './cc.css'
import logo from '../logo center.png';
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';
const Header = ({ toggleMenu , isMenuOpen }) => {

  const navigaten = useNavigate();
  const image = localStorage.getItem('image');
  const cin = localStorage.getItem('cin');
  const {idAdmin} = useParams();

  const largeImageStyle = {
    width: '200px',
    height: 'auto',
  };
  
  
  useEffect(() => {
    const settings = {
      type: 'oneByOne',
      start: 'inViewport',
      dashGap: 10,
      duration: 100
    };

    const icons = document.querySelectorAll('svg');
    icons.forEach((icon) => {
      const iconID = icon.getAttribute('id');
      if (iconID) {
        const iconVar = iconID.replace('-', '');
        window['tc' + iconVar] = new Vivus(iconID, settings);
      }
    });

    const handleMouseEnter = (event) => {
      const iconID = event.currentTarget.querySelector('svg').getAttribute('id');
      if (!iconID) return false;
      const iconVar = iconID.replace('-', '');
      window['tc' + iconVar].reset().play();
    };

    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);



  const [admin, setAdmin] = useState({});
  const [test, setTest] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/admin/${idAdmin}`);
        setAdmin(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [idAdmin]);

  const handleLogout = () => {
       
    localStorage.removeItem('token');
    localStorage.removeItem('image');
    localStorage.removeItem('cin');
    navigaten('/');
  };


  return (


    <>
    

  

    <div className="header">
      <div className="header-content ">
      <div className="nav-header">
      
      <a href="/" className="brand-logo">
        <img  className="logo-abbr" src={logo} alt=""  width={200}/>
        
      </a>


      <div className="nav-control" onClick={toggleMenu}>
        <div className={isMenuOpen ? 'hamburger is-active' : 'hamburger'} >
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    
    </div>


        <nav className="navbar navbar-expand ml-6">

          
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left ">
              
           
            </div>
            <ul className="navbar-nav header-right">
              
              <li className="nav-item dropdown header-profile">

              
         <a className="nav-link" href="#" role="button" data-toggle="dropdown">



         <img src={image} width="20" alt="" />
       </a>
    
     
              
                <div className="dropdown-menu dropdown-menu-right">
                  <a href={`/Admin/home/${cin}`} className="dropdown-item ai-icon">
                    <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="ml-2">Profile</span>
                  </a>
                 
                  <a onClick={() =>handleLogout()} className="dropdown-item ai-icon">
                    <svg id="icon-logout" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span className="ml-2" >Se déconnecter</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    
    </>
  );
};

export default Header;
