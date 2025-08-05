import { useState } from 'react'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const links = [
    { name: "Home", id: "home" },
    { name: "AI Tools", id: "ai-tools" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Blogs", id: "blogs" },
    { name: "Pricing", id: "pricing" }
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link.name);
    
    // Smooth scroll to the section
    const element = document.getElementById(link.id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className='flex justify-around py-2 w-screen'>
      <img src="/logo.png" alt="Nivyr logo" className='h-12'/>
      <ul className='flex w-146 justify-between items-center text-white font-semibold'>
        {links.map((link, index) => (
          <li
            key={index}
            className={`cursor-pointer transition-colors ${
              activeLink === link.name 
                ? 'text-yellow-400' 
                : 'hover:text-[#FFD300]'
            }`}
            onClick={() => handleLinkClick(link)}
          >
            {link.name}
          </li>
        ))}
      </ul>
      <div className='flex justify-between gap-5 items-center'>
        <button className='h-10 border border-white rounded-2xl w-20 text-white font-semibold cursor-pointer transform transition-all duration-300 hover:text-yellow-400 hover:border-yellow-400 hover:scale-105 active:scale-95'>
          Log In
        </button>
        <button className='bg-yellow-400 h-10 rounded-2xl w-20 font-semibold cursor-pointer transform transition-all duration-300 hover:bg-yellow-500 hover:scale-105 hover:shadow-lg active:scale-95'>
          Sign up
        </button>
      </div>
    </nav>
  )
}

export default Navbar