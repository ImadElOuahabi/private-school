import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './admin/copmporent/Header';
import Home from './Components/Home';
import About from './Components/about';
import NotFound from './Components/login/NotFound';
import Login1 from './Components/login/Login1'
import Login2 from './Components/login/Login2'
import Login3 from './Components/login/Login3';
import Login from './Components/login/Login';
import CHoix from './Components/login/Choisx';
import SignUp from "./Components/login/S.jsx";
import Student from './Components/Student';
import StudentProfile from './Components/StudentProfile';
import Affichage from './Components/Affichage';
import Parent from './Components/Parent';
import Formulaire from './Components/Formulaire';
import { useState } from 'react';
import HmeA from './admin/hom/HmeA';
import StudentList from './admin/student/StudentList';
import Sidebar from './admin/copmporent/Sidebar';
import StudentAdd from './admin/student/StudentAdd';
import EditStudentPage from './admin/student/EditStudentPage';
import ShowStudent from './admin/student/ShowStudent';
import ParentList from './admin/parent/ParentList';
import ParentAdd from './admin/parent/ParentAdd';
import ParentEdit from './admin/parent/ParentEdit';
import AddCourse from './admin/matier/AddCourse';
import AllCourses from './admin/matier/AllCourses';
import EditCourse from './admin/matier/EditCourse';
import ProfessorList from './admin/prof/ProfessorList';
import AddProfessorForm from './admin/prof/AddProfessorForm';
import ProfShow from './admin/prof/ProfShow';
import EditProfessor from './admin/prof/EditProfessor';
import ParentShow from './admin/parent/ParentShow';
import UserProfile from './profpanal/UserProfile';
import TeacherProfile from './profpanal/TeacherProfile';
import Profile from './admin/Profile';
import ListNote from './profpanal/ListNote';
import AddExame from './profpanal/AddExame';
import ListStudent from './profpanal/ListStudent';
import EditnandNav from './profpanal/EditnandNav';
import Edit_Exam from './profpanal/Edit_Exam';




function App() {







  return (

    <div className="App">

        



 

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/Alogin" element={<Login/>} />
          <Route path="/Slogin" element={<Login1 />} />
         <Route path="/Plogin" element={<Login2 />} />
         <Route path="/S" element={<SignUp/>}/>
         <Route  path="/Tlogin" element={<Login3 />} />
         <Route path="/" element={<CHoix />} />
         <Route path="/*" element={<NotFound />} />
         <Route path="/Student/:id" element={<Student/>} />
         <Route path="/Profile/:id" element={<StudentProfile/>} />


          <Route path="Plogin/Affichage/:idPar/:idParent" element={<Affichage />} />
          <Route path="/Parent/:idPar" element={<Parent/>} />
          
          
          
          
          <Route path="Plogin/Affichage/:idPar/:idParent/Formulaire" element={<Formulaire />} />
             
          
          {/* espas admin */}
          
          
          <Route path="/Admin/home/:idAdmin" element={<HmeA/>} />

          <Route path="/all-students" element={<StudentList/>} />
          <Route path="/add-student" element={<StudentAdd/>} />
          <Route path="/edit-student/:idst" element={<EditStudentPage/>} />
          <Route path="/show-student/:idst" element={<ShowStudent/>} />

          <Route path="/all-parent" element={<ParentList/>} />
          <Route path="/add-parent" element={<ParentAdd/>} />
          <Route path="/edit-parent/:id" element={<ParentEdit/>} />
          <Route path="/show-parent/:id" element={<ParentShow/>} />

          <Route path="/all-courses" element={<AllCourses/>} />
          <Route path="/add-courses" element={<AddCourse/>} />
          <Route path="/coredi/:idc" element={<EditCourse/>} />


          <Route path="/All-Professors" element={<ProfessorList/>} />
          <Route path="/Add-Professor" element={<AddProfessorForm/>} />
          <Route path="/Edit-Professor/:ide" element={<EditProfessor/>} />
          <Route path="/Professor-Profile/:ide" element={<ProfShow/>} />
      

      {/* espas prof */}





      
      <Route path="/proff/:idLoE" element={<UserProfile/>} />
      <Route  path="/addexam/:idtecher" element={<AddExame/>} />
      <Route  path="/editprofil/:idtecher" element={<EditnandNav/>} />
      <Route  path="/list/:idmater/:idLoE" element={<ListStudent/>} />
      <Route  path="/listNot/:idmater/:idTicher/:idLoE" element={<ListNote/>} />
      <Route  path="/edite_note/:id_exam/:idLoE" element={<Edit_Exam/>} />

      

      




        </Route>
      </Routes>





</div>



  );
}

export default App;
