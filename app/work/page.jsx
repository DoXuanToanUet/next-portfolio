'use client'
import React,{useState} from 'react'
import { motion } from 'framer-motion'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent,TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import Link from 'next/link'
import Image from 'next/image'
import WorkSlideBtns from '@/components/WorkSlideBtns'

const projects = [
  {
    num:"01",
    category:"Wordpress",
    title:"My Blog",
    description:"This is my blog",
    stack: [{name:"Wordpress"},{name:"Mysql"},{name:"Html 5"}, {name: 'Css 3'}, {name: "Javascript"}],
    image:'/assets/work/my-blog.jpg',
    live: "https://doxuantoan.com/",
    github:""
  },
  {
    num:"02",
    category:"NextJS",
    title:"Food Ordering",
    description:"Food Ordering",
    stack: [{name:"Html 5"}, {name: 'Css 3'}, {name: "Javascript"}],
    image:'/assets/work/thumb1.png',
    live: "",
    github:""
  },
  {
    num:"03",
    category:"NextJS",
    title:"Blog",
    description:"Blog https://toanweb-blog.vercel.app/",
    stack: [{name:"NextJS"},{name:"MongoDb"},{name:"Html 5"}, {name: 'Css 3'}, {name: "Javascript"}],
    image:'/assets/work/thumb1.png',
    live: "https://toanweb-blog.vercel.app/",
    github:""
  },
  {
    num:"04",
    category:"Wordpress",
    title:"Vatlieunha.vn ",
    description:"Vatlieunha.vn - E-commerce",
    stack: [{name:"Wordpress"},{name:"Mysql"},{name:"Html 5"}, {name: 'Css 3'}, {name: "Javascript"}],
    image:'/assets/work/thumb1.jpg',
    live: "https://vatlieunha.vn",
    github:""
  },
  {
    num:"05",
    category:"Wordpress",
    title:"optimal365.vn ",
    description:"optimal365.vn - Web Info",
    stack:  [{name:"Wordpress"},{name:"Mysql"},{name:"Html 5"}, {name: 'Css 3'}, {name: "Javascript"}],
    image:'/assets/work/thumb2.jpg',
    live: "https://optimal365.vn/",
    github:""
  },
 
]


const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) =>{

    // get current slider index
    const currentIndex = swiper.activeIndex

    // update project state base on current slide index
    setProject(projects[currentIndex])


  }
  
  
  return (
    <motion.section
          initial={{opacity:0}}
          animate={{
              opacity:1,
              transition:{ delay: 0.2, duration: 0.3 , ease:"easeIn"}
          }}
          className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
      >
          <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
              <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                <div className="flex flex-col gap-[30px]">
                  {/* outline num */}
                  <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                    {project.num}
                  </div>
                  {/* project category */}
                  <h2 className="text-[20px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                  <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">{project.title}</h2>
                  {/* project desc */}
                  <p className="text-white/60">{project.description}</p>
                  {/* stack */}
                  <ul className="flex gap-4">
                    {project.stack.map( (item,index)=>(
                      <li key={index} className="text-xl text-accent">
                        {item.name}
                        {index !== project.stack.length -1 && ","}
                      </li>
                    ) )}
                  </ul>
                  {/* border */}
                  <div className="border bordre-white/20"></div>
                  {/* buttons */}
                  <div className="flex gap-3">
                    {/* live button */}
                    <Link href={project.live}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                            <BsArrowUpRight className="text-white text-3xl hover:text-accent"/>
                          </TooltipTrigger>
                          <TooltipContent><p>Live project</p></TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    {/* github button */}
                    <Link href={project.github} passHref>
                      {/* <a target="_blank" rel="noopener noreferrer"> */}
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                              <BsGithub className="text-white text-3xl hover:text-accent"/>
                            </TooltipTrigger>
                            <TooltipContent><p>Github</p></TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        {/* </a> */}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full xl:w-[50%]">
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="xl:h-[520px] mb-12"
                  onSlideChange={handleSlideChange}
                >
                  {projects.map( (project,index)=>(
                    <SwiperSlide key={index}>
                      <div className="h-[460px] relative flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden">
                        {/* overlay */}
                        <div></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-contain"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  ) )}
                  <WorkSlideBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all" />
                </Swiper>
              </div>
            </div>
          </div>
      </motion.section>
  )
}

export default Work