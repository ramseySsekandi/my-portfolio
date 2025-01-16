import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
    <div className='pb-4 h-full flex gap-1 flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48'>
      {/* IMAGE CONTAINER */}
      <div className="relative h-1/2 lg:h-full lg:w-1/2">
        <Image src='/hero.png' alt='' fill className='object-contain'/>
      </div>

      {/* TEXT CONTAINER */}
      <div className=" h-1/2 flex flex-col gap-2 lg:gap-8 items-center justify-center lg:h-full lg:w-1/2">
        {/* TITLE */}
        <h1 className='text-xl sm:text-3xl font-bold md:text-4xl'>Creating Digital Experiences, Designing Tomorrow.</h1>
        {/* DESC */}
        <p className='text-sm sm:text-lg lg:text-xl'>Welcome to my digital canvas, where innovation and creativity
           converge. With a keen eye for aesthetics and a mastery of code, my
           portifolio showcases a diverse collection of projects that reflect my
           commitment to excellence
           </p>
        {/* BUTTONS */}
        <div className="w-full flex gap-4">
          <button className='p-2 lg:p-4 rounded-lg ring ring-black bg-black text-white'>View My Works</button>
          <button className='p-2 lg:p-4 rounded-lg ring ring-black'>Contact Me</button>
        </div>
      </div>
    </div>
  )
}

export default Homepage