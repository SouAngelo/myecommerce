import { useSession } from 'next-auth/react'

import Dashboard from '../pages/dashboard'

import Head from "next/head";
import styles from '../../styles/home.module.sass'
import Login from './login';



export default function Home() {

  const {data: session} = useSession()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.container}>
         {!session ? (
          
          <Login/>

         ) : (
           <Dashboard/>
         )}
      </main>
    </>
  );
}
