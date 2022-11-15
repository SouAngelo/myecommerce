import Head from 'next/head'
import React from 'react'
import Header from '../../components/header'
import Searchbar from '../../components/searchbar'
import styles from './products.module.sass'

import { FiStar } from 'react-icons/fi'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import Footer from '../../components/footer'

const img = 'https://static.vecteezy.com/system/resources/previews/002/006/605/original/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg'

function Products() {
  return (
    <>
      <Head>
        <title>NEWSHOP | Os melhores preços</title>
      </Head>
      <main className={styles.container}>
        <Header/>
        <Searchbar/>

        <div className={styles.containerProducts}>
             <div className={styles.banner}>
                <img src={img} alt="" className={styles.bannerImg}/>
                <img src="https://s.zst.com.br/prod/brickz/Fixo_Buscape_08_11_22_desk_088ff09ca5.png" alt="" className={styles.appImg}/>
             </div>

             <div className={styles.productContent}>
                <h2>Os melhores preços para você!</h2>

                <div className={styles.cardsContainer}>

                    <div className={styles.cardProduct}>
                       <img src="https://i.zst.com.br/thumbs/45/3e/39/-522515954.jpg" alt="" />
                       <p className={styles.description}>Smartphone Apple iPhone 12 64 GB Câmera Dupla</p>
                       <span><FiStar/> 4.9</span>
                       
                       <h3>Menor preço via Shoptime</h3>
                       <h1>R$ 3.607,12</h1>
                       <p className={styles.parcelament}>até 1x de R$ 4.099,00</p>
                    </div>

                    <div className={styles.cardProduct}>
                       <img src="https://i.zst.com.br/thumbs/45/29/19/-846658799.jpg" alt="" />
                       <p className={styles.description}>Smartphone Samsung Galaxy A53 5G SM-A536E 8GB RAM 128GB...</p>
                       <span><FiStar/> 4.9</span>
                       
                       <h3>Menor preço via Shoptime</h3>
                       <h1>R$ 1.498,50</h1>
                       <p className={styles.parcelament}>até 10x de R$ 166,50 com juros</p>
                    </div>

                    <div className={styles.cardProduct}>
                       <img src="https://i.zst.com.br/thumbs/45/37/3e/-846828012.jpg" alt="" />
                       <p className={styles.description}>Smartphone Samsung Galaxy A33 5G 6GB RAM 128GB Câmera...</p>
                       <span><FiStar/> 4.9</span>
                       
                       <h3>Menor preço via Shoptime</h3>
                       <h1>R$ 1.499,00</h1>
                       <p className={styles.parcelament}>até 8x de R$ 187,37 sem juros</p>
                    </div>

                    <div className={styles.cardProduct}>
                       <img src="https://i.zst.com.br/thumbs/45/37/35/-637533906.jpg" alt="" />
                       <p className={styles.description}>Smartphone Samsung Galaxy M53 5G 128GB Câmera Quádrupla</p>
                       <span><FiStar/> 4.9</span>
                       
                       <h3>Menor preço via Shoptime</h3>
                       <h1>R$ 1.499,00</h1>
                       <p className={styles.parcelament}>até 8x de R$ 208,00 com juros</p>
                    </div>
                </div>
             </div>
        </div>

        <Footer/>
      </main>
    </>
  )
}

export default Products

    

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
  