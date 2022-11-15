import Head from 'next/head'
import React from 'react'

import styles from './cart.module.sass'

import Header from '../../components/header'
import Footer from '../../components/footer'

function Cart() {
  return (
    <>
      <Head>
        <title>Carrinho de compras</title>
      </Head>
      <main className={styles.container}>
        <Header/>
        <h1>Carrinho de compras</h1>

        <Footer/>
      </main>
    </>
  )
}

export default Cart