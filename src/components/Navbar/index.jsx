import {Routes,Route,Link} from 'react-router-dom'
import React from 'react'
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.content}>
        <li key={1} ><Link className={styles.link} to='/happysummer'>HAPPY SUMMER</Link></li>
        <li key={2} ><Link className={styles.link} to= '/kidsbox'>KIDS BOX</Link></li>
        <li key={3} ><Link className={styles.link} to='/buy1get3'>MUA 1 ĐƯỢC 3</Link></li>
        <li key={4} ><Link className={styles.link} to='/mybox'>MY BOX</Link></li>
        <li key={5} ><Link className={styles.link} to='/combo'>LIMO & COMBO</Link></li>
    
    </ul>
    </div>
  )
}

export default Navbar