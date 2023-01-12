import React, { useContext } from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";


import styles from "./header.module.sass";

import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";

import { signOut } from "next-auth/react";
import { cartContext } from "../../contexts/cartContexts";


function Header() {
  const { data: session } = useSession();
  const {cart} = useContext<any>(cartContext)



  return (
    <header className={styles.headerContainer}>

      <Link href="/products" legacyBehavior>
        <a className={styles.logo}>
          <span>SHOP</span>NEW
        </a>
      </Link>


      <div className={styles.profileCartContainer}>
        <Link legacyBehavior href="/cart">
          <a>
            <p className={styles.cartLength}>{cart.length}</p>
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

        <p>Olá <span>{session?.user?.name}</span></p>
      </div>
    </header>
  );
}

export default Header;
