"use client";

import {Sheet, SheetContent, SheetTrigger}from '@/components/ui/sheet'
import {usePathname} from 'next/navigation'
import Link from 'next/link';
import {CiMenuFries} from 'react-icons/ci'

const links = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Skills & Tools',
        path: '/services'
    },
    {
        name: 'Resume',
        path: '/resume'
    },
    {
        name: 'Work',
        path: '/work'
    },
    {
        name: 'Contact',
        path: '/contact'
    },
]
const MobileNav = () => {
    const pathname = usePathname();
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
    {/* Logo */}
    <div className="mt-10 mb-10 text-center text-2xl">
        <Link href="/">
        <h1 className="text-4xl font-semibold">
            Seb<span className="text-accent">'s</span></h1>
        </Link>
    </div>
    {/* nav */}
    <nav className="flex flex-col justify-center items-center gap-6">
        {links.map((link, index)=>{
            return <Link href={link.path} key={index} className={`${link.path === pathname &&
                 "text-accent border-b-2 border-accent"}
                 text-xl capitalize
            hover:text-accent transition-all`}>
            {link.name}
            </Link>
        })}
    </nav>
    </SheetContent>
  </Sheet>;
};

export default MobileNav