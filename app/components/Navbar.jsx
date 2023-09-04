import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.scss'

const navIcon = '/images/icons/nav-icon-light.png'

export default function Navbar() {
  return (
    <nav className={`text-black dark:text-white bg-secondary-light dark:bg-secondary-dark dark:font-dark-font-primary font-light-font flex flex-row justify-around p-4`}>
        <div className='hidden lg:flex flex-row items-center gap-4'>
            <Link href={'#'}>
                <div className={`${styles.signInIcon}`}></div>
            </Link>
            <span>
                <Link href='#' className='dark:hover:text-primary-dark hover:text-primary-light md:text-xl xl:text-3xl'>Sign In</Link>
            </span>
        </div>
        <div className='flex flex-row'>
            <div className={`${styles.dogPawIcon}`}></div>
                <div className='text-center'>
                    <h1 className='text-5xl xl:text-7xl'>
                        Furever AI
                    </h1>
                    <p className='text-lg'>Where pets and people belong together.</p>
                </div>
        </div>
        <div className='xs:block lg:hidden'>
            <Link href='#'>
                <Image
                src={navIcon}
                width={40}
                height={40}
                alt={'user icon'}
                >
                </Image>
            </Link>
        </div>
        <div className='text-black dark:text-white flex-row items-center gap-3 lg:text-xl xl:text-3xl hidden lg:flex'>
            <Link href='#' className='dark:hover:text-black hover:text-white'>Home</Link><span> | </span>
            <Link href='#' className='dark:hover:text-black hover:text-white'>About</Link><span> | </span>
            <Link href='#' className='dark:hover:text-black hover:text-white'>Pet Care</Link><span> | </span>
            <Link href='#' className='dark:hover:text-black hover:text-white'>Contact</Link>
        </div>
    </nav>
  )
}
