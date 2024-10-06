'use client'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from "react-icons/ci";


const links = [
    {
        name:'Home',
        path:'/'
    },
    {
        name:'Services',
        path:'/services'
    },
    {
        name:'Resume',
        path:'/resume'
    },
    {
        name:'Work',
        path:'/work'
    },
    {
        name:'Contact',
        path:'/contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
               {/* Logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <h1 className="text-4xl font-semibold">Toan<span className="text-accent">Web</span> </h1>
                </div>
                {/* nav */}
                <nav className="flex flex-col justify-center gap-8 items-center">
                    {links.map( (link,index) => (
                        <Link href={link.path} key={index} 
                        className={`${link.path === pathname && "text-accent  border-accent"} text-xl font-medium hover:text-accent transition-all`}
                        > 
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav