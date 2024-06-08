import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {


  return (
    <div className='w-full border-b border-black'>
      <div className='bg-white hidden lg:flex py-3  items-center justify-between px-5 '>
        <Link to="/">
          <h1 className='text-[27px] font-[700] text-[#4D8360]'>LawEase</h1>
        </Link>
        <div className='flex items-center gap-5'>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/login">Log In</Link>
          <Link to="/join" className='border-[#4BAF70] font-semibold border rounded-[12px] px-5 py-2 text-[#4BB070]'>Join</Link>
        </div>
      </div>
   
    </div>
  )
}

export default Header