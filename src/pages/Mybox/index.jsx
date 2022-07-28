import React from 'react'
import Header from '../../components/Header'
import Shopcart from '../../components/Shopcart'
import Navbar from '../../components/Navbar'
import styles from './Mybox.module.css'
const Mybox = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.content}>
        <Header></Header>
        <Navbar/>
      </div>
      <div className={styles.shopcart}>
        <Shopcart/>
      </div>
    </div>
  )
}

export default Mybox