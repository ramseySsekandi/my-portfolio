"use client"
import Brain from '@/components/brain'
import { useScroll } from 'framer-motion'
import {motion} from 'framer-motion'
import { useRef } from 'react'

const page = () => {
  const containerRef = useRef()
  const {scrollYProgress} = useScroll({container:containerRef})
  return (
    <motion.div className='h-full' initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
      {/* CONTAINER */}
      <div ref={containerRef} className="h-full over-flow-scroll lg:flex ">
        {/* TEXT CONTAINER */}
        <div className="p-4 gap-24 sm:p-8 md:p-12 flex flex-col md:gap-32 lg:gap-48 xl:gap-64 w-full xl:w-1/2 lg:pr-0">
          {/* BIOGRAPHY */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Fugiat alias quasi, doloremque vero qui itaque.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolorem.
            </p>
            <span className='italic'>Lorem ipsum dolor sit amet consectetur.</span>
            <div className="self-end">
                <svg width="90" height="44" xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_1">
                  <title>Layer 1</title>
                  <path d="m8.50055,6.75024c0,0.49999 0,0.99999 0,1.49998c0,0.49999 0,0.99999 0,1.49998c0,0.49999 -0.24312,0.91186 -0.49999,1.99997c-0.11487,0.48662 0,1.49998 0,1.99997c0,1.49998 -0.24313,2.41184 -0.49999,3.49995c-0.22975,0.97324 -0.49999,2.99996 -0.49999,4.49994c0,0.99998 0,1.99997 0,2.99996c0,0.99999 -0.24312,1.41186 -0.49999,2.49997c-0.34462,1.45985 -0.24312,2.91183 -0.49999,3.99994c-0.22975,0.97324 0,1.99997 0,2.49997c0,0.5 0,0.99999 0,1.49998c0,0.49999 0,1.49998 0,1.99997l0,0.49999" id="svg_1" stroke="#000" fill="none"/>
                  <path d="m15.50046,13.75014c-0.49999,0.49999 -1.14643,0.64644 -1.49998,0.99999c-0.35355,0.35355 -1.03299,1.43881 -1.99997,1.99997c-1.55922,0.90485 -1.54892,1.4122 -2.49997,1.99997c-0.85064,0.52572 -1.49998,0.49999 -2.99996,1.99997c-0.99999,0.99999 -1.3467,1.72938 -1.99997,1.99997c-0.46193,0.19134 -0.30865,0.53805 -0.49999,0.99999c-0.27059,0.65327 -1.58653,1.42635 -1.99997,1.99997c-0.65372,0.90698 0,0.99999 0.49999,0.99999c0.49999,0 0.99999,-0.49999 1.49998,-0.49999c0.99999,0 1.5761,-0.38268 2.49997,0c0.65327,0.27059 1.29698,0.75649 2.49997,1.49998c1.34498,0.83124 2.09298,0.84626 2.99996,1.49998c0.57363,0.41345 0.53805,0.80865 0.99999,0.99999c1.30654,0.54119 2.07609,1.1173 2.99996,1.49998c0.65327,0.27059 1.09299,0.84626 1.99997,1.49998c0.57363,0.41344 2.49997,1.99997 2.99996,2.49997l0,0.5" id="svg_2" stroke="#000" fill="none"/>
                  <path d="m18.50042,5.25026c0.49999,0 0.64644,0.14644 0.99999,0.49999c0.35355,0.35355 -0.19134,1.03805 0,1.49998c0.27059,0.65327 0.49999,1.49998 0.49999,1.99997c0,1.49998 0.33981,3.01287 0.49999,3.99995c0.25327,1.5607 0.49999,1.99997 0.49999,2.99996c0,0.49999 -0.22975,1.02674 0,1.99997c0.25687,1.08811 0.49999,2.49997 0.49999,2.99996c0,1.49998 0.24313,1.91185 0.49999,2.99996c0.11488,0.48662 0,0.99999 0,1.99997c0,0.49999 0,1.49998 0,1.99997c0,0.49999 0,0.99999 0,1.49998c0,0.49999 0.49999,0.99999 0.49999,1.49998c0,0.49999 0,0.99999 0,1.49998l0,0.49999l0.49999,0.49999" id="svg_3" stroke="#000" fill="none"/>
                  <path d="m29.50027,27.74996c0.49999,0 0.99999,-0.49999 0.99999,-0.99999c0,-0.49999 0.2294,-0.84671 0.49999,-1.49998c0.19134,-0.46194 0,-0.99999 0,-1.49998c0,-0.99999 0,-1.49998 0,-1.99997c0,-0.99999 0,-1.49998 0,-1.99997c0,-0.49999 0.15328,-1.22939 -0.49999,-1.49998c-0.46194,-0.19134 -1.20942,-1.20942 -1.99997,-1.99997c-0.79056,-0.79056 -1.14643,-1.14643 -1.49998,-1.49998c-0.35355,-0.35355 -0.99999,0 -0.99999,0.49999c0,0.49999 0,0.99999 0,1.49998c0,0.49999 0,0.99999 0,1.49998c0,0.99999 0,1.49998 0,2.99996c0,0.49999 0,0.99999 0,1.49998c0,0.49999 0,1.49998 0,2.49997c0,0.99999 0,1.49998 0,2.49997c0,0.49999 -0.57402,1.61416 0,2.99996c0.27059,0.65327 0.80865,1.53804 0.99999,1.99997c0.27059,0.65327 0.30865,1.03804 0.49999,1.49998c0.2706,0.65327 0.30866,1.03804 0.49999,1.49998c0.27059,0.65327 0.99998,0.5 1.49998,0.5c0.49999,0 0.99999,0 1.49998,0c0.49999,0 1.53804,0.19134 1.99998,0c0.65327,-0.2706 0.64644,-1.14643 0.99998,-1.49998c0.35355,-0.35355 0.99999,-0.49999 0.99999,-0.99999c0,-0.49999 0,0 -0.5,0.5l-0.99998,0.49999" id="svg_4" stroke="#000" fill="none"/>
                  <path d="m38.00016,18.75008c0.49999,0 0.49999,0.49999 0.49999,0.99999c0,0.49999 0,0.99999 0,1.49998c0,0.99999 0.49999,1.49998 0.49999,2.49997c0,0.49999 0,1.49998 0,1.99997c0,1.99997 0.2294,2.34669 0.5,2.99996c0.38268,0.92387 0,1.49998 0,1.99997c0,0.49999 0.49999,0.49999 0.49999,0.99999c0,0.49999 0.49999,0.99999 0.49999,1.49998c0,0.49999 0,0.99999 0.49999,0.99999l0,0.49999l0,0.49999l0,0.49999" id="svg_5" stroke="#000" fill="none"/>
                  <polyline stroke-linecap="round" id="svg_6" points="38.50014942884445,12.250165283679962 38.50014942884445,12.750158548355103 38.50014942884445,13.250151813030243 " stroke="#000" fill="none"/>
                  <path d="m44.50007,21.75004c0.49999,0 0.49999,0.49999 0.49999,0.99998c0,0.49999 0,0.99999 0,1.49998c0,0.49999 -0.22975,1.02674 0,1.99997c0.25687,1.08811 0.49999,1.49998 0.49999,2.49997c0,0.49999 0,1.49998 0,2.49997c0,0.99999 0,1.99997 0,2.99996c0,0.49999 0,0 0,-0.5c0,-0.49999 0.5,-0.49999 0.5,-0.99998c0,-0.49999 0.24313,-1.41186 0.49999,-2.49997c0.11488,-0.48662 0.49999,-1.49998 0.49999,-1.99997c0,-0.49999 0,-0.99999 0,-1.49998c0,-0.49999 0,-0.99999 0,-1.49998c0,-0.49999 0.2294,-0.84671 0.49999,-1.49998c0.19134,-0.46193 0.12825,-1.39848 0.5,-1.99997c0.83125,-1.34498 0.30865,-2.53803 0.49999,-2.99996c0.2706,-0.65327 0.72939,-0.84671 0.99998,-1.49998c0.19134,-0.46193 0.5,-0.99999 0.99999,-0.99999c0.49999,0 0.64643,0.14644 0.99998,0.49999c0.35355,0.35355 1.14643,0.64644 1.49998,0.99999c0.35355,0.35355 0.34671,1.22939 0.99998,1.49998c0.46194,0.19134 0.72939,0.34672 0.99999,0.99999c0.19134,0.46194 -0.19134,1.03805 0,1.49998c0.2706,0.65327 0.30865,1.03804 0.49999,1.49998c0.54119,1.30655 0.99999,1.99997 1.49998,2.99996c0.49999,0.99999 0.77023,2.02672 0.99998,2.99996c0.25687,1.08811 0.99999,1.99997 1.49998,2.99996l0,0.49999" id="svg_7" stroke="#000" fill="none"/>
                  <path d="m68.99974,12.25016c-0.49999,0 -0.99999,0 -1.49998,0c-0.49999,0 -0.64644,0.14645 -0.99998,0.49999c-0.35355,0.35355 -0.14645,0.64644 -0.49999,0.99999c-0.35355,0.35355 -0.64644,0.14644 -0.99998,0.49999c-0.35355,0.35355 -0.99999,0.99999 -1.49998,1.49998c-0.49999,0.49999 -0.99999,0.49999 -0.99999,0.99999c0,0.49999 -0.19134,1.03805 0,1.49998c0.2706,0.65327 0.80865,0.53805 0.99999,0.99999c0.2706,0.65327 0.91186,0.74312 1.99997,0.99999c0.48662,0.11487 1.53804,0.30865 1.99997,0.49999c0.65327,0.27059 1.3467,0.72939 1.99998,0.99999c0.46193,0.19134 0.64644,0.14644 0.99998,0.49999c0.35355,0.35355 1.09299,0.84626 1.99998,1.49998c0.57362,0.41345 1.04893,1.91219 1.99997,2.49997c0.42532,0.26286 0.99998,0.99999 0.99998,1.49998c0,0.49999 -0.80865,0.53805 -0.99998,0.99999c-0.27059,0.65327 -1.53919,0.89491 -2.99996,1.49998c-1.03291,0.42785 -2.49996,0.49999 -3.49995,0.99998c-0.99998,0.49999 -2.41183,1.24311 -3.49995,1.49998c-2.43309,0.57438 -4.50477,0.84464 -6.99991,0.99998c-4.02328,0.25048 -8.55288,0.27393 -13.49982,0.99999c-5.16475,0.75803 -10.34943,3.24326 -15.99978,3.99995c-5.45126,0.73002 -12.98282,0.74973 -18.49975,0.99998c-3.99584,0.18126 -6.49991,0.49999 -7.99989,0.49999c-0.99999,0 -1.35354,0.35355 -0.99999,0c0.35355,-0.35355 0.34671,-0.72939 0.99999,-0.99998c0.46193,-0.19134 1.60582,-0.85705 2.99996,-1.99997c1.64048,-1.34488 3.91878,-2.67466 6.99991,-3.99995c5.37604,-2.31241 10.98446,-4.05859 18.49975,-5.99992c7.98402,-2.06241 15.86917,-4.97061 29.4996,-8.49989c8.92509,-2.31094 16.09341,-2.69583 19.49974,-3.49995c1.08811,-0.25687 1.49998,-0.99999 2.49997,-0.99999l2.49996,-0.99999l1.49998,0l-0.5,0" id="svg_11" stroke="#000" fill="none"/>
                  <polyline stroke-linecap="round" id="svg_12" points="105,-46.249046325683594 105,-46.74903869628906 " stroke="#000" fill="none"/>
                </g>
                </svg>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
            <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          {/* SKILLS */}
            <div className="flex flex-col gap-12 justify-center">
            <h1 className='font-bold text-2xl'>SKILLS</h1>
            
            {/* SKILL SET */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                HTML 5 
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                CSS & Tailwind CSS
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                SCSS
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                Prisma ORM
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                MySQL
              </div>
              <div className="rounded p-2 text-sm text-white cursor-pointer bg-black hover:bg-white hover:text-black">
                Git & GitHub
              </div>
            </div>
            {/* SKILL SCROLL SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
            <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 6V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </div>
          {/* EXPERIENCE */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className='font-bold text-2xl'>EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* LIST ITEMS */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="flex-1">
                  {/* JOB TITLE */}
                  <div className="w-fit bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                   2024 - Present
                  </div>
                  {/* JOB COMPANY*/}
                  <div className="p-1 w-fit rounded bg-white text-sm font-semibold">
                   DESISHUB - KIREKA
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-fit">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 relative rounded">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="flex-1"></div>
              </div>
              <div className="flex justify-between h-48 text-right">
                {/* LEFT */}
                <div className="flex-1">
                 
                </div>
                {/* CENTER */}
                <div className="w-fit">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 relative rounded">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="flex-1 flex flex-col">
                 {/* JOB TITLE */}
                 <div className="w-fit self-end bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                   2024 - Present
                  </div>
                  {/* JOB COMPANY*/}
                  <div className="p-1 self-end w-fit rounded bg-white text-sm font-semibold">
                   DESISHUB - KIREKA
                  </div>
                </div>
              </div>
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="flex-1">
                  {/* JOB TITLE */}
                  <div className="w-fit bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">Senior JavaScript Engineer</div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    My current employment. Way better than the position before!
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                   2024 - Present
                  </div>
                  {/* JOB COMPANY*/}
                  <div className="p-1 w-fit rounded bg-white text-sm font-semibold">
                   DESISHUB - KIREKA
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-fit">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 relative rounded">
                    {/* CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="flex-1"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2"><Brain scrollYProgress={scrollYProgress} /></div>
      </div>
    </motion.div>
  )
}

export default page