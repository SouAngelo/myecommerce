import { useSession } from 'next-auth/react'

import Head from "next/head";
import Login from './login';
import Products from './products';





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
           
           <Products/>
        
         )}
      </main>
    </>
  );
}
