"use client"
import {motion} from 'framer-motion'

const PortifoliPage = () => {
  return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      Portifolio Page
    </motion.div>
  )
}

export default PortifoliPage