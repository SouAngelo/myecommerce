import React, { useState } from 'react'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <div className='container'>
      
      <form className='formContainer'>
          <div className='formHeader'>
            <div><span>SHOP</span>NEW <img src="https://cdn-icons-png.flaticon.com/512/2271/2271049.png" alt="" /></div>

            <h2>Login</h2>
            <p>Logue para acessar</p>
          </div>

          <div className='inputContainer'>
            {/* <label htmlFor="user">Email</label>
            <input type="email" placeholder="email@email.com" name="user"/>

            <label htmlFor="pass">Senha</label>
            <input type="password" placeholder="********" name="pass"/>

            <button type="submit">Logar</button>

            <p>Não tem uma conta? <Link href='/register' legacyBehavior><a>Cadastre-se</a></Link></p> */}

            <p>Site sem funcionar, estamos em atualizações... </p>

            <div className='authGoogle' onClick={() => signIn()}>
            <FaGoogle size={25}/> <p>Continuar com google</p> 
            </div>
          </div>

        </form>
    </div>
  )
}

export default Login