'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: '01',
    title: 'WordPress Developer ',
    description: 'I am a professional WordPress Developer with experience in developing and customizing websites using the WordPress platform. With a solid understanding of HTML, CSS, JavaScript, and PHP, I can create intuitive user interfaces, optimize website performance, and build complex features tailored to clients'
  },
  {
    num: '02',
    title: 'ReactJs Developer(NextJS)',
    description: ' I am skilled in JavaScript (ES6+), JSX, Redux, and React Hooks, ensuring optimal performance and user-friendly interfaces. I specialize in developing server-side rendered (SSR) and static site generated (SSG) applications that are optimized for SEO and provide excellent performance.'
  },
  {
    num: '03',
    title: 'UX/UI Design',
    description: 'I am a passionate UX/UI Designer with a strong focus on creating user-centered designs that are both visually appealing and highly functional. My goal is to deliver seamless and intuitive user experiences by combining aesthetics with usability.'
  }, {
    num: '04',
    title: 'SEO',
    description: 'I am an experienced SEO Specialist dedicated to helping businesses improve their online visibility and organic search rankings. With a deep understanding of on-page and off-page SEO strategies, including keyword research, content optimization, link building, and technical SEO, I work to ensure that websites are optimized for both search engines and users.'
  }
]

// Tạo variants cho animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Khoảng cách giữa các animation
    }
  }
}

const serviceVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3, // Delay cho từng item
      duration: 0.8, // Thời gian chuyển động
      ease: "easeInOut" // Loại easing mềm mại hơn
    }
  })
}

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants} // Thêm variants container để điều khiển children
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col justify-center gap-6 group"
              custom={index}
              variants={serviceVariant}
            >
              {/*  top */}
              <div className="flex gap-6 items-center">
                <div className="text-5xl font-extralight text-outline text-transparent hover:text-outline-hover"> {service.num} </div>
                <Link href={''} className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-2xl text-black" />
                </Link>
              </div>
              {/*  end top */}

              {/*  title */}
              <h2 className="text-[30px] font-bold text-white hover:text-accent transition-all duration-500">{service.title}</h2>
              {/*  end title */}

              {/* desc */}
              <p className="text-white/60">{service.description}</p>
              {/* end desc */}

              {/* border */}
              <div className="border-b border-white/20 w-full"></div>
              {/* end border */}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
