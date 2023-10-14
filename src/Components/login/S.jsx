import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import avatar from'./img/avatar.png'
import './login.css';
import { Link,NavLink } from 'react-router-dom';
import "../scss/_header.scss"
import "../style.css"
import Dropdown from 'react-bootstrap/Dropdown';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navbar, Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
function SignUp() {
  const navigate = useNavigate();
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [CIN, setCIN] = useState('');
  const [Image, setImage] = useState('');
  const [Occupation, setOccupation] = useState('');
  const [Address, setAddress] = useState('');
  const [Phone, setPhone] = useState('');
  
  const [dateE, setdateE] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value); }
    


      const [userInfo, setUserInfo] = useState({
        file: null,
        filePreview: null,
      });
    
      const handleInputChange = (event) => {
        setUserInfo({
          ...userInfo,
          file: event.target.files[0],
          filePreview: URL.createObjectURL(event.target.files[0]),
        });
      };



      const handleSubmit = async (event) => {
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
      
          const response = await fetch('http://localhost:8000/api/parents', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            body: JSON.stringify({
              p_image: uploadData.imageUrl,
              date_nessancee: dateE,
              p_CIN: CIN,
              p_fname: FirstName,
              p_lname: LastName,
              p_gender: selectedOption,
              p_email: Email,
              password: Password,
              p_occupation: Occupation,
              p_address: Address,
              p_phone: Phone,
            }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to add parent');
          }
      
          const data = await response.json();
          console.log(data);
      
          alert('Toutes nos félicitations! Vous avez un compte maintenant');
          setFirstName('');
          setLastName('');
          setEmail('');
          setPassword('');
          setCIN('');
          setImage('');
          setOccupation('');
          setAddress('');
          setPhone('');
          setSelectedOption('');
          navigate('/Plogin');
        } catch (error) {
          console.error(error);
          alert('Une erreur s\'est produite lors du traitement de la demande');
        }
      };
      









  return (
    <>
      <header className="container-fluid menu-head py-3">
      <nav>
      <Navbar className="navbar-border text-center" expand="lg" >
      <Link className='logo'><img src="images/WhatsApp_Image_2023-05-12_at_4.33.54_PM-removebg-preview.png" alt="" /></Link>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='c'>        
                      <Link className='c1 n' to='/'>Accueil</Link>
                     <Link className='c1 n ' to='/about'>À propos de </Link>
                     <Dropdown className='c2' >
                  <Dropdown.Toggle className="btn btn-secondary "  id="dropdown-basic">
                  Se connecter
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


    <br/><br/><br/><br/>
    
    <div className="login-wrapper" >
      <form className="form" onSubmit={handleSubmit}>
      <img src={avatar} alt="" />
        <img alt="" />
        <h2>S' Inscrire</h2>
        <div className='row'>
          <div className='col-6'>
            <div className="input-group">
              <input
                type="text"
                name="FirstName"
                id="FirstName"
                value={FirstName}
                onChange={(event) => setFirstName(event.target.value)}
                required
              />
              <label htmlFor="FirstName">Prénom</label>
            </div>
          </div>
          <div className='col-6'>
            <div className="input-group">
              <input
                type="text"
                name="LastName"
                id="LastName"
                value={LastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
              <label htmlFor="LastName">Nom</label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <div className="input-group">
              <input
                type="text"
                name="CIN"
                id="CIN"
                value={CIN}
                onChange={(event) => setCIN(event.target.value)}
                required
              />
              <label htmlFor="CIN">Nombre CIN</label>
            </div>
          </div>
          <div className='col-6'>
            <div className="input-group">
              <input
                type="password"
                name="Password"
                id="Password"
                value={Password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <label htmlFor="Password">Mot de psse</label>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-6'>
            <div className="input-group">
              <input
                type="text"
                name="Phone"
                id="Phone"
                value={Phone}
                onChange={(event) => setPhone(event.target.value)}
                required
              />
              <label htmlFor="Phone">Téléphone</label>
            </div>
          </div>
          <div className='col-6'>
            <div className="input-group">
              <input
                type="file"
                name="image"
                id="image"
                onChange={handleInputChange} 
                required
              />
            </div>
          </div>
        </div>
        <div className='row'>
      <div className='col-12'>
        <div className="mb-3">
          <Form.Check
            inline
            label="Femme"
            name="group1"
            type="radio"
            id="inline-radio-1"
            value="femme"
            checked={selectedOption === 'femme'}
            onChange={handleOptionChange}
          />
          <Form.Check
            inline
            label="Homme"
            name="group1"
            type="radio"
            id="inline-radio-2"
            value="homme"
            checked={selectedOption === 'homme'}
            onChange={handleOptionChange}
          />
        </div>
      </div>
    </div>
        <div className='row'>
          <div className='col-6'>
            <div className="input-group">
              <input
                type="email"
                name="Email"
                id="Email"
                value={Email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <label htmlFor="Email">E-mail</label>
            </div>
          </div>
          <div className='col-6'>
            <div className="input-group">
              <input
                type="text"
                name="Adress"
                id="Adress"
                value={Address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
              <label htmlFor="Adress">Adresse</label>
            </div>
          </div>
        </div>
        <div className="input-group">
          <input
            type="text"
            name="Occupation"
            id="Occupation"
            value={Occupation}
            onChange={(event) => setOccupation(event.target.value)}
            required
          />
          <label htmlFor="Occupation">Profession</label>
        </div>
        <div className="input-group">
          <input
            type="date"
            name="Occupation"
            id="Occupation"
            value={dateE}
            onChange={(event) => setdateE(event.target.value)}
            required
          />
           
        </div>
        

        <input type="submit" value="S' Inscrire" className="submit-btn" />
      </form>
    </div>
    
    </>
  );
}

export default SignUp;
