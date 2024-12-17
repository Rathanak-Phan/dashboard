import React from 'react'
import './display.css'

export default function Skill() {
  return (
    <div className='p-3'>
      <h1>Skills</h1>
      <div className='d-flex p-2 gap-3'>
        <div className='cart'>
            <i className="fa-solid fa-tv fs-1"></i>
            <p className='fs-1'>Web Development</p>
            <p>Join over million student</p>
            <button className='btn btn-primary btn-lg px-5'>Get Started</button>
        </div>
        <div className='cart'>
            <i className="fa-solid fa-tv fs-1"></i>
            <p className='fs-1'>Web Development</p>
            <p>Join over million student</p>
            <button className='btn btn-primary btn-lg px-5'>Get Started</button>
        </div>
        <div className='cart'>
            <i className="fa-solid fa-tv fs-1"></i>
            <p className='fs-1'>Web Development</p>
            <p>Join over million student</p>
            <button className='btn btn-primary btn-lg px-5'>Get Started</button>
        </div>
        <div className='cart'>
            <i className="fa-solid fa-tv fs-1"></i>
            <p className='fs-1'>Web Development</p>
            <p>Join over million student</p>
            <button className='btn btn-primary btn-lg px-5'>Get Started</button>
        </div>
      </div>
    </div>
  )
}
