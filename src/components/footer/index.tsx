import React from 'react'

import styles from './footer.module.sass'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
        <div className={styles.links}>
          
          <div className={styles.sobre}>
            <h1>SOBRE NÓS</h1>
            <ul>
                <a href=""><li>Política de envio e entrega</li></a>
                <a href=""><li>Política de privacidade</li></a>
                <a href=""><li>Política de reembolso</li></a>
                <a href=""><li>Perguntas Frequentes</li></a>
                <a href=""><li>Fale Conosco</li></a>
                <a href="/about"><li>Sobre Nós</li></a>
            </ul>
           </div>

          <div className={styles.atendimento}>
            <h1>ATENDIMENTO</h1>
            <p>Whatsapp: 11 9999-9999</p>
            <p>shopnew@shopnew.com</p>
            <p>Seg a Sex. das 09h às 18h Sáb. das 09h às 13h</p>
          </div>
     </div>

     <div className={styles.creditos}>
        <p>@2022 New Shop - Todos os Direitos Reservados.</p>
     </div>
    </footer>
  )
}

export default Footer