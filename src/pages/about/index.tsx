import Head from 'next/head'
import React from 'react'
import Header from '../../components/header'
import styles from './about.module.sass'

function About() {
  return (
    <>
      <Head>
        <title>Sobre nós</title>
      </Head>
      <Header/>
      <main className={styles.container}>
        
      </main>
    </>
  )
}

export default About