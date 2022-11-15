import { useSession } from 'next-auth/react'
import Home from './home';

import Head from "next/head";
import styles from '../../styles/initial.module.sass'
import Login from './login';





export default function Initial() {

  const {data: session} = useSession()

  return (
    <>
      <Head>
        <title>Shop New</title>
      </Head>
      <main className={styles.container}>
         {!session ? (
          
          <Login/>

         ) : (
           <>
           
           <Home/>
           </>
         )}
      </main>
    </>
  );
}
