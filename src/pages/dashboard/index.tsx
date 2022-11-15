import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
import Image from 'next/image'
import { GetServerSideProps } from 'next'


function Dashboard( ) {
  const {data: session} = useSession()

  return (
    <div>
      <h1>Bem vindo {session?.user?.name}</h1>
      
      <button onClick={() => signOut()}>SAIR</button>
    </div>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (context) => {

  const session = await getSession(context)

  if(!session?.user){
     return{
      redirect:{
        destination: '/',
        permanent: false
      }
     }
     
  }


  return{
    props:{
      
    }
  }

}