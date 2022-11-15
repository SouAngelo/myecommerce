import { useSession } from 'next-auth/react'
import Homeecommerce from './homeecommerce';

import Head from "next/head";
import styles from '../../styles/initial.module.sass'
import Login from './login';





export default function Home() {

  const {data: session} = useSession()

  return (
    <>
      <Head>
        <title>Shop New</title>
      </Head>
      <main>
         {!session ? (
          
          <Login/>

         ) : (
           
           <Homeecommerce/>
        
         )}
      </main>
    </>
  );
}
