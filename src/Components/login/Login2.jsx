import { useState } from 'react';
import avatar from './img/avatar.png';
import cc2 from './img/parent.png';
import { useNavigate } from 'react-router-dom';
import { Link,NavLink } from 'react-router-dom';
import SignUp from './S';
import "../scss/_header.scss"
import "../style.css"
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from 'react-bootstrap'
import './login.css'
import logo from './img/logo center.png';


function Login2() {
  const [loginUser, setLoginUser] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const navigate = useNavigate();


  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    

    try {
      const response = await fetch('http://localhost:8000/api/loginpr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          p_email: loginUser,
          password: loginPassword,
        }),
      });

      if (response.ok) {
       
        const data = await response.json();
        const role = data.parent.role;
        const token = data.token;

        if (role === 'parente') {
          localStorage.setItem('token', token);
          // Redirect to admin home page
          navigate(`Affichage/${data.parent.id_parent}/${data.parent.p_CIN}`);
            console.log(data)

        } else if (role === 'user') {
          // Redirect to user home page
          navigate('/');
        }
          // Redirect to home page for users
         // history.push('/home');
          

   
        
      } else {

        console.log('22222!');
        // Handle login error
      }
    } catch (error) {
      // Handle network or other errors
      console.log('00!');
    }
  };


  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    // handle forgot password form submit
  };

  const handleForgotPasswordLinkClick = (event) => {
    event.preventDefault();
    setShowForgotPassword(true);
    console.log('000000000')
  };

  const handleForgotPasswordCloseClick = (event) => {
    event.preventDefault();
    setShowForgotPassword(false);
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
                      <Link className='c1 n' to='/'>Accueil</Link>
                     <Link className='c1 n ' to='/about'>À propos de </Link>
                     <Dropdown className='c2' >
                  <Dropdown.Toggle className="btn btn-secondary "  id="dropdown-basic">
                  Se Connecter
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
    <div className="login-wrapper">

      <form onSubmit={handleLoginSubmit} className="form">
        <img src={cc2} alt="" />
        <h2>Se Connecter</h2>
        <div className="input-group">
          <input
            type="text"
            name="loginUser"
            id="loginUser"
            value={loginUser}
            onChange={(event) => setLoginUser(event.target.value)}
            required
          />
          <label htmlFor="loginUser">E-mail</label>
        </div>
        <div className="input-group">
          <input
            type="password"
            name="loginPassword"
            id="loginPassword"
            value={loginPassword}
            onChange={(event) => setLoginPassword(event.target.value)}
            required
          />
          <label htmlFor="loginPassword">Mot de pass</label>
        </div>
        <input type="submit" value="Se Connecter" className="submit-btn" />
        <Link className='' to='/S'> Vous n'avez pas de compte? S'inscrire</Link>
       
      </form>



     


     
    </div>
</div>
  );
}
export default Login2;