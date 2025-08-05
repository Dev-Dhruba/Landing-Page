import { useState } from 'react'

const Navbar = () => {

  const links = ["Home", "AI Tools", "Testimonials", "Blogs", "Pricing"];

  return (
    <nav className='flex justify-around py-2 w-screen'>
      <img src="/logo.png" alt="Nivyr logo" className='h-12'/>
      <ul className='flex w-146 justify-between items-center text-white font-semibold]'>
        {links.map((link, index) => (
          <li
            key={index}
            className={`hover:text-[#FFD300] cursor-pointer transition-colors`}
          >
            {link}
          </li>
        ))}
      </ul>
      <div className='flex justify-between gap-5 items-center'>
        <button className='h-10 border border-white rounded-2xl w-20 text-white font-semibold hover:text-yellow-400'>Log In</button>
        <button className='bg-yellow-400 h-10 rounded-2xl w-20 font-semibold hover:bg-[#7669dd]'>Sign up</button>
      </div>
    </nav>
  )
}

export default Navbar