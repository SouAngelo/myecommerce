import React, { useRef, useState } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

import Burger from "@animated-burgers/burger-squeeze";
import "@animated-burgers/burger-squeeze/dist/styles.css";

import styles from "./header.module.sass";

import { FiShoppingCart, FiUser } from "react-icons/fi";
import Link from "next/link";

import { signOut } from "next-auth/react";


function Header() {
  const { data: session } = useSession();

  const [open, setOpen] = useState(false);

  const hamb = useRef<any>(null);

  const openHamburguer = () => {
  
    setOpen(!open)

    if (!open) {
      hamb.current.style.display = "flex";
    } else {
      hamb.current.style.display = "none";
    }
  };

  return (
    <header className={styles.headerContainer}>
      <Burger isOpen={open} onClick={openHamburguer} id={styles.burguer}/>

      <Link href="/products" legacyBehavior>
        <a className={styles.logo}>
          <span>SHOP</span>NEW
        </a>
      </Link>

      <nav ref={hamb}>
        <ul>
          <Link href="/products" legacyBehavior>
            <a><li>Início</li></a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a><li>Sobre</li></a>
          </Link>
        </ul>
      </nav>

      <div className={styles.profileCartContainer}>
        <Link legacyBehavior href="/cart">
          <a>
            <FiShoppingCart />
          </a>
        </Link>

        <Image
          width={35}
          height={35}
          alt="user image"
          src={session?.user?.image || ''}
          quality={100}
          onClick={() => signOut()}
        />
      </div>
    </header>
  );
}

export default Header;
