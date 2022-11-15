import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

import styles from './header.module.sass'

import { FiShoppingCart, FiUser } from 'react-icons/fi'
import Link from 'next/link'

import { signOut } from 'next-auth/react'

function Header() {

    const {data: session} = useSession()

  return (
     <header className={styles.headerContainer}>
       <Link href='/home' legacyBehavior>
           <a className={styles.logo}><span>SHOP</span>NEW</a>
       </Link>

        <nav>
            <ul>
                <Link href='/home'><li>Início</li></Link>
                <Link href='/products'><li>Loja</li></Link>
                <Link href='/about'><li>Sobre</li></Link>
            </ul>
        </nav>

        <div className={styles.profileCartContainer}>
        <Link legacyBehavior href='/cart'>
           <a><FiShoppingCart size={35}/></a>
        </Link>
        
           <Image width={35} height={35} alt='user image' src={session?.user?.image} quality={100} onClick={() => signOut()}/>
        </div>
     </header>
  )
}

export default Header