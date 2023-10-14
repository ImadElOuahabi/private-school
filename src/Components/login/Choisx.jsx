import React from 'react';
import cc from './img/teacher.png';
import cc1 from './img/user_icon.png';
import cc2 from './img/admin.png';
import cc3 from './img/parent.png';
import './ch.css'

export default function Choisx() {



  return (


    <div className="contn">
        <a  href="/Alogin" className={`img-container fade-in`}>
          <img src={cc2}  alt="User" />
        </a>
        <a href="/Slogin" className={`img-container fade-in`}>
          <img src={cc1} alt="" />
        </a>
        <a href="/Plogin" className={`img-container fade-in`}>
          <img src={cc3} alt="" />
        </a>
        <a href="/Tlogin" className={`img-container fade-in`}>
          <img  src={cc}alt="" />
        </a>
  </div>
  )
}
