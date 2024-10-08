'use client'
import React from 'react'
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaJs,
  FaWordpress,
  FaAngular,

} from 'react-icons/fa'

import { SiTailwindcss, SiNextdotjs, SiJquery, SiMysql, SiMongodb  } from 'react-icons/si'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { motion } from 'framer-motion'

const about = {
  title: 'About me ',
  description: 'I always strive to learn and improve my knowledge to enhance myself every day. No Pain No Gian',
  info:[
    {
      fieldName: "Name",
      fieldValue:"ToanWeb"
    },
    {
      fieldName: "Phone",
      fieldValue:"0385157444"
    },
    {
      fieldName: "Experience",
      fieldValue:"4+ Year"
    },
    {
      fieldName: "Facebook",
      fieldValue:"ToanWeb"
    },
    {
      fieldName: "Zalo",
      fieldValue:"ToanWeb"
    },
  ]
}
  
const experience = {
  icon:'/assets/resume/badge.svg',
  title:'My experience',
  description:'I am a versatile WordPress Developer with experience in creating a wide range of websites, from blogs to e-commerce platforms, and even developing custom plugins. My expertise in HTML, CSS, JavaScript, and PHP allows me to build user-friendly, responsive, and high-performing websites.',
  items:[
    {
      company:'Misa',
      position: '.Net Developer',
      duration:'2020-2021'
    },
    {
      company:'Agiletech',
      position: 'Wordpress Developer',
      duration:'2021-2022'
    },
    {
      company:'Metabox io',
      position: 'Wordpress Developer',
      duration:'2022-now'
    },
   
  ]
}

const education = {
  icon:'/assets/resume/cap.svg',
  title:'My education',
  description: 'I am alway to continuous learning, always improving my knowledge and staying up-to-date with the latest technologies and best practices.',
  items:[
    {
      institution: "The University of Engineering and Technology (UET)",
      degree:'Information Technology.',
      duration:'2015 -2019'
    },
    {
      institution: "Wordpress Developer",
      degree:'Full Stack Web Development ',
      duration:'2020 -now'
    },
    // {
    //   institution: "Online Course Platform",
    //   degree:'Full Stack Web Development ',
    //   duration:'2023'
    // },
  ]

}

const skills = {
  title:'My skills',
  description:'Front-end Development and Back-end Development',
  skilllist:{
    frontend:[
      {
        icon:<FaReact/>,
        name:'Reactjs',
        title:'ReactJs'
      },
      {
        icon:<FaWordpress/>,
        name:'Wordpress',
        title:'Wordpress'
      },
      {
        icon:<FaAngular/>,
        name:'Angular',
        title:'Angular'
      },
      {
        title:'HTML5',
        icon:<FaHtml5/>,
        name:'HTML5',
      },
      {
        icon:<FaCss3/>,
        name:'Css3',
        title:'CSS3'
      },
      {
        icon:<FaJs/>,
        name:'JS',
        title:'JS'
      },
      {
        icon:<SiJquery/>,
        name:'Jquery',
        title:'Jquery'
      },
    ],
    backend: [
      {
        icon:<SiMysql/>,
        name:'MySQL',
        title:'MySQL'
      },
      {
        icon:<FaNodeJs/>,
        name:'NodeJs',
        title:'NodeJs'
      },
      {
        icon:<SiMongodb/>,
        name:'Mongodb',
        title:'Mongodb'
      },
    ]
   
   
  }
}

const Resume = () => {
  return (
    <motion.div
        initial={{opacity:0}}
        animate={{
            opacity:1,
            transition:{ delay: 0.2, duration: 0.3 , ease:"easeIn"}
        }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] mb-[50px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about-me">About me</TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className="min-h-[70vh] w-full">

            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {experience.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0"> {experience.description} </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    { experience.items.map( (item,index) =>(
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                    ) ) }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* End experience */}

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold"> {education.title} </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 "> {education.description} </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">
                    { education.items.map( (item,index) =>(
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                    ) ) }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* End Education */}

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div>
                  <h3 className="text-4xl font-bold mb-4">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <h4>Front End</h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  
                  {skills.skilllist.frontend.map( (skill,index) =>(
                        <li key={index}>
                          
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-[1rem]">
                               
                                <div className="text-6xl hover:text-accent transition-all duration-300">  {skill.icon}
                                </div>
                                <p>{skill.title}</p>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          </li>
                  ) )}
                </ul>
                <h4>Back End</h4>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  
                  {skills.skilllist.backend.map( (skill,index) =>(
                        <li key={index}>
                          
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-[1rem]">
                                <div className="text-6xl hover:text-accent transition-all duration-300">  {skill.icon}
                                </div>
                                <p>{skill.title}</p>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                          </li>
                  ) )}
                </ul>
              </div>
            </TabsContent>
            {/* End Skills */}

            {/* About me  */}
            <TabsContent value="about-me" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    { about.info.map( (item,index) =>(
                        <li
                          key={index}
                          className="  rounded-xl flex justify-center items-center gap-1 xl:justify-start"
                        >
                          <span className="text-white/60">{item.fieldName}: </span>
                          <span className="text-xl">{item.fieldValue}</span>
                        </li>
                    ) ) }
                </ul>
              </div>
            </TabsContent>
            {/* End About me */}
          </div>
          
          {/* end content */}
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume