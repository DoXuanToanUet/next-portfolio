'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'



const Photo = () => {
  return (
    <div className="w-full h-full relative">
        <motion.div
            initial={{opacity:0}}
            animate={{
                opacity:1,
                transition:{ delay: 1, duration:0.2 , ease:"easeIn"}
            }}
        >
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden">
                <Image src="/assets/photome.jpg" layout="intrinsic" width={498} height={498} quality={100}  alt="" className="object-cover"/>
            </div>
        </motion.div>
    </div>
  )
}

export default Photo