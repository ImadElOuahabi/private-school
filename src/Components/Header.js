import React from 'react';
import { Link,NavLink } from 'react-router-dom';
import "./scss/_header.scss"
import "./style.css"
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from 'react-bootstrap'
export default function Header() {
  return (
    <header className="container-fluid menu-head py-3">
      <nav>
      <Navbar className="navbar-border" expand="lg" >
      <Link className='logo'><img src="images/WhatsApp_Image_2023-05-12_at_4.33.54_PM-removebg-preview.png" alt="" /></Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='c'>        
                      <Link className='c1 active n' to='/'>Accueil</Link>
                     <Link className='c1 n ' to='/about'>À propos de </Link>
                     <Dropdown className='c2' >
                  <Dropdown.Toggle className="btn btn-secondary "  id="dropdown-basic">
                  Login
                  </Dropdown.Toggle>
                 <Dropdown.Menu >
                <Dropdown.Item href="/Slogin">étudiant</Dropdown.Item>
                <Dropdown.Item href="/Plogin">Parent</Dropdown.Item>
                <Dropdown.Item href="/Tlogin">Professeur </Dropdown.Item>
               <Dropdown.Item href="/Alogin">Administration</Dropdown.Item>
               </Dropdown.Menu>
              </Dropdown>
                      </Nav>

                </Navbar.Collapse>
            </Navbar>
      </nav>
    </header>
  )
}
