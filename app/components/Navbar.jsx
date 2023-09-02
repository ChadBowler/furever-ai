import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './styles/Navbar.module.scss'

const lightIcons = ['/images/icons/dog-paw-black.png', '/images/icons/paws-black.png', '/images/icons/user-black.png', '/images/icons/up-arrow-light.png']

export default function Navbar() {
   
  return (
    <nav className={styles.navbar}>
        <div className={`light-text, ${styles.container}`} style={{justifyContent: 'flex-start'}}>
            <Link href={'#'}>
                <Image 
                    src={lightIcons[2]}
                    width={100}
                    height={100}
                    alt={'user icon'}                
                ></Image>
            </Link>
            <span>
                <Link href='#' className='light-text'>Sign In</Link>
            </span>
        </div>
        <div className={`light-text, ${styles.container}`}>
            <Image
                src={lightIcons[0]}
                width={100}
                height={100}
                alt={'paw icon'}   
            ></Image>
            <div className={styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className='light-text'>
                        Furever AI
                    </h1>
                    <p className='light-text'>Where pets and people belong together.</p>
                    </div>
                
            </div>
        </div>
        <div className={`light-text, ${styles.container}`}>
            <Link href='#' className='light-text'>Home</Link><span> | </span>
            <Link href='#' className='light-text'>About</Link><span> | </span>
            <Link href='#' className='light-text'>Pet Care</Link><span> | </span>
            <Link href='#' className='light-text'>Contact</Link>
        </div>
    </nav>
  )
}
