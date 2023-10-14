import React from 'react'
import Header from '../copmporent/Header'
import Sidebar from '../copmporent/Sidebar'
import Footer from '../copmporent/Footer'

import StudentList from './StudentList'
import StudentAdd from './StudentAdd'
export default function Sud() {
  return (
    <>
   
    <Header/>
    <Sidebar/>
        <StudentAdd/>
 
        </>
  )
}
