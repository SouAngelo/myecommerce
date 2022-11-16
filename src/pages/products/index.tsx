import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Searchbar from "../../components/searchbar";
import styles from "./products.module.sass";

import { FiStar } from "react-icons/fi";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import Footer from "../../components/footer";

import api from "../../services/api";
import Link from "next/link";

const img =
  "https://static.vecteezy.com/system/resources/previews/002/006/605/original/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-free-vector.jpg";

interface ProductProps {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: any;
  title: string;
}

function Products() {
  const [product, setProduct] = useState<ProductProps[]>([]);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get("/products");

      console.log(response.data);
      setProduct(response.data);
    }

    getProduct();
  }, []);

  return (
    <>
      <Head>
        <title>NEWSHOP | Os melhores preços</title>
      </Head>
      <main className={styles.container}>
        <Header />
        <Searchbar />

        <div className={styles.containerProducts}>
          <div className={styles.banner}>
            <img src={img} alt="" className={styles.bannerImg} />
            <img
              src="https://s.zst.com.br/prod/brickz/Fixo_Buscape_08_11_22_desk_088ff09ca5.png"
              alt=""
              className={styles.appImg}
            />
          </div>

          <div className={styles.productContent}>
            <h2>Os melhores preços para você!</h2>

            <div className={styles.cardsContainer}>
              {product.map((product) => (
                <Link key={product.id} legacyBehavior href={`/products/${product.id}`}>
                  <a>
                    <div className={styles.cardProduct}>
                      <img src={product.image} alt="" />
                      <p className={styles.description}>{product.title}</p>
                      <span>
                        <FiStar />
                        {product.rating.rate}
                      </span>

                      <h3>Menor preço via Shoptime</h3>
                      <h1>R$ 3.607,12</h1>
                      <p className={styles.parcelament}>
                        até 1x de R$ 4.099,00
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}

export default Products;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};
