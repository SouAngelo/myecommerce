import { GetServerSideProps } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Footer from "../../components/footer";
import { FaCreditCard, FaTruck, FaLocationArrow } from "react-icons/fa";
import { FiShoppingBag, FiShoppingCart } from "react-icons/fi";

import Image from "next/image";

import styles from "./product.module.sass";

import api, { apiCep } from "../../services/api";
import Header from "../../components/header";
import ModalPayment from "../../components/modal";
import { getSession } from "next-auth/react";

type ProductProps = {
  data: any;
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: any;
  title: string;
};

interface Props {
  response: ProductProps;
}

function Product({ response }: Props) {
  const [cep, setCep] = useState<any>("");
  const [loading, setLoading] = useState(false);
  const [visibleCep, setVisibleCep] = useState(false);

  function getCep(e: any) {
    e.preventDefault();
    setLoading(true);

    setTimeout(async () => {
      try {
        response = await apiCep.get(`${cep}/json`);

        setCep(response.data);
        setVisibleCep(true);
        setLoading(false);
      } catch (e) {
        console.log(e);
        alert("Digite um CEP correto!");
        setLoading(false);
        setCep("");
      }
    }, 1000);
  }

  return (
    <>
      <Head>
        <title>{response.title}</title>
      </Head>
      <Header />
      <main className={styles.container}>
        <section className={styles.productContainer}>
          <ModalPayment />
          <div className={styles.productArticle}>
            <div className={styles.containerImages}>
              <img src={response.image} alt="" />

              <div className={styles.demoContainer}>
                <div className={styles.demoImage}>
                  <img src={response.image} alt="" />
                </div>

                <div className={styles.demoImage}>
                  <img src={response.image} alt="" />
                </div>

                <div className={styles.demoImage}>
                  <img src={response.image} alt="" />
                </div>

                <div className={styles.demoImage}>
                  <img src={response.image} alt="" />
                </div>
              </div>
            </div>

            <article className={styles.productContent}>
              <h1>{response.title}</h1>

              <p>{response.description}</p>
            </article>
          </div>

          <aside className={styles.productPurchase}>
            <del>R$ {(response.price * 2).toFixed(2)}</del>
            <strong>R$ {response.price.toFixed(2)}</strong>
            <p className={styles.installment}>à vista no cartão de crédito</p>
            <span>
              <FaCreditCard />{" "}
              <p>
                R$ {response.price.toFixed(2)} em até 8x de R${" "}
                {(response.price / 8).toFixed(2)}
              </p>
            </span>
            <a>mais formas de pagamento</a>

            <div className={styles.shippingContainer}>
              {loading && <h1>Buscando CEP...</h1>}

              {visibleCep ? (
                <>
                  <p>
                    <FaLocationArrow /> {cep.logradouro}, {cep.bairro} -{" "}
                    {cep.localidade}
                  </p>

                  <hr />
                </>
              ) : (
                <p>calcular frete e prazo</p>
              )}

              <form className={styles.inputArea} onSubmit={getCep}>
                {visibleCep ? (
                  <div className={styles.receipt}>
                    <span>
                      <FaTruck /> <span>Receba em até</span> 15 dias
                    </span>
                    <p>grátis</p>
                  </div>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Digite seu CEP"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                    />
                    <button type="submit">ok</button>
                  </>
                )}
              </form>
            </div>

            <button className={styles.btnShop}>
              <FiShoppingBag /> Comprar
            </button>

            <button className={styles.btnShop}>
              <FiShoppingCart /> Adicionar ao carrinho
            </button>
          </aside>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Product;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const product = context?.params;
  const session = await getSession(context);

  const response = await api.get(`/products/${Number(product?.product)}`);

  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/",
  //       permanent: false,
  //     },
  //   };
  // }

  return {
    props: {
      response: response.data,
    },
  };
};
