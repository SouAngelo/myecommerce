import Head from "next/head";
import React, { useContext } from "react";

import styles from "./cart.module.sass";

import Header from "../../components/header";
import Footer from "../../components/footer";
import { cartContext } from "../../contexts/cartContexts";

import { FaTrash, FaStore } from "react-icons/fa";
import Link from "next/link";
import { privateDecrypt } from "crypto";

function Cart() {
  const { cart, handleRemoveItem, clearCart} = useContext<any>(cartContext);

  return (
    <>
      <Head>
        <title>Carrinho de compras</title>
      </Head>
      <main className={styles.container}>
        <Header />

        {cart.length == 0 && (
          <div className={styles.alertCart}>
            <FaStore />

            <h3>Seu carrinho está vazio</h3>

            <p>
              Que tal navegar pelas milhares de ofertas e achar uma especial
              para você?
            </p>

            <Link href="/" legacyBehavior>
              <a>Ver produtos</a>
            </Link>
          </div>
        )}

        {cart.length > 0 && (
          <div className={styles.myCart}>
            <h1>Meu carrinho:</h1>
            <p onClick={clearCart}>Limpar tudo</p>
          </div>
        )}

        {cart.map((item: any, index: any) => (
          <div className={styles.containerCart} key={index}>
            <div className={styles.productContainer}>
              <div className={styles.nameAndImage}>
                <Link href={`products/${item.id}`} legacyBehavior>
                  <a>
                    <img src={item.image} alt="" />
                  </a>
                </Link>

                <div className={styles.priceAndName}>
                  <Link href={`products/${item.id}`} legacyBehavior>
                    <a className={styles.productName}>{item.name}</a>
                  </Link>

                  <h3>R$ {(item.price).toFixed(2)}</h3>
                </div>
              </div>

              <button onClick={() => handleRemoveItem(index)}>
                <FaTrash />
              </button>
            </div>
          </div>
        ))}

        {cart.length > 0 && (
          <div className={styles.totalResume}>
            <h1>resumo do pedido</h1>

            <div className={styles.priceResume}>
              <label>
                <p>{cart.length} {cart.length > 1 ? 'produtos' : 'produto'}</p>
                <span>R$ {(cart.reduce((total: any, item: any) => total += item.price, 0).toFixed(2))}</span>
              </label>

              <label>
                <a>frete</a>
                <a>grátis</a>
              </label>
            </div>

            <hr />

            <div className={styles.finalResume}>
              <h2>total</h2>
              <label>
                <p>R$ {(cart.reduce((total: any, item: any) => total += item.price, 0).toFixed(2))}</p>
                <span>em 1x no cartão ou R$ {(cart.reduce((total: any, item: any) => total += item.price, 0).toFixed(2))} em até 8x</span>
              </label>
            </div>

            <hr />

            <button>Continuar</button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Cart;
