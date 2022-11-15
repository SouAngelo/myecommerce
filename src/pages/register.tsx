import Head from "next/head";
import styles from '../../styles/home.module.sass'
import Link from "next/link";

export default function Register() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.container}>
         <form className={styles.formContainer}>
           <div className={styles.formHeader}>
             <div><span>SHOP</span>NEW <img src="https://cdn-icons-png.flaticon.com/512/2271/2271049.png" alt="" /></div>

             <h2>Login</h2>
             <p>Logue para acessar</p>
           </div>

           <div className={styles.inputContainer}>
            
             <label htmlFor="name">Nome</label>
             <input type="text" placeholder="email@email.com" name="name"/>

             <label htmlFor="user">Email</label>
             <input type="email" placeholder="email@email.com" name="user"/>

             <label htmlFor="pass">Senha</label>
             <input type="password" placeholder="********" name="pass"/>

             <button type="submit">Logar</button>

             <p>Já tem uma conta? <Link href='/' legacyBehavior><a>Entrar</a></Link></p>
           </div>

         </form>
      </main>
    </>
  );
}
