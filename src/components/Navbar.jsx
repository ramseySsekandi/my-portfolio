'use client'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const links = [
    {url: "/", titles: "Home"},
    {url: "/about", titles: "About"},
    {url: "/portifolio", titles: "Portifolio"},
    {url: "/contact", titles: "Contact"}
  ]
  const [open, setOpen] = useState(false)
  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:12 lg:20 xl:px-48'>
      
      {/* LINKS */}
      <div className="hidden md:flex gap-4">
        {
          links.map((link) => (
            <Link href={link.url} key={link.titles}>{link.titles}</Link>
          ))
        }
      </div>

      {/* LOGO */}
      <div className="md:hidden">
        <Link href='/' className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center gap-1'>
        <span className='text-white'>Ramsey</span>
        <span className='w-12 h-8 rounded bg-white text-black flex justify-center items-center'>Dev</span>
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={()=>setOpen((prev) => !prev)}>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* MENU LIST */}
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
          {
            links.map((link) => (
              <Link href={link.url} key={link.titles}>{link.titles}</Link>
            ))
          }
        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar