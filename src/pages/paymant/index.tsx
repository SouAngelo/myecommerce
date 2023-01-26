import React, { useContext } from "react";
import { cartContext } from "../../contexts/cartContexts";

import styles from "./styles.module.sass";

import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

function Paymant() {
  const { cart } = useContext<any>(cartContext);

  function homeBack(){
    window.location.href = '/'
  }

  function congratulations(){
    window.location.href = '/sucess'
  }

  return (
    <div className={styles.container}>
      {cart.length > 0 ? (
        <>
          <div className={styles.containerForm}>
            <div className={styles.resumeProducts}>
              <div className={styles.paymantArrow}>
                <Link href="/cart" legacyBehavior>
                  <a>
                    <FaArrowLeft />
                  </a>
                </Link>

                <p>Pagamento</p>
              </div>

              <div className={styles.resumePrice}>
                <p>Realizar o pagamento</p>
                <span>
                  R${" "}
                  {cart
                    .reduce((total: any, item: any) => (total += item.price), 0)
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </div>

              {cart.map((product: any, index: any) => (
                <div className={styles.resumeItems} key={index}>
                  <div className={styles.resumeProduct}>
                    <img src={product.image} alt="" />
                    <p>{product.name}</p>
                  </div>

                  <span>R$ {product.price.toFixed(2).replace(".", ",")}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.btn}>
              <a  onClick={congratulations}>Concluir compra</a>
          </div>
        </>
      ) : (
        <>
         
          <a onClick={homeBack}>
            <h1>Voltar ao início</h1>
          </a>
       
        </>
      )}
    </div>
  );
}

export default Paymant;
