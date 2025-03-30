import { useTransform } from 'framer-motion'
import React from 'react'


const Brain = ({scrollYProgress}) => {
  const rotateForward = useTransform(scrollYProgress, [0, 1], [0, 360])
  return (
    <div>brain</div>
  )
}

export default Brain