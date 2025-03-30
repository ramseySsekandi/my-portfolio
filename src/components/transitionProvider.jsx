'use client'
import React from 'react'
import Navbar from './Navbar'
import { AnimatePresence, } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { motion } from "motion/react"
import { delay } from 'framer-motion'

const TransitionProvider = ({children}) => {
    const pathName = usePathname()
  return (
    <AnimatePresence mode='wait'>
    <div key={pathName} className='w-screen min-h-screen bg-gradient-to-b from-blue-100 to-red-100'>
    <motion.div className="w-screen h-screen fixed bg-black rounded-b-[100px] z-40"
    animate={{height:"0vh"}}
    exit={{height:"100vh"}}
    transition={{duration:0.8, ease: "easeOut"}}
    />
    <motion.div className="w-screen h-screen fixed bg-black rounded-t-[100px] bottom-0 z-40"
    initial={{height:"140vh"}}
    animate={{height:"0vh", transition:{delay:0.5}}}
    />
    <motion.div className="fixed m-auto text-white top-0 bottom-0 right-0 left-0 text-8xl cursor-default w-fit h-fit z-50"
    initial={{ opacity: 1, }}
    animate={{opacity: 0,  }}
    exit={{opacity:0}}
    >
        {pathName.substring(1)}
    </motion.div>
        <div className="h-24">
            <Navbar/>
        </div>
        <div className="min-h-[calc(100vh-6rem)]">{children}</div>
    
    </div>
    </AnimatePresence>
  )
}

export default TransitionProvider