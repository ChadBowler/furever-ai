import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/Navbar.module.scss'

const lightImages = ['/images/dog-paw-black.png', '/images/paws-black.png', '/images/user-black.png', '/images/up-arrow-light.png']

export default function Navbar() {
  return (
    <nav className='bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10'>
        <div className='md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
            <Link href={'#'}>
                <Image 
                    src={lightImages[2]}
                    width={100}
                    height={100}
                    alt={'user icon'}                
                ></Image>
            </Link>
            <h1 className='text-3xl font-boold text-white grid place-content-center mb-2 md:mb-0'>
                <Link href='/' className='site-title'>Furever AI</Link>
            </h1>
            {/* <div className='flex flex-row justify-center sm:justify-evelny align-middle gap-4 text-white text-4xl lg:text-5xl'>
                <Link className='text-white/90 hover:text-white' href="https://youtube.com">
                    <FaYoutube />
                </Link>
                <Link className='text-white/90 hover:text-white' href="https://youtube.com">
                    <FaLaptop />
                </Link>
                <Link className='text-white/90 hover:text-white' href="https://github.com">
                    <FaGithub />
                </Link>
                <Link className='text-white/90 hover:text-white' href="https://twitter.com">
                    <FaTwitter />
                </Link>
            </div> */}
        </div>
    </nav>
  )
}
