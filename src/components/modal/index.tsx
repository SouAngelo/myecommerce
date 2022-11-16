import React from "react";
import styles from "./modal.module.sass";

import { FaCreditCard, FaTicketAlt, FaBarcode } from "react-icons/fa";

import Image from "next/image";

function ModalPayment() {
  return (
    <div className={styles.containerModal}>
      <div className={styles.contentModal}>
        <span>X</span>
        <h2>mais formas de pagamento</h2>

        <div className={styles.paymentIcons}>
          <FaCreditCard/>
          <FaBarcode/>
          <Image src="/pix.svg" alt="" width={33} height={33} />
        </div>
      </div>
    </div>
  );
}

export default ModalPayment;
