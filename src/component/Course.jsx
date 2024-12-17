import React from 'react'

export default function Course() {
  return (
    <div className='p-3'>
      <h1>Skills</h1>
      <div className='ms-5'>
        <ul className='d-flex list-unstyled gap-5 text-decoration-none'>
            <li><a className='text-decoration-none text-black' href="#">In progress</a></li>
            <li><a className='text-decoration-none text-black' href="#">Explore</a></li>
            <li><a className='text-decoration-none text-black' href="#">Incominng</a></li>
            <li><a className='text-decoration-none text-black' href="#">Finesed</a></li>
        </ul>
      </div>
      <div className='d-flex p-2 gap-3'>
        <div className='cart-course'>
            <h1>HTML</h1>
            <div className='d-flex justify-content-between gap-5 align-items-center'>
                <div className='d-flex flex-column justify-content-between gap-5'>
                    <p>00% Progress</p>
                    <button class="btn btn-dark btn-lg">Continuse</button>
                </div>
                <div className='w-50 h-auto'>
                    <img src="https://th.bing.com/th/id/R.6c8f0a0e377cfa70efcd35ff52893b17?rik=iqhl8JD0f9LLpA&pid=ImgRaw&r=0" alt="" className='w-75 h-auto'/>
                </div>
            </div>
        </div>
        <div className='cart-course'>
            <h1>CSS</h1>
            <div className='d-flex justify-content-between gap-5 align-items-center'>
                <div className='d-flex flex-column justify-content-between gap-5'>
                    <p>00% Progress</p>
                    <button class="btn btn-dark btn-lg">Continuse</button>
                </div>
                <div className='w-50 h-auto'>
                    <img src="https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png" alt="" className='w-75 h-auto'/>
                </div>
            </div>
        </div>
        <div className='cart-course'>
            <h1>JavaScript</h1>
            <div className='d-flex justify-content-between gap-5 align-items-center'>
                <div className='d-flex flex-column justify-content-between gap-5'>
                    <p>00% Progress</p>
                    <button class="btn btn-dark btn-lg">Continuse</button>
                </div>
                <div className='w-50 h-auto'>
                    <img src="https://th.bing.com/th/id/OIP.t1bmwRMcjJT7WTfq4bxK5AHaHk?rs=1&pid=ImgDetMain" alt="" className='w-75 h-auto'/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
