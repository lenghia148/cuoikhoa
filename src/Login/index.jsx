import React from 'react'
import styles from './Login.module.css'
const Login = () => {
  return (
   <form className={styles.form_login}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className={styles.img_login}><img src="https://cdn.pizzahut.vn/images/Web_V3/Member/EN-1548x1557.jpg" alt="" /></div>
            <div className={styles.form_container}>
              <h1> 
                🍕🍕 WELCOME BACK!
              </h1>
              <h2>YOU’VE REGISTERED AS HUT REWARDS MEMBER.
                  MAKE SURE YOU LOGIN BEFORE CHECKOUT TO EARN POINTS FOR FREE PIZZAS!
              </h2>
              <label>Email *</label>
              <input></input>
              <label>Password *</label>
              <input></input>
              <button>LOGIN</button>
            </div>
   </form>
  )
}

export default Login