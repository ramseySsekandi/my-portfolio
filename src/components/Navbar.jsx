'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { motion } from "motion/react"

const Navbar = () => {
  const links = [
    {url: "/", titles: "Home"},
    {url: "/about", titles: "About"},
    {url: "/portifolio", titles: "Portifolio"},
    {url: "/contact", titles: "Contact"}
  ]
  const [open, setOpen] = useState(false)

  const topVariants = {
    opened:{
      rotate:45,
      backgroundColor:"rgb(255, 255, 255)",
    },
    closed:{
      rotate:0
    }
  }
  const centerVariants = {
    opened:{
      opacity:0
    },
    closed:{
      opacity:1
    }
  }
  const bottomVariants = {
    opened:{
      rotate:-45,
      backgroundColor:"rgb(255, 255, 255)",
    },
    closed:{
      rotate:0,
    }
  }

  const listVariants = {
    closed: {
      x:'100vw'
    },
    opened: {
      x:0,
      transition: {
        when:'beforeChildren',
        staggerChildren:0.2,
      }
    }
  }

  const listItemVariants = {
    closed: {
      x:-10,
      opacity:0,
    },
    opened: {
      x:0,
      opacity:1,
    }
  }
  
  return (
    <div className='h-full text-xl flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48'>
      
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3">
        {
          links.map((link) => (
            <NavLink  key={link.titles} link={link}/>
          ))
        }
      </div>

      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href='/' className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center gap-1'>
        <span className='text-white'>Ramsey</span>
        <span className='w-12 h-8 rounded bg-white text-black flex justify-center items-center'>Dev</span>
        </Link>
      </div>

      {/* SOCIAL */}
      <div className="hidden md:flex gap-4 w-1/3">
        <Link href='/'>
          <Image src='/github.png' alt='' width={24} height={24} />
        </Link>
        <Link href='/'>
          <Image src='/dribbble.png' alt='' width={24} height={24} />
        </Link>
        <Link href='/'>
          <Image src='/instagram.png' alt='' width={24} height={24} />
        </Link>
        <Link href='/'>
          <Image src='/facebook.png' alt='' width={24} height={24} />
        </Link>
        <Link href='/'>
          <Image src='/pinterest.png' alt='' width={24} height={24} />
        </Link>
        <Link href='/'>
          <Image src='/linkedin.png' alt='' width={24} height={24} />
        </Link>
      </div>

      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={()=>setOpen((prev) => !prev)}>
          <motion.div variants={topVariants} animate={open ? 'opened':'closed'} className="w-10 h-1 bg-black rounded origin-left" ></motion.div>
          <motion.div variants={centerVariants} animate={open ? 'opened':'closed'} className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div variants={bottomVariants} animate={open ? 'opened':'closed'} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div variants={listVariants} initial='closed' animate='opened' className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40">
          {
            links.map((link) => (
              <motion.div  key={link.titles} variants={listItemVariants}>
                <Link href={link.url}>{link.titles}</Link>
              </motion.div>
            ))
          }
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Navbar