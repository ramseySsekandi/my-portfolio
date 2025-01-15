'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {
  const  pathName = usePathname()
  console.log(pathName)
  return (
    <Link href={link.url} key={link.titles} className={`rounded p-1 ${pathName === link.url && 'bg-black text-white'}`}>{link.titles}</Link>
  )
}

export default NavLink