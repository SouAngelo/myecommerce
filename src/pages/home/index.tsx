import React from "react";
import { useSession, signOut, getSession } from "next-auth/react";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Header from "../../components/header";

import styles from "./home.module.sass";
import Head from "next/head";
import Footer from "../../components/footer";

function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Bem vindo a página inicial</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <h1>Bem vindo {session?.user?.name}</h1>

        <button onClick={() => signOut()}>SAIR</button>


        <Footer/>
      </div>
    </>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session?.user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
