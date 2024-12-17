import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Sidebar from './component/Sidebar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Skill from './component/Skill';
import Course from './component/Course';





function App() {
  




  return (
    <>

      




      <div className='d-flex p-5'>
        <Sidebar/>
        <div className='bg'>
          <Skill/>
          <Course/>
        </div>

      </div>
    </>
  )
}

export default App
