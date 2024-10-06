'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non voluptatem harum doloremque, necessitatibus fuga corporis porro rerum eveniet ab, exercitationem id odit! Commodi obcaecati alias ipsam vitae, error voluptatum at.'
  },
  {
    num: '02',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non voluptatem harum doloremque, necessitatibus fuga corporis porro rerum eveniet ab, exercitationem id odit! Commodi obcaecati alias ipsam vitae, error voluptatum at.'
  },
  {
    num: '03',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non voluptatem harum doloremque, necessitatibus fuga corporis porro rerum eveniet ab, exercitationem id odit! Commodi obcaecati alias ipsam vitae, error voluptatum at.'
  }, {
    num: '04',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non voluptatem harum doloremque, necessitatibus fuga corporis porro rerum eveniet ab, exercitationem id odit! Commodi obcaecati alias ipsam vitae, error voluptatum at.'
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
              <h2 className="text-[42px] font-bold text-white hover:text-accent transition-all duration-500">{service.title}</h2>
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
