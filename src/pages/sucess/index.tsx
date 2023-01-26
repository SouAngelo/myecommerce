import { useSession } from "next-auth/react";
import styles from "./styles.module.sass";

import Link from "next/link";
import { FiShoppingBag } from "react-icons/fi";

function Sucess() {
  const { data: session } = useSession();

  function homeBack(){
    window.location.href = '/'
  }

  return (
    <div className={styles.container}>
      <h1>Parabéns {session?.user?.name}</h1>
      <p>Compra concluída com sucesso!</p>
        <a onClick={homeBack}>Voltar as compras <FiShoppingBag/></a> 
    </div>
  );
}

export default Sucess;

