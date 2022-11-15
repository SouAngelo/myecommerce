import React from "react";
import styles from "./searchbar.module.sass";
import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className={styles.container}>
      <div className={styles.containerInput}>
        <input type="text" placeholder="Pesquisar produto..." />
        <FaSearch size={25} />
      </div>
    </div>
  );
}

export default Searchbar;
