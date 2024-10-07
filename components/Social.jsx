import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter} from 'react-icons/fa'
import { SiGmail } from "react-icons/si";
import { SiZalo } from "react-icons/si";
const socials =[
    {icon:<SiGmail/>, path:''},
    {icon:<FaGithub/>, path:''},
    {icon:<SiZalo/>, path:'https://zalo.me/0385157444'},
    {icon:<FaTwitter/>, path:''},
]

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map( (item,index) =>(
            <Link key={index} href={item.path} className={iconStyles}>
                {item.icon}
            </Link>
        ) )}
    </div>
  )
}

export default Social